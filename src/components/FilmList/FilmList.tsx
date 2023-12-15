import React from "react";
import styles from "./FilmList.module.css";
import { IFilmProps } from "../../api/films/getFilms";
import Card from "../Card/Card";
import { NavLink } from "react-router-dom";

interface IFilmListProps {
  film: IFilmProps[];
}

const FilmList: React.FC<IFilmListProps> = ({ film }) => {
  return (
    <>
      <ul className={styles.fimlsList}>
        {film.map((item) => (
          <li className={styles.film} key={item.imdbID}>
            <NavLink
              className={styles.filmWrapper}
              style={{ textDecoration: "none", color: "black" }}
              to={`film/${item.imdbID}`}
            >
              <Card film={item}></Card>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FilmList;
