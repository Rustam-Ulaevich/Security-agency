import {Card} from "../components/Card/Card";


export function Home({
                         items,
                         itemCart,
                         searchValue,
                         setSearchValue,
                         onChangeSearchInput,
                         addItemCart,
                         addLikes,
                         clearSearch,
                         isLoading
})
{

    const renderItems = () => {
        const filteredItems = items.filter( item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );

        return ( isLoading ? [...Array(10)] : filteredItems).map((item, index) => (
            <Card
                key={index}
                onClickLike={(obj) => addLikes(obj)}
                onClickPlus={(obj) => addItemCart(obj)}
                added={isItemAdded(item && item.id)}
                isLoading={isLoading}
                {...item}
            />
        ));
    };

        return (
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
                    {renderItems()}
                </div>
            </div>
        )
}
