import React from "react";
import { Provider } from "react-redux";
import { store } from "./domain/store/store";
import HomeScreen from "./presentation/pages/home/HomeScreen";

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
