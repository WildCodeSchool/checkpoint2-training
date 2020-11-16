import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Header title="People of Europe" />
      <Footer year="2020" authorName="Christophe Castan" />
      <Person
        firstName="Cristiano"
        lastName="Ronaldo"
        pic="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"
        city="Funchal"
        country="Portugal"
      />
    </div>
  );
}

export default App;
