import React from "react"
import s from "./Header.module.scss"
import {Link, useNavigate} from "react-router-dom"
import clsx from "clsx";
import SearchIcon from "../../app/icons/SearchIcon";

const Header = ({fluid}) => {
  const navigate = useNavigate()

  const performSearch = (event) => {
    event.preventDefault()
    navigate(`/search?slug=${event.target.slug.value}`)
  }

  return (
    <div className={clsx(s.header, {[s.fluid]: fluid})}>
      <div className={s.left}>
        <Link to="/top_rated">
          Top rated
        </Link>
        <Link to="/last-released">
          New movies
        </Link>
      </div>

      <div className={s.search}>
        <div className={s.inputContainer}>
          <form method="get" onSubmit={performSearch}>
            <input
              name="slug"
              className={s.searchInput}
              type="text"
              placeholder="Search by movie name..."
            />
            <SearchIcon/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Header
