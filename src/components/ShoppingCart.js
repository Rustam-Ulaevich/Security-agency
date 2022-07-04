export function ShoppingCart() {
    return (
        <div  className='shadowShoppingCart'>
            <div className='shoppingCart'>
                <h2 className='d-flex justify-between mb-20'>Cart
                    <img className='removeBtn cu-p' src='/image/removeClick.svg' alt='Remove'/>
                </h2>

                <div className="items">
                    <div className="shoppingCartItem d-flex align-center mb-20">
                        <img className='m-10' src="/image/securiti/borodach_page.jpg" width='50' alt=""/>
                        <div className='mr-20'>
                            <p className='mb-5'>Охраник Александррр Боррродач</p>
                            <b>0,5 литра</b>
                        </div>
                        <img className='removeBtn' src='/image/removeClick.svg' alt='Remove'/>
                    </div>

                    <div className="shoppingCartItem d-flex align-center mb-20">
                        <img className='m-10' src="/image/securiti/borodach_page.jpg" width='50' alt=""/>
                        <div className='mr-20'>
                            <p className='mb-5'>Охраник Александррр Боррродач</p>
                            <b>0,5 литра</b>
                        </div>
                        <img className='removeBtn' src='/image/removeClick.svg' alt='Remove'/>
                    </div>
                </div>

                <div className='total'>
                    <ul>
                        <li className='d-flex justify-between'>
                            <span>Total:</span>
                            <div></div>
                            <b>350 руб</b>
                        </li>
                        <li className='d-flex justify-between'>
                            <span>Tax 13%:</span>
                            <div></div>
                            <b>45,5 руб</b>
                        </li>

                    </ul>
                    <button className='greenButton'>Place an order<img src='/image/strelka.svg' alt='Arrow'/>
                    </button>
                </div>
            </div>
        </div>
    );
}
