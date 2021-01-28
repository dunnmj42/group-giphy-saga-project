import {useSelector, useDispatch} from 'react-redux';
import GifItem from '../GifItem/GifItem.jsx';
import './GifList.css'


function GifList({gifReducer}) {
    let gifArray;

    let favorites;

    if (gifReducer === 'resultsList') {
        gifArray = useSelector(store => store.resultsList);
        favorites = false;
    } else if (gifReducer === 'favoritesList') {
        gifArray = useSelector(store => store.favoritesList);
        favorites = true;
    };

    return (
        <div className="container">
            {gifArray.map((gif) => {
                return (<GifItem
                            key={gif.id}
                            gif={gif}
                            favorites={favorites}
                        />)
            })}
        </ div>
    )
};

export default GifList;