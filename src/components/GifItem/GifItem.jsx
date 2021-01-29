import { useSelector, useDispatch } from "react-redux";
import "./GifItem.css";

function GifItem({ gif, favorites }) {
  const dispatch = useDispatch();

  const addFavorite = () => {
    dispatch({ type: "NEW_FAVORITE", payload: gif });
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
            <button onClick={addFavorite}>Favorite</button>
        )}
      </div>
    </div>
  );
}

export default GifItem;
