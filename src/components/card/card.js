import React, {useEffect, useState} from "react"
import Skeleton, {SkeletonTheme} from "react-loading-skeleton"
import "./card.scss"
import {Link} from "react-router-dom"
import HeartIcon from "../../app/icons/HeartIcon";
import clsx from "clsx";

const Cards = ({movie, isInFavorite, onFavoritesClick}) => {

    return <>
        <Link to={`/movie/${movie.id}`} style={{textDecoration: "none", color: "white"}}>
            <div className="cards">
                <div className={clsx("cards__img", {["fav"]: isInFavorite})}>
                    <img
                        src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/var1.svg"
                        }}
                    />
                </div>
                <div className="cards__overlay">
                    <div className="card__title">{movie.original_title}</div>
                    <div className="card__runtime">
                        {new Date(movie.release_date).toLocaleDateString()}
                        <span className="card__rating">{movie.vote_average}<i className="fas fa-star"/></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                </div>
            </div>
        </Link>
    </>
}

export default Cards
