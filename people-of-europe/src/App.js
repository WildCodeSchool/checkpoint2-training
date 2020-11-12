import React from "react";
import axios from "axios";
import Header from './Components/Header';
import PersonsList from './Components/PersonsList';
import Footer from './Components/Footer';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onePerson: [],
    };
  }

  componentDidMount() {
    this.fetchPeople();
  }

  fetchPeople = () => {
    const url = "https://my-json-server.typicode.com/bhubr/people-api/people";
    axios
      .get(url)
      .then((response) => response.data)
      .then((arrayOfPeople) => {
        this.setState({
          onePerson: arrayOfPeople,
        });
      });
  };

  render() {
    const { onePerson } = this.state;
    return (
      <div className="App" >
        <Header title="Meilleurs employés du mois" />
        <PersonsList onePerson={onePerson} />
        <button>Montre-moi les Espagnols</button>
        <Footer year="2020" authorName="Valérie Tylski Vincent" />
      </div >
    );
  }
}

export default App;
