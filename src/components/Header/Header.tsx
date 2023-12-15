import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Input from "../Inputs/Input/Input";
import Icon from "../Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { setFilters } from "../../store/films/films.reducer";
import { getSlice } from "../../store/films/films.selectors";
import Filters from "../Filters/Filters";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const { filters } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  const hadleFilterClick = () => {
    dispatch(setFilters(!filters));
  };

  useEffect(() => {
    if (filters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Очистка эффекта
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filters]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <Input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Search"
          className={styles.input}
        />

        <Icon
          type="Filter"
          className={styles.filterIcon}
          onClick={hadleFilterClick}
        />
      </div>
      {/* <div
        className={`${styles.filtersWrapper} ${
          filters ? styles.filtersVisible : ""
        }`}
      > */}
      {filters && <Filters />}
      {/* </div> */}
    </div>
  );
};

export default Header;
