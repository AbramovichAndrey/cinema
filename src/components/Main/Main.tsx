import React, { useEffect } from "react";
import { getSlice } from "../../store/films/films.selectors";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { getFilmsThunk } from "../../store/films/films.actions";
import FilmList from "../FilmList/FilmList";
import Typography from "../Typography/Typography";
import styles from "./Main.module.css";

const Main: React.FC = () => {
  const { films, isFilmsLoading: loading } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getFilmsThunk());
  }, [dispatch]);

  return (
    <>
      {loading && <Typography>Loading</Typography>}
      <div className={styles.filmsWrapper}>
        {!loading && <FilmList film={films}></FilmList>}
      </div>
    </>
  );
};

export default Main;
