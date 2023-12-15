import React from "react";
import styles from "./Card.module.css";
import clsx from "clsx";
import { IFilmProps } from "../../api/films/getFilms";
import Typography from "../Typography/Typography";

interface ICardProps {
  film: IFilmProps;
}

const Card: React.FC<ICardProps> = ({ film }) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={film.Poster} alt="" />
      <Typography className={styles.text}>{film.Title}</Typography>
      <Typography className={styles.text}>{film.Type}</Typography>
    </div>
  );
};

export default Card;
