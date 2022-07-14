import {useContext} from "react";
import {AppContext} from "../context";

export function Info({image, title, description}) {
    const {} = useContext(AppContext)
    return <>
        <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
            <img src={image} alt='cartEmpty'/>
            <h2>The cart is empty</h2>
            <p>Add at least one security guard to place an order</p>
            <button onClick={onClickCart} className='greenButton'>
                <img  src='/image/strelka.svg' alt="cartEmpty"/>
                You can't go back
            </button>
        </div>
    </>
}
