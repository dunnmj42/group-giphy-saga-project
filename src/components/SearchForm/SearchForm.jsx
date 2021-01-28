import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [newSearch, setNewSearch] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: newSearch });
    setNewSearch("");
  };

  return (
    <form onSubmit={submitSearch}>
      <input
        type="text"
        value={newSearch}
        onChange={(e) => setNewSearch(e.target.value)}
      />
      <button type="submit">SEARCH GIPHY</button>
    </form>
  );
};

export default SearchForm;
