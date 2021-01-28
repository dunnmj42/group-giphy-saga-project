import React from 'react';
import GifList from '../GifList/GifList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import SearchView from '../SearchView/SearchView'
import FavoritesView from '../FavoritesView/FavoritesView'
import Header from '../Header/Header'

function App(props) {
  return (
    <Router>
      <Header />
      <Route path='/' exact component={SearchView} />
      <Route path='/home' component={SearchView} />
      <Route path='/search' component={SearchView} />
      <Route path='/favorites' component={FavoritesView} />
    </Router>
  );
}

export default App;
