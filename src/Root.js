import React from "react";
import { Provider } from "react-redux";
import { App } from "./App";

function Root({ store }) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

export default Root;
