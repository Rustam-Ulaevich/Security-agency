import {Info} from "./info";
import {useContext, useState} from "react";
import {AppContext} from "../context";

export function ShoppingCart({onClickCart, removeItemCart, items = []}) {
    const {setItemCart} = useContext(AppContext)
    const [order, setOrder] = useState(false)

    const onClickOrder = () => {
        setOrder(true)
        setItemCart([])
    }

    return (
        <div className='shadowShoppingCart'>
            <div className='shoppingCart'>
                <h2 className='d-flex justify-between mb-20'>Cart
                    <img onClick={onClickCart} className='removeBtn cu-p' src='/image/removeClick.svg' alt='Remove'/>
                </h2>

                {
                    items.length > 0 ?
                        <div className='d-flex flex-column flex'>
                            <div className="items">
                                {items.map((i) => (
                                    <div key={i.id} className="shoppingCartItem d-flex align-center mb-20">
                                        <img className='m-10' src={i.image} width={100} alt=""/>
                                        <div className='mr-20'>
                                            <p className='mb-5'>{i.title}</p>
                                            <b>{i.price}</b>
                                        </div>
                                        <img onClick={() => removeItemCart(i.id)}
                                             className='removeBtn'
                                             src='/image/removeClick.svg'
                                             alt='Remove'/>
                                    </div>))}
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
                                <button onClick={onClickOrder} className='greenButton'>Place an order<img
                                    src='/image/strelka.svg' alt='Arrow'/>
                                </button>
                            </div>
                        </div>
                        : (
                            <Info title = { order ? 'The order has been placed!' : 'The basket is empty'}
                                  description = { order ? 'Your order #18 will be delivered to courier delivery soon' : 'Add at least one security guard to place an order'}
                                  image = {order ? '/image/order.svg' : '/image/cartEmpty.svg'}
                            />
                        )}
            </div>
        </div>
    );
}
