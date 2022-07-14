import {useContext} from "react";
import {AppContext} from "../context";

export function Info({image, title, description}) {
    const {onClickCart} = useContext(AppContext)


    return <>
        <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
            <img src={image} alt='cartEmpty'/>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => onClickCart(false)} className='greenButton'>
                <img  src='/image/strelka.svg' alt="cartEmpty"/>
                You can't go back
            </button>
        </div>
    </>
}
