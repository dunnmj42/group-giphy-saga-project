import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import App from "./components/App/App.jsx";
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

const resultsList = (state = [], action) => {
  switch (action.type) {
    case "SET_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

const favoritesList = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return action.payload;
    default:
      return state;
  }
};

function* rootSaga() {
  yield takeEvery("SEARCH", setResults);
  yield takeEvery("NEW_FAVORITE", setFavorite);
  yield takeEvery("FETCH_FAVORITES", fetchFavorites);
  yield takeEvery("SET_CAT", setCategory);
}

function* setResults(action) {
  try {
    const q = action.payload;
    const response = yield axios.get(`/api/search/${q}`);
    console.log(response.data);
    const results = response.data.map((gif) => ({
      title: gif.title,
      url: gif.images.fixed_width.url,
    }));
    yield put({ type: "SET_RESULTS", payload: results });
  } catch (error) {
    console.error(error);
  }
}

function* setFavorite(action) {
  try {
    const newFavorite = action.payload;
    yield axios.post("/api/favorite", newFavorite);
    yield put({ type: "FETCH_FAVORITES" });
  } catch (error) {
    console.error(error);
  }
}

function* fetchFavorites() {
  try {
    const response = yield axios.get(`/api/favorite/`);
    console.log(response.data);
    yield put({ type: "SET_FAVORITES", payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* setCategory(action) {
  try {
    let id = action.payload.id;
    yield axios.put(`/api/favorite/${id}`, action.payload);
  } catch (error) {
    console.error(error);
  }
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    resultsList,
    favoritesList,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
