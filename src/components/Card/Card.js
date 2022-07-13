import styles from './Card.module.scss'
import {useState} from "react";

export function Card({id, title, image, price, onClickLike, onClickPlus, liked}) {

    let [isAdded, setIsAdded] = useState(true)
    let [isLike, setIsLike] = useState(liked)

    const onClickButton = () => {
        onClickPlus({title, image, price})
        setIsAdded(!isAdded)
    }

    const onClickLikeButton = () => {
        onClickLike({id, title, image, price})
        setIsLike(!isLike)
    }

    return (
        <div className={styles.card}>
            <div className={styles.like} onClick={onClickLikeButton}>
                <img src={ isLike ? '/image/unlike.svg' : '/image/like2.svg' } alt='liked'/>
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
