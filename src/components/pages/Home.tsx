import MainLayout from "../../layouts/MainLayout";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Navigation from "../Navigation/Navigation";

const HomePage = () => {
  return (
    <MainLayout
      header={<Header />}
      main={<Main />}
      navigation={<Navigation />}
    />
  );
};

export default HomePage;
