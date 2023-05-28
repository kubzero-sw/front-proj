import React, {useEffect, useState} from "react"
import s from "./Movie.module.scss"
import {useParams} from "react-router-dom"
import Layout from "../../components/Layout/Layout";
import {MainService} from "../../app/services/MainService";
import {Toast} from "../../app/utils/toast";
import HeartIcon from "../../app/icons/HeartIcon";
import clsx from "clsx";

const Movie = () => {
  const {id} = useParams()
  const [currentMovieDetail, setMovie] = useState()

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    getData()
    // window.scrollTo(0, 0)
  }, [id])

  const getData = () => {
    MainService.getMovieInfo(id)
      .then(response => {
        setMovie(response.data)
      })
      .catch(err => {
        Toast.displayErrorMessage("Error during fetching information about movie!")
      })
  }

  if (!currentMovieDetail) return <Layout disableContainerStyles></Layout>
  return (
    <Layout disableContainerStyles>
      <div className={s.movie}>
        <div className={s.movie__intro}>
          <img className={s.movie__backdrop}
               src={"https://image.tmdb.org/t/p/original" + currentMovieDetail.backdrop_path}
               onError={(e) => {
                 e.target.onerror = null;
                 e.target.src = "/var1.svg"
               }}
          />
        </div>
        <div className={s.movie__detail}>
          <div className={s.movie__detailLeft}>
            <div>
              <img className={s.movie__poster}
                   src={"https://image.tmdb.org/t/p/original" + currentMovieDetail.poster_path}
                   onError={(e) => {
                     e.target.onerror = null;
                     e.target.src = "/var1.svg"
                   }}
              />
            </div>
          </div>
          <div className={s.movie__detailRight}>
            <div className={s.movie__detailRightTop}>
              <div className={s.movie__name}>{currentMovieDetail?.title}</div>
              {/*<div className="movie__tagline">{currentMovieDetail}</div>*/}
              <div>
                {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i className="fas fa-star"/>
                {/*<span*/}
                {/*  className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</span>*/}
              </div>
              {/*<div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>*/}
              <div>{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
              <div className={s.movie__genres}>
                {
                  currentMovieDetail && currentMovieDetail.genres
                    ?
                    currentMovieDetail.genres.map(genre => (
                      <><span className={s.movie__genre} id={genre.id}>{genre.name}</span></>
                    ))
                    :
                    ""
                }
              </div>
            </div>
            <div className={s.movie__detailRightBottom}>
              <div className={s.synopsisText}>Description</div>
              <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
            </div>

            <div className={s.details}>
              <h4>Detailed information</h4>

              <div className={s.item}>
                Country: <span>USA</span>
              </div>
              <div className={s.item}>
                Genre: <span>drama, fantasy, criminal</span>
              </div>
              <div className={s.item}>
                Director: <span>Tarantino</span>
              </div>
              <div className={s.item}>
                Age: <span>16+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {currentMovieDetail?.preview_url && (
        <div className={clsx("container", s.preview)}>
          <h4>Trailer</h4>
          <iframe
            id="ytplayer" type="text/html" width="100%" height="460"
            src={currentMovieDetail.preview_url}
            frameBorder="0"/>
        </div>
      )}

    </Layout>
  )
}

export default Movie
