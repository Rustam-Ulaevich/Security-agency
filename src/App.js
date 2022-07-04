import {Card} from "./components/Card";
import {Header} from "./components/Header";
import {ShoppingCart} from "./components/ShoppingCart";



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

                    <Card/>

                    <div className='card'>
                        <div className='like'>
                            <img src='/image/like.svg' alt='liked'/>
                        </div>
                        <img src='/image/securiti/sprut.jpg' width='150' alt=''/>
                        <h5>Комиcсар Катани</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена:</span>
                                <b>0,5 литра</b>
                            </div>
                            <button className='button'>
                                <img width={'11px'} height={'11px'} src='/image/plus.png'/>
                            </button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='like'>
                            <img src='/image/unLike.svg' alt='liked'/>
                        </div>
                        <img src='/image/securiti/slide37.jpg' width='100' alt=''/>
                        <h5> полицейский Макконе</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена:</span>
                                <b>1500 $</b>
                            </div>
                            <button className='button'>
                                <img width={'11px'} height={'11px'} src='/image/plus.png'/>
                            </button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='like'>
                            <img src='/image/like.svg' alt='liked'/>
                        </div>
                        <img src='/image/securiti/musor.jpg' width='100' alt=''/>
                        <h5>Полицейский с Рублёвки</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена:</span>
                                <b>50000 руб.</b>
                            </div>
                            <button className='button'>
                                <img width={'11px'} height={'11px'} src='/image/plus.png'/>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
