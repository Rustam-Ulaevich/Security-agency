import styles from './Card.module.scss'

console.log(styles)

export function Card(props) {

    const onClickButton = () => {

    }
    // console.log(props)
    return (
        <div className={styles.card}>
            <div className={styles.like}>
                <img src='/image/like.svg' alt='liked'/>
            </div>
            <img src={props.image} width='100' alt=''/>
            <h5>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{props.price}</b>
                </div>
                <button className='button' onClick={onClickButton}>
                    <img width={'11px'} height={'11px'} src='/image/plus.png'/>
                </button>
            </div>
        </div>
    )
}
