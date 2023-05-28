import React, {useEffect, useState} from "react";
import s from "./PopularMovies.scss"
import Layout from "../../components/Layout/Layout";
import {Breadcrumbs, Link, Typography} from "@mui/material";
import {MainService} from "../../app/services/MainService";
import Card from "../../components/card/card";

class PopularMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    MainService
      .getPopularMovies()
      .then(response => {
        this.setState({
          movies: response.data.results
        })
      })
  }

  render() {

    return (
      <Layout>
        <div className={s.root}>
          <Breadcrumbs sx={{paddingTop: "2rem", color: "rgb(223, 223, 223)"}} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography sx={{color: "rgb(223, 223, 223)"}} color="text.primary">Top rated movies</Typography>
          </Breadcrumbs>

          <h2 className={s.heading}>Top rated movies</h2>

          <div className={s.results}>
            {this.state.movies?.map((item, index) => (
              <Card
                isInFavorite={false}
                onFavoritesClick={() => {
                }}
                key={item.id}
                movie={item}
              />
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export default PopularMovies
