import "./App.css";
import Router from "./router/Router";
import { Provider } from "react-redux";
import "modern-css-reset";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router />;
    </Provider>
  );
};

export default App;
