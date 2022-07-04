export function Card() {
    return (
        <div className='card'>
            <div className='like'>
                <img src='/image/like.svg' alt='liked'/>
            </div>
            <img src='/image/securiti/borodach_page.jpg' width='100' alt=''/>
            <h5>Охраник Александррр Боррродач</h5>
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
    )
}
