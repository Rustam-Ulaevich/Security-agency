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
    console.log(searchValue)

    useEffect(() => {
        axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/items').then(res => {
            setItems(res.data);
        });
        axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart').then(res => {
            setItemCart(res.data);
        });
    }, []);

    const addItemCart = (obj) => {
        axios.post('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart', obj);
        setItemCart((prev) => [...prev, obj])
    }
    const onChangeSearchInput = (e) => {
        setSearchValue(e.currentTarget.value)
    }
    const clearSearch = () => {
        setSearchValue('')
    }
    const removeItemCart = (id) => {
        console.log(id)
        axios.delete(`https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart/${id}`);
        setItemCart(prev => prev.filter(i => i.id !== id))
    }
    const addLikes = (obj) => {
        axios.post('https://62c3ffff7d83a75e39ecd122.mockapi.io/likes', obj);
        setIsLike((prev) => [...prev, obj])
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
                <Route path='/Likes' element={<Likes/> } />
            </Routes>

        </div>
    );
}

export default App;
