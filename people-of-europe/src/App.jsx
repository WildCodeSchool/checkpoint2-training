import React from "react";
import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";

const App = () => {
  return (
    <div className="App">
      <Header title="This is a props title" />
      <Person
        firstName="Foo"
        lastName="Bar"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png"
        city="Paris"
        country="France"
      />
      <Person
        firstName="Big"
        lastName="Foot"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png"
        city="XianYui"
        country="Tibet"
      />
      <Footer year="2020" authorName="Vivien Michelesi" />
      <PersonList />
    </div>
  );
};

export default App;
