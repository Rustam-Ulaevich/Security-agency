import {Card} from "../components/Card/Card";

export function Likes({items, addLikes}) {
    return(
            <div className='content p-40'>
                <div className='d-flex justify-between  mb-40'>
                    <h3>My favorite:</h3>
                </div>

                <div className='d-flex'>
                    {items.map((item, index) => (
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
