import React, {useEffect, useState} from "react";
import s from "./LastReleasedMovies.scss"
import Layout from "../../components/Layout/Layout";
import {Breadcrumbs, Link, Typography} from "@mui/material";
import {MainService} from "../../app/services/MainService";
import Card from "../../components/card/card";
import {connect} from "react-redux";

const LastReleasedMovies = (props) => {

  useEffect(() => {
    MainService
      .getLastReleasedMovies()
      .then(response => {
        props.dispatch({type: "ADD_LAST_RELEASED", payload: response.data.results})
      })
  }, [])

  return (
    <Layout>
      <div className={s.root}>
        <Breadcrumbs sx={{paddingTop: "2rem", color: "rgb(223, 223, 223)"}} aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography sx={{color: "rgb(223, 223, 223)"}} color="text.primary">Recent popular movies</Typography>
        </Breadcrumbs>

        <h2 className={s.heading}>Recent new movies</h2>

        <div className={s.results}>
          {props.lastReleasedPage.lastReleased?.map((item, index) => (
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

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(LastReleasedMovies)
