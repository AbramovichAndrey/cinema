import React from "react";
import styles from "./Navigation.module.css";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";
import Typography from "../Typography/Typography";

const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: <Icon type={"Home"} fill="#7B61FF" />,
  },
  { name: "Trends", path: "/trends", icon: <Icon type={"Trends"} /> },
  { name: "Favorites", path: "/favorites", icon: <Icon type={"Favorites"} /> },
  { name: "Settings", path: "/settings", icon: <Icon type={"Setting"} /> },
];

const listOfLink = menuItems.map((item) => {
  return (
    <li key={item.name} className={styles.item}>
      <NavLink to={item.path} style={{ textDecoration: "none" }}>
        <div className={styles.itemContainer}>
          <div className={styles.menuItemIcon}>{item.icon}</div>
          <Typography color="secondary" className={styles.menuItemText}>
            {item.name}
          </Typography>
        </div>
      </NavLink>
    </li>
  );
});

const Navigation: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Icon type={"Logo"} />
      <div className={styles.listWrapper}>
        <ul className={styles.list}>{listOfLink}</ul>
        <Typography color="secondary">© All Rights Reserved</Typography>
      </div>
    </div>
  );
};

export default Navigation;
