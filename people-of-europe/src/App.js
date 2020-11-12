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
    this.modifyPeopleDisplayed = this.modifyPeopleDisplayed.bind(this);
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

  modifyPeopleDisplayed(click) {
    const displayNationality = click.target.id;

    const url = "https://my-json-server.typicode.com/bhubr/people-api/people";
    axios
      .get(url)
      .then((response) => response.data)
      .then((arrayOfPeople) => {
        this.setState({
          onePerson: arrayOfPeople.filter(country => country.nat == displayNationality),
        });
      });
  }

  render() {
    const { onePerson } = this.state;
    return (
      <div className="App" >
        <Header title="Meilleurs employés du mois" />
        <button id="German" onClick={this.modifyPeopleDisplayed}>Allemands</button>
        <button id="British" onClick={this.modifyPeopleDisplayed}>Anglais</button>
        <button id="Spanish" onClick={this.modifyPeopleDisplayed}>Espagnols</button>
        <button id="French" onClick={this.modifyPeopleDisplayed}>Français</button>
        <PersonsList onePerson={onePerson} />
        <Footer year="2020" authorName="Valérie Tylski Vincent" />
      </div >
    );
  }
}

export default App;
