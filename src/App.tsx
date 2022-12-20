import React from "react";
import { Provider } from "react-redux";
import { store } from "./domain/store/store";
import HomeScreen from "./presentation/pages/home/HomeScreen";

const App = () => {
  console.log(import.meta.env);
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
