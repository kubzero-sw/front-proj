import React, {useEffect, useState} from "react"
import "./home.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {Link} from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";
import Layout from "../../components/Layout/Layout";
import {MainService} from "../../app/services/MainService";
import {Toast} from "../../app/utils/toast";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import useMediaQuery from "../../app/hooks/useMediaQuery";
import {connect} from "react-redux";

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true)
  const isBiggerThanTablet = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    MainService
      .getFeaturedMovies()
      .then(response => {
        props.dispatch({type: "ADD", payload: response.data.results})
      })
      .catch(err => {
        Toast.displayErrorMessage("Error during fetching movies!")
      })
    setIsLoading(false)
  }, [])

  return (
    <Layout disableHeader={!isBiggerThanTablet} disableContainerStyles headerFluid>
      <div className="poster" style={{marginTop: "-5px"}}>
        {isLoading ? <div style={{height: 600}}>
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={600} duration={2}/>
          </SkeletonTheme>
        </div> : (
          <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
          >
            {
              props.homePage.featuredMovies.map(movie => (
                <Link key={movie.id} style={{textDecoration: "none", color: "white"}} to={`/movie/${movie.id}`}>
                  <div className="posterImage">
                    <img
                      src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/var1.svg"
                      }}
                    />
                  </div>
                  <div className="posterImage__overlay">
                    <div className="posterImage__title">{movie.original_title}</div>
                    <div className="posterImage__runtime">
                      {new Date(movie.release_date).toLocaleDateString()}
                      <span className="posterImage__rating">
                                            {movie.vote_average }
                        <i className="fas fa-star"/>{" "}
                                        </span>
                    </div>
                    <div className="posterImage__description">{movie.overview}</div>
                  </div>
                </Link>
              ))
            }
          </Carousel>
        )}
        <MovieList/>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Home)
