import styles from './Card.module.scss'
import {useContext, useState} from "react";
import ContentLoader from "react-content-loader"
import {AppContext} from "../../context";

export function Card({
                         id,
                         title,
                         image,
                         price,
                         onClickLike,
                         onClickPlus,
                         liked = false,
                         loading
                     }) {

    const {isItemAdded} = useContext(AppContext)
    let [isLike, setIsLike] = useState(liked)

    const onClickButton = () => {
        onClickPlus({id, title, image, price})
    }

    const onClickLikeButton = () => {
        onClickLike({id, title, image, price})
        setIsLike(!isLike)
    }
debugger
    return (
        <div className={styles.card}>
            {

                 loading ?
                     <ContentLoader
                        speed={2}
                        width={130}
                        height={280}
                        viewBox="0 0 150 270"
                        backgroundColor="#ebeaea"
                        foregroundColor="#e5e0e0"
                    >
                        <rect x="0" y="0" rx="10" ry="10" width="150" height="151"/>
                        <rect x="0" y="166" rx="5" ry="5" width="150" height="15"/>
                        <rect x="0" y="189" rx="5" ry="5" width="81" height="15"/>
                        <rect x="0" y="230" rx="5" ry="5" width="70" height="25"/>
                        <rect x="118" y="230" rx="9" ry="9" width="32" height="32"/>
                    </ContentLoader> :
                    <>
                        <div className={styles.like} onClick={onClickLikeButton}>
                            <img src={isLike ? '/image/like2.svg' : '/image/unlike' +
                                '.svg'} alt='liked'/>
                        </div>
                        <img src={image} width='100' alt=''/>
                        <h5>{title}</h5>
                        <div className='d-flex justify-between align-center'>
                            <div className='d-flex flex-column'>
                                <span>Цена:</span>
                                <b>{price + ' rubles'}</b>
                            </div>
                            <img className={styles.plus}
                                 onClick={onClickButton}
                                 src={isItemAdded(id) ? '/image/cheked.svg' : '/image/plus.svg'}/>
                        </div>
                    </>
                 }
        </div>
    )
}
