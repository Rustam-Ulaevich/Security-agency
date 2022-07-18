import {Info} from "./info";
import {useContext, useState} from "react";
import {AppContext} from "../context";
import axios from "axios";

const delay = (ms) => new Promise( (resolve) => setTimeout(resolve, ms))

export function ShoppingCart({onClickCart, removeItemCart, items = []}) {
    const {cartItems, setCartItems} = useContext(AppContext)
    const [orderId, setOrderId] = useState(null)
    const [order, setOrder] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    //const totalPrice2 = cartItems.reduce( (sum, obj) => obj.price + sum, 0)

    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.post('https://62c3ffff7d83a75e39ecd122.mockapi.io/orders', {
                items: cartItems
            });
            //await axios.put('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart', [])
            setOrderId(data.id)
            setOrder(true)
            setCartItems([])

            for (let i=0; i<cartItems.length; i++){
                const item = cartItems[i]
                await axios.delete('https://62c3ffff7d83a75e39ecd122.mockapi.io/shoppingCart/' + item.id );
                await delay(1000)
            }

        } catch (error){
            alert('Failed to create an order :(')
        }
        setIsLoading(false)
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
                                        <b>totalPrice2</b>
                                    </li>
                                    <li className='d-flex justify-between'>
                                        <span>Tax 13%:</span>
                                        <div></div>
                                        <b>45,5 руб</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Place an order<img
                                    src='/image/strelka.svg' alt='Arrow'/>
                                </button>
                            </div>
                        </div>
                        : (
                            <Info title = { order ? 'The order has been placed!' : 'The basket is empty'}
                                  description = { order ? `Your order #${orderId} will be delivered to courier delivery soon` : 'Add at least one security guard to place an order'}
                                  image = {order ? '/image/order.svg' : '/image/cartEmpty.svg'}
                            />
                        )}
            </div>
        </div>
    );
}
