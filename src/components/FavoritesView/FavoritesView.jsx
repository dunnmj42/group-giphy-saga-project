import GifList from '../GifList/GifList';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const FavoritesView = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'FETCH_FAVORITES'})
    }, [])

    return (
        <div>
            <h1>FAVORITES VIEW</h1>
            <GifList gifReducer="favoritesList" />
        </div>

    )
}

export default FavoritesView