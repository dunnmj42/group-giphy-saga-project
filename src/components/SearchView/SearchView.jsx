import SearchForm from "../SearchForm/SearchForm";
import GifList from "../GifList/GifList";

const SearchView = () => {
  return (
    <div>
      <SearchForm />
      <br/>
      <GifList gifReducer="resultsList" />
    </div>
  );
};

export default SearchView;
