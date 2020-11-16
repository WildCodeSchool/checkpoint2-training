import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";

function App() {
  return (
    <div className="App">
      <Header title="People of Europe" />
      <Footer year="2020" authorName="Christophe Castan" />
      <PersonList />
    </div>
  );
}

export default App;
