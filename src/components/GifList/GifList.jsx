import {useSelector, useDispatch} from 'react-redux';
import GifItem from '../GifItem/GifItem.jsx';
import './GifList.css'

const dummyGifs = [
    {
        id: 1,
        url:"https://media0.giphy.com/media/JO4Z10C3YDwjaj5xP3/giphy.gif",
        title: "boo",
        cat_id: 1
    },
    {
        id: 2,
        url: "https://media0.giphy.com/media/U4YVpervbNOSRA7ysy/giphy.gif",
        title: "features",
        cat_id: 4
    },
    {
        id: 3,
        url: "https://media0.giphy.com/media/3ov9k4RPBJPEGCHwtO/giphy.gif",
        title: "cheese",
        cat_id: 2
    }
]

function GifList({gifReducer}) {
    let gifArray

    if (gifReducer === 'resultsList') {
        gifArray = useSelector(store => store.resultsList)
    } else if (gifReducer === 'favoritesList') {
        gifArray = useSelector(store => store.favoritesList)
    }

    return (
        <div className="container">
            {gifArray.map((gif) => {
                return (<GifItem
                            key={gif.id}
                            gif={gif}
                        />)
            })}
        </ div>
    )
}

export default GifList;