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
      <Person
        firstName="Renaud"
        lastName="Ripart"
        pic="https://www.sofoot.com/IMG/joueurs/renaud-ripart-150441.jpg"
        city="Nîmes"
        country="France"
      />
    </div>
  );
}

export default App;
