import {Card} from "../components/Card/Card";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AppContext} from "../context";


export function Orders() {
    const { addLikes, addItemCart } = useContext(AppContext)
    const [ orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        (async () => {
            try {
                const {data} = await axios.get('https://62c3ffff7d83a75e39ecd122.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [... prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert('Error when requesting orders')
                console.log(error)
            }
        })();
    }, [])

    return(

        <div className='content p-40'>
            <div className='d-flex justify-between  mb-40'>
                <h3>My orders:</h3>
            </div>

            <div className='d-flex flex-wrap'>
                {( isLoading ? [...Array(4)] : orders).map((item, index) => (
                    <Card
                        key={index}
                        isLoading={isLoading}
                        {...item}
                    />))}
            </div>
        </div>
    )

}
