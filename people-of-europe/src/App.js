import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <Header title="Je commence à comprendre" />
      <PersonList />
      <Footer year="2020 " authorName="Cédric Priouret" />
    </div>
  );
}

export default App;
