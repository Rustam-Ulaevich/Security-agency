export function ShoppingCart({onClickCart, removeItemCart, items=[]}) {

    return (
        <div  className='shadowShoppingCart'>
            <div className='shoppingCart'>
                <h2 className='d-flex justify-between mb-20'>Cart
                    <img onClick={onClickCart} className='removeBtn cu-p' src='/image/removeClick.svg' alt='Remove'/>
                </h2>

                {
                    items.length > 0 ?
                        <div className="items">
                        {items.map( i => (
                            <div className="shoppingCartItem d-flex align-center mb-20">
                                <img className='m-10' src={i.image} width={100} alt=""/>
                                <div className='mr-20'>
                                    <p className='mb-5'>{i.title}</p>
                                    <b>{i.price}</b>
                                </div>
                                <img onClick={() => removeItemCart(i.id)}
                                     className='removeBtn'
                                     src='/image/removeClick.svg'
                                     alt='Remove'/>
                            </div>
                        ))}
                    </div> : <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                            <img src="/image/cartEmpty.svg" alt='cartEmpty'/>
                            <h2>The cart is empty</h2>
                            <p>Add at least one security guard to place an order</p>
                            <button className='greenButton'>
                                <img src='/image/strelka.svg' alt="cartEmpty"/>
                                You can't go back
                            </button>
                        </div>
                }





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
