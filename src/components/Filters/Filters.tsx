import React, { useState } from "react";
import styles from "./Filters.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setFilters } from "../../store/films/films.reducer";
import { getSlice } from "../../store/films/films.selectors";
import Typography from "../Typography/Typography";
import Icon from "../Icon/Icon";
import Button from "../Buttons/Button/Button";
import Input from "../Inputs/Input/Input";
import MultiSelectInput from "../Inputs/MultiSelectInput/MultiSelectInput";

const options = [
  { value: "adventure", label: "Adventure" },
  { value: "dramma", label: "Dramma" },
  { value: "documental", label: "Documental" },
  { value: "thriller", label: "Thriller" },
];

const Filters: React.FC = () => {
  const { filters } = useSelector(getSlice);
  const dispatch = useDispatch<AppDispatch>();

  const hadleCloseClick = () => {
    dispatch(setFilters(!filters));
  };

  const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topSide}>
        <Typography variant="h5">Filters</Typography>
        <Icon
          type={"Close"}
          onClick={hadleCloseClick}
          className={styles.closeButton}
        />
      </div>
      <div className={styles.sortContainer}>
        <Typography>Sort by</Typography>
        <div className={styles.sortButtonsConrainer}>
          <Button color="secondary" className={styles.sortButton}>
            Rating
          </Button>
          <Button color="secondary" className={styles.sortButton}>
            Year
          </Button>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <Input
          type="text"
          name="muvieName"
          value={search}
          onChange={handleChange}
          placeholder="Search"
          className={styles.input}
          label="Full or short movie name"
        />

        <MultiSelectInput label={"Genre"} options={options} />
      </div>
    </div>
  );
};

export default Filters;
