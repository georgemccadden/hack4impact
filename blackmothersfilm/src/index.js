import React from "react";
import ReactDOM from "react-dom";

// Timeline Components
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
