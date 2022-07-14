import {Card} from "../components/Card/Card";
import {useContext} from "react";
import {AppContext} from "../context";

export function Likes() {
    const {isLike, addLikes} = useContext(AppContext)

    return(
            <div className='content p-40'>
                <div className='d-flex justify-between  mb-40'>
                    <h3>My favorite:</h3>
                </div>

                <div className='d-flex'>
                    {isLike.map((item, index) => (
                            <Card
                                key={index}
                                liked={false}
                                addLikes={addLikes}
                                {...item}
                            />))}
                </div>
            </div>
        )

}
