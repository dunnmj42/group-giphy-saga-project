import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import "./GifItem.css";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIconOutline from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

function GifItem({ gif, favorites }) {

    let [favorited, setFavorited] = useState(false)

  const dispatch = useDispatch();

  const addFavorite = () => {
    dispatch({ type: "NEW_FAVORITE", payload: gif });
    setFavorited(true);
  };

  const selectCat = (event) => {
    console.log(event.target.value);
    dispatch({
      type: "SET_CAT",
      payload: { ...gif, cat_id: event.target.value },
    });
  };

  const removeFavorite = () => {

    dispatch({
        type: 'REMOVE_FAVORITE',
        payload: gif
    })
  }

  return (
    <div className="gif-item">
      <img className="gif" src={gif.url} alt={gif.title} />
      <div>
        {favorites ? (
            <>
            <select name="" id="" onChange={selectCat}>
            <option value={null}>Select a category</option>
            <option value="1">Funny</option>
            <option value="2">Cohort</option>
            <option value="3">Cartoon</option>
            <option value="4">NSFW</option>
            <option value="5">Meme</option>
            </select>
            <button onClick={removeFavorite}>Remove Favorite</button>
            </>
        ) : (
            favorited ?
            (<IconButton color="secondary" onClick={addFavorite}>
                <FavoriteIcon />
            </IconButton>)
            :
            (<IconButton onClick={addFavorite}>
                <FavoriteIconOutline />
            </IconButton>)
        )}
      </div>
    </div>
  );
}

export default GifItem;
