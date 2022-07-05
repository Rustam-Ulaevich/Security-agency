export function Header(props) {
    return (
        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img src='/image/scale_1200.webp' height={'55px'}/>
                <div>
                    <h1 className='text-uppercase'>Guardians of the Galaxy</h1>
                    <p className='opacity-5'>Security agency</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li onClick={props.onClickCart} className='mr-30 cu-p'>
                    <img  src='/image/cart.svg'/>
                    <span>5600 $</span>
                </li>
                <li>
                    <img src='/image/union.svg' height={'20px'}/>
                </li>
            </ul>

        </header>

    )
}
