import {useSelector, useDispatch} from 'react-redux';
import './GifItem.css'


function GifItem({gif}) {
    console.log(gif)

    const currentPage = 'FavoritesView';
    // const currentPage = 'SearchView'

    return (

        <div className="gif-item">
            <img className="gif" src={gif.url} alt=""/>
            <button>Favorite</button>
            {/* TODO: make select a controlled input */}
            <select name="" id="">
                <option value={null} >Select a category</option>
                <option value="1">Funny</option>
                <option value="2">Cohort</option>
                <option value="3">Cartoon</option>
                <option value="4">NSFW</option>
                <option value="5">Meme</option>
            </select>
        </div>

    )

}

export default GifItem;