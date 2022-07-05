export function ShoppingCart({onClickCart, items=[]}) {

    return (
        <div  className='shadowShoppingCart'>
            <div className='shoppingCart'>
                <h2 className='d-flex justify-between mb-20'>Cart
                    <img onClick={onClickCart} className='removeBtn cu-p' src='/image/removeClick.svg' alt='Remove'/>
                </h2>

                <div className="items">

                    {items.map( i => (
                        <div className="shoppingCartItem d-flex align-center mb-20">
                            <img className='m-10' src={i.image} width={100} alt=""/>
                            <div className='mr-20'>
                                <p className='mb-5'>{i.title}</p>
                                <b>{i.price}</b>
                            </div>
                            <img className='removeBtn' src='/image/removeClick.svg' alt='Remove'/>
                        </div>
                    ))}
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
