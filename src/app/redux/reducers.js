const defaultState = {
  featuredMovies: []
}

export const featuredMoviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {...state, featuredMovies: action.payload}
    case "GET":
      return {...state}
    default:
      return defaultState
  }
}

export const lastReleasedMoviesReducer = (state = {
  lastReleased: []
}, action) => {
  switch (action.type) {
    case "ADD_LAST_RELEASED":
      return {...state, lastReleased: action.payload}
    case "GET_LAST_RELEASED":
      return {...state}
    default:
      return defaultState
  }
}