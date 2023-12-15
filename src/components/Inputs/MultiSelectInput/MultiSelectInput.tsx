import React from "react";
import Select, { StylesConfig } from "react-select";
import styles from "./MultiSelectInput.module.css";

interface IMultiSelectInputProps {
  label: string;
  options: { value: string; label: string }[];
}

const customStyles: StylesConfig = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: "#323537",
    border: state.isFocused ? "2px solid #7B61FF" : "transparent",
    borderRadius: "10px",
    minHeight: "44px",
    fontFamily: "'Exo 2', sans-serif",
    boxShadow: "none",
    transition: "none",
    ":hover": { borderColor: "#7B61FF" },
  }),
  option: (styles) => ({ ...styles, backgroundColor: "null" }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: "#242426",
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: "white",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    color: "#AFB2B6",
    cursor: "pointer",
    ":hover": { color: "#AFB2B6" },
  }),
};

const MultiSelectInput: React.FC<IMultiSelectInputProps> = ({
  options,
  label,
}) => (
  <div className={styles.wrapper}>
    <label className={styles.label}>{label}</label>
    <Select
      options={options}
      isMulti
      styles={customStyles}
      classNamePrefix="custom-react-select"
    />
  </div>
);

export default MultiSelectInput;
