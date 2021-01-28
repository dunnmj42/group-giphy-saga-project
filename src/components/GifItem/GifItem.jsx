import {useSelector, useDispatch} from 'react-redux';
import './GifItem.css'


function GifItem({gif}) {
    console.log(gif)

    return (

        <div className="gif-item">
            <img className="gif" src={gif.url} alt=""/>
            <button>Favorite</button>
            <select name="" id="">
                <option value="">Category 1</option>
                <option value="">Category 2</option>
                <option value="">Category 3</option>
            </select>
        </div>

    )

}

export default GifItem;