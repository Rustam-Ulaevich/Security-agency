import {Route, Routes, Link} from "react-router-dom";
import axios from "axios";
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import {ShoppingCart} from "./components/ShoppingCart/ShoppingCart";
import {useEffect, useState} from "react";
import {Likes} from "./pages/Likes";
import {AppContext} from "./context";
import {Orders} from "./pages/Orders";

function App() {
    const [items, setItems] = useState([])
    const [itemCart, setItemCart] = useState([])
    const [isLike, setIsLike] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [openCart, setOpenCart] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const shoppingCartResponce = await axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart');
            const likesResponce = await axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/likes');
            const itemsResponse = await axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/items');
            setIsLoading(false)
            setItemCart(shoppingCartResponce.data);
            setIsLike(likesResponce.data);
            setItems(itemsResponse.data);
        }

        fetchData()
    }, []);
    const addItemCart = (obj) => {
        if (itemCart.find(i => Number(i.id) === Number(obj.id))) {
            axios.delete(`https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart/${obj.id}`);
            setItemCart(prev => prev.filter(i => Number(i.id) !== Number(obj.id)))
        } else {
            axios.post('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart', obj);
            setItemCart((prev) => [...prev, obj])
        }
    }
    const removeItemCart = (id) => {
        axios.delete(`https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart/${id}`);
        setItemCart(prev => prev.filter(i => i.id !== id))
    }
    const addLikes = async (obj) => {
        try {
            if (isLike.find(likeObj => Number(likeObj.id) === Number(obj.id))) {
                axios.delete(`https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart/${obj.id}`);
                setIsLike(prev => prev.filter(i => Number(i.id) !== Number(obj.id)))
            } else {
                const {data} = await axios.post('https://62c3ffff7d83a75e39ecd122.mockapi.io/likes', obj);
                setIsLike((prev) => [...prev, data])
            }
        } catch (error) {
            alert('Could not add to liked')
        }
    }
    const onChangeSearchInput = (e) => {
        setSearchValue(e.currentTarget.value)
    }
    const isItemAdded = (id) => {
        return itemCart.some(obj => Number(obj.id) === Number(id))
    }
    // const clearSearch = () => {
    //     setSearchValue('')
    // }

    return (
        <AppContext.Provider value={{
            items,
            itemCart,
            isLike,
            isItemAdded,
            addLikes,
            setOpenCart,
            setItemCart
        }}>
            <div className="App clear">
                <div>
                    <ShoppingCart items={itemCart}
                                  onClickCart={() => setOpenCart(false)}
                                  removeItemCart={removeItemCart}
                                  opened={openCart}
                    />
                </div>


                <Header onClickCart={() => setOpenCart(true)}/>
                <Routes>
                    <Route path='/' element={
                        <Home
                            items={items}
                            itemCart={itemCart}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            addLikes={addLikes}
                            addItemCart={addItemCart}
                            isLoading={isLoading}
                        />}/>
                    <Route path='/Likes' element={<Likes/>}/>
                    <Route path='/Orders' element={<Orders/>}/>
                </Routes>
            </div>
        </AppContext.Provider>

    );
}

export default App;
