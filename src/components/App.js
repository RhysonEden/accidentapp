import React from "react";
import Accident from "./accident files/accident";
import Header from "./header files/header";
import "./app.css";
import Directions from "./direction files/directions";

const App = () => {
  return (
    <>
      <div class="header">
        <Header />
      </div>
      <div className="App">
        <Accident />
      </div>
      <div class="directions">
        <Directions />
      </div>
    </>
  );
};

export default App;
