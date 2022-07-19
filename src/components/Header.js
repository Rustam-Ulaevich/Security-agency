import {Link} from "react-router-dom";
import {useCart} from "../hooks/useCart";

export function Header(props) {
    const { totalPrice } = useCart()

    return (
        <header className='d-flex justify-between align-center p-40'>
            <Link to='/'>
                <div className='d-flex align-center'>
                    <img src='/image/scale_1200.webp' height={'55px'}/>
                    <div>
                        <h1 className='text-uppercase'>Guardians of the Galaxy</h1>
                        <p className='opacity-5'>Security agency</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li onClick={props.onClickCart} className='mr-30 cu-p'>
                    <img src='/image/cart.svg'/>
                    <span>{totalPrice} рублей</span>
                </li>
                <li className='mr-20 cu-p'>
                    <Link to='/likes'>
                        <img src='/image/favorite.svg' alt="likes"/>
                    </Link>
                </li>
                <li>
                    <Link to='/Orders'>
                        <img src='/image/union.svg' height={'20px'} alt="orders"/>
                    </Link>
                </li>
            </ul>

        </header>

    )
}
