import styles from './Card.module.scss'
import {useState} from "react";


export function Card({title, image, price, onClickLike, onClickPlus}) {

    let [isAdded, setIsAdded] = useState(true)

    const onClickButton = () => {
        onClickPlus({title, image, price})
        setIsAdded(!isAdded)}


    return (
        <div className={styles.card}>
            <div className={styles.like}>
                <img src='/image/like.svg' onClick={onClickLike} alt='liked'/>
            </div>
            <img src={image} width='100' alt=''/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{price}</b>
                </div>

                    <img className={styles.plus}
                         onClick={onClickButton}
                         src={isAdded ? '/image/plus.svg' : '/image/cheked.svg'}/>

            </div>
        </div>
    )
}
