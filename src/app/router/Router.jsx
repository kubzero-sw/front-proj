import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "../../pages/home/Home";
import Movie from "../../pages/movieDetail/Movie";
import LastReleasedMovies from "../../pages/lastReleased/LastReleasedMovies";
import PopularMovies from "../../pages/popularMovies/PopularMovies";
import {Search} from "../../pages/search/Search";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="movie/:id" element={<Movie/>}></Route>
        <Route path="last-released" element={<LastReleasedMovies/>}></Route>
        <Route path="top_rated" element={<PopularMovies/>}></Route>
        <Route path="search" element={<Search/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router