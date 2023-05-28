import {combineReducers, createStore} from "redux";
import {featuredMoviesReducer, lastReleasedMoviesReducer} from "./reducers";

const reducers = combineReducers({
  homePage: featuredMoviesReducer,
  lastReleasedPage: lastReleasedMoviesReducer
})

function configureStore() {
  return createStore(reducers);
}

export default configureStore;