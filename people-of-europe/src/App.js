import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonList from "./components/PersonList";
// import Filters from "./components/FIlters";

function App() {
  const [people, setPeople] = useState([]);
  const options = {
    method: 'GET',
    url: 'https://my-json-server.typicode.com/bhubr/people-api/people',
    headers: {
      cookie: '__cfduid=d832928800b1573d2ce2bb7728e25166a1605172591',
      'Content-Type': 'application/json'
    }
  };

  useEffect(() => {
    axios.request(options)
    .then((response) => response.data)
    .then(data => {
      setPeople(data)})
    .catch(function (error) {
      console.error(error);
    });
  }) ;

  return (
    <div className="App">
      {/* <Filters /> */}
      <Header title="Les Wilders d'Europe"/>
      <PersonList people={people}/>
      <Footer year="2020" authorName="Floran Eiclies"/>
    </div>
  );
}

export default App;
