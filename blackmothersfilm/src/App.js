import React from "react";

// Timeline Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}
