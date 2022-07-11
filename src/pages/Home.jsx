import {Card} from "../components/Card/Card";

export function Home({searchValue, addItemCart, addLikes, clearSearch, items, onChangeSearchInput}) {
    return(
            <div className='content p-40'>
                <div className='d-flex justify-between  mb-40'>
                    <h3>{searchValue ? `Search by: "${searchValue}"` : 'All the guards'}</h3>
                    <div className='search d-flex align-center'>
                        <img src='/image/lupa.png' height={20} alt='search'/>
                        <input value={searchValue} onChange={onChangeSearchInput} placeholder='Search...'/>
                        {searchValue &&
                        <img className='removeBtn' onClick={clearSearch} src='/image/removeClick.svg' alt='Remove'/>}
                    </div>
                </div>

                <div className='d-flex'>
                    {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            price={item.price}
                            image={item.imageUrl}
                            onClickLike={(obj) => addLikes(obj)}
                            onClickPlus={(obj) => addItemCart(obj)}
                        />))}
                </div>
            </div>
        )

}
