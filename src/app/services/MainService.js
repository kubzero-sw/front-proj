import {API_BASE_URL, API_KEY, API_LANGUAGE} from "../utils/constants";
import axios from "axios";

const getFeaturedMovies = () => {
  return axios.get(`${API_BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=${API_LANGUAGE}`)
}

const getPopularMovies = () => {
  return axios.get(`${API_BASE_URL}/3/movie/top_rated?api_key=${API_KEY}&language=${API_LANGUAGE}`)
}

const getLastReleasedMovies = () => {
  return axios.get(`${API_BASE_URL}/3/movie/upcoming?api_key=${API_KEY}&language=${API_LANGUAGE}`)
}

const getMovieInfo = (movieId) => {
  return axios.get(`${API_BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=${API_LANGUAGE}`)
}

const search = (slug) => {
  return axios.get(`${API_BASE_URL}/3/search/movie?api_key=${API_KEY}&language=${API_LANGUAGE}&query=${slug}`)
}

export const MainService = {
  getFeaturedMovies,
  getPopularMovies,
  getLastReleasedMovies,
  getMovieInfo,
  search
}
