import React from "react";
import Header from './Components/Header';
import PersonsList from './Components/PersonsList';
import Footer from './Components/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="Meilleurs employés du mois" />
      <PersonsList />
      <button type="submit">Affiche des employés modèles</button>
      <Footer year="2020" authorName="Valérie Tylski Vincent" />
    </div >
  );
}

export default App;
