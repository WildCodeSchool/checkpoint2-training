import React from "react";
import Header from "./components/Header";
import Person from "./components/Person";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Je commence à comprendre" />
      <Person
        firstName="Cédric"
        lastName="Priouret"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png"
        city="Bassan"
        country="Hérault"
      />
      <Person
        firstName="Maxime"
        lastName="Meilac"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png"
        city="Servian"
        country="Hérault"
      />
      <Footer year="2020 " authorName="Cédric Priouret" />
    </div>
  );
}

export default App;
