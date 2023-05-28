import React, {useEffect, useState} from "react"
import "./movieList.scss"
import Cards from "../card/card"
import {MainService} from "../../app/services/MainService";
import {Toast} from "../../app/utils/toast";

const MovieList = () => {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    MainService
      .getFeaturedMovies()
      .then(response => {
        setMovieList(response.data.results)
      })
      .catch(err => {
        Toast.displayErrorMessage("Error during fetching movies!")
      })
  }

  return (
    <div className="movie__list">
      <h2 className="list__title">Popular movies</h2>
      <div className="list__cards">
        {
          movieList.map(movie => (
            <Cards
              isInFavorite={movie.id}
              onFavoritesClick={() => {}}
              key={movie.id}
              movie={movie}
            />
          ))
        }
      </div>
    </div>
  )
}

export default MovieList
