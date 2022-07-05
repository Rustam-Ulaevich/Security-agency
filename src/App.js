import {Card} from "./components/Card/Card";
import {Header} from "./components/Header";
import {ShoppingCart} from "./components/ShoppingCart";

const arr = [
    {
        title: 'Охранник Александррр Боррродач',
        price: '0.5 литра',
        imageUrl: '/image/security/borodach_page.jpg'
    },
    {
        title: 'Комиcсар Катани',
        price: '777 лир',
        imageUrl: '/image/security/sprut.jpg'
    },
    {
        title: 'Полицейский Макконе',
        price: '350 $',
        imageUrl: '/image/security/slide37.jpg'
    },
    {
        title: 'Полицейский с Рублёвки',
        price: '100000 $ (в чёрном пакете)',
        imageUrl: '/image/security/musor.jpg'
    }
]

function App() {
    return (
        <div className="App clear">

            <ShoppingCart/>
            <Header/>
            <div className='content p-40'>
                <div className='d-flex justify-between  mb-40'>
                    <h3>All the guards</h3>
                    <div className='search d-flex align-center'>
                        <img src='/image/lupa.png' height={20} alt='search'/>
                        <input placeholder='Search...'/>
                    </div>
                </div>

                <div className='d-flex'>

                    {arr.map( a => <Card title={a.title} price={a.price} image={a.imageUrl}/>)}

                </div>
            </div>
        </div>
    );
}

export default App;
