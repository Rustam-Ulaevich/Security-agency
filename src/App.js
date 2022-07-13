import {Route, Routes, Link} from "react-router-dom";
import axios from "axios";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {ShoppingCart} from "./components/ShoppingCart";
import {useEffect, useState} from "react";
import {Likes} from "./pages/Likes";

function App() {

    const [items, setItems] = useState([])
    const [itemCart, setItemCart] = useState([])
    const [isLike, setIsLike] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [openCart, setOpenCart] = useState(false)


    useEffect(() => {
        axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/items').then(res => {
            setItems(res.data);
        });
        axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart').then(res => {
            setItemCart(res.data);
        });
        axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/likes').then(res => {
            setIsLike(res.data);
        });
    }, []);

    const addItemCart = (obj) => {
        if(itemCart.find( i => i.id == obj.id)){
setItemCart( prev => prev.filter( i => i.id !== obj.id))
        }else{
            axios.post('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart', obj);
            setItemCart((prev) => [...prev, obj])
        }
    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.currentTarget.value)
    }

    const clearSearch = () => {
        setSearchValue('')
    }

    const removeItemCart = (id) => {
        axios.delete(`https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart/${id}`);
        setItemCart(prev => prev.filter(i => i.id !== id))
    }

    const addLikes = async (obj) => {
        try {
            if(isLike.find( likeObj => likeObj.id == obj.id)) {
                axios.delete(`https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart/${obj.id}`);
                setIsLike(prev => prev.filter(i => i.id !== obj.id))
            } else {
                const {data} = await axios.post('https://62c3ffff7d83a75e39ecd122.mockapi.io/likes', obj);
                setIsLike((prev) => [...prev, data])
            }
        } catch (error) {
            alert('Could not add to liked')
        }
    }

    const onClickButton = () => {
    }

    return (
        <div className="App clear">
            {openCart &&
            <ShoppingCart items={itemCart} onClickCart={() => setOpenCart(!openCart)} removeItemCart={removeItemCart}/>}
            <Header onClickCart={ ()=>setOpenCart(!openCart)} />
            <Routes>
                <Route path='/' element={
                    <Home
                        searchValue={searchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        clearSearch={clearSearch}
                        items={items}
                        addLikes={addLikes}
                        addItemCart={addItemCart}

                    />} />
                <Route path='/Likes' element={
                    <Likes items={isLike}
                           addLikes={addLikes}
                    /> } />
            </Routes>

        </div>
    );
}

export default App;
