import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="app">
      <h1>Pet Searcher App</h1>
    </div>
  );
};

const render = document.getElementById("root");
ReactDOM.render(<App />, render);
