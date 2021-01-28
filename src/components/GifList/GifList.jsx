import {useSelector, useDispatch} from 'react-redux';
import GifItem from '../GifItem/GifItem.jsx';
import './GifList.css'

const dummyGifs = [{title: "boo", url:"https://media0.giphy.com/media/JO4Z10C3YDwjaj5xP3/giphy.gif"},
    {title: "features", url: "https://media0.giphy.com/media/U4YVpervbNOSRA7ysy/giphy.gif"},
    {title: "cheese", url: "https://media0.giphy.com/media/3ov9k4RPBJPEGCHwtO/giphy.gif"}
]

function GifList() {


    return (
        <div>
            {dummyGifs.map((gif) => {
                return (<GifItem />)
            })}
        </ div>
    )
}

export default GifList;