import axios from "axios";
import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {ShoppingCart} from "./components/ShoppingCart";
import {useEffect, useState} from "react";




function App() {
    const [items, setItems] = useState([])
    const [itemCart, setItemCart] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [openCart, setOpenCart] = useState(false)
    console.log(searchValue)

    useEffect( () => {
        axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/items').then(res => {
            setItems(res.data);
        });
        axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart').then(res => {
            setItemCart(res.data);
        });
    }, []);



    // [{
    //     "title": "Охранник Александррр Боррродач",
    //     "price": "0.5 литра",
    //     "imageUrl": "/image/security/borodach_page.jpg"
    // },
    //     {
    //         "title": "Комиcсар Катани",
    //         "price": "777 лир",
    //         "imageUrl": "/image/security/sprut.jpg"
    //     },
    //     {
    //         "title": "Полицейский Макконе",
    //         "price": "350 $",
    //         "imageUrl": "/image/security/slide37.jpg"
    //     },
    //     {
    //         "title": "Полицейский с Рублёвки",
    //         "price": "100000 $ (в чёрном пакете)",
    //         "imageUrl": "/image/security/musor.jpg"
    //     }]

    const addItemCart = (obj) => {
        axios.post('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart', obj);
      setItemCart((prev) => [...prev, obj])
        console.log(itemCart)
    }

    const onChangeSearchInput = (e) => {
        setSearchValue(e.currentTarget.value)
    }

    const clearSearch = () => {
        setSearchValue('')
    }
    console.log(itemCart)

    const removeItemCart = (id) => {
        console.log(id)
      // axios.delete(`https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart/${id}`

        setItemCart( prev => prev.filter( i => i.id !== id))

    }



    return (
        <div className="App clear">
            {openCart && <ShoppingCart items={itemCart} onClickCart={()=>setOpenCart(!openCart)} removeItemCart={removeItemCart}/>}
            <Header onClickCart={()=>setOpenCart(!openCart)}
            />
            <div className='content p-40'>
                <div className='d-flex justify-between  mb-40'>
                    <h3>{searchValue ? `Search by: "${searchValue}"` : 'All the guards'}</h3>
                    <div className='search d-flex align-center'>
                        <img src='/image/lupa.png' height={20} alt='search'/>
                        <input value={searchValue} onChange={onChangeSearchInput} placeholder='Search...' />
                        { searchValue && <img className='removeBtn' onClick={clearSearch} src='/image/removeClick.svg' alt='Remove'/>}
                    </div>
                </div>

                <div className='d-flex'>

                    {items.filter( item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map( (item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            image={item.imageUrl}
                            onClickLike={()=> console.log('added like')}
                            onClickPlus={(obj)=> addItemCart(obj)}
                        />))}

                </div>
            </div>
        </div>
    );
}

export default App;
