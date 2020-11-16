import React from "react";
import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Person />
      <Footer />
    </div>
  );
};

export default App;
