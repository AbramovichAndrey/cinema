import React from "react";
import styles from "./MainLayout.module.css";

interface IMainLayoutProps {
  header: React.ReactNode;
  main: React.ReactNode;
  navigation: React.ReactNode;
}

const MainLayout: React.FC<IMainLayoutProps> = ({
  header,
  main,
  navigation,
}) => {
  return (
    <section className={styles.app}>
      <aside className={styles.aside}>{navigation}</aside>
      <header className={styles.header}>{header}</header>
      <main className={styles.main}>{main}</main>
    </section>
  );
};

export default MainLayout;
