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
      searchThisPerson: ""
    };
    this.modifyPeopleDisplayed = this.modifyPeopleDisplayed.bind(this);
    this.searchPerson = this.searchPerson.bind(this);
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
    const url = "https://my-json-server.typicode.com/bhubr/people-api/people"
    axios
      .get(url)
      .then((response) => response.data)
      .then((arrayOfPeople) => {
        this.setState({
          onePerson: arrayOfPeople.filter(country => country.nat == displayNationality),
        });
      });
  }

  searchPerson(event) {
    this.setState({
      searchThisPerson: event.target.value,
    });
    if (event.target.id == "searchingFirstName") {
      const url = "https://my-json-server.typicode.com/bhubr/people-api/people"
      axios
        .get(url)
        .then((response) => response.data)
        .then((arrayOfPeople) => {
          this.setState({
            onePerson: arrayOfPeople.filter(person => person.firstName.toLowerCase().includes(this.state.searchThisPerson.toLowerCase())),
          });
        });
    } else if (event.target.id == "searchingLastName") {
      const url = "https://my-json-server.typicode.com/bhubr/people-api/people"
      axios
        .get(url)
        .then((response) => response.data)
        .then((arrayOfPeople) => {
          this.setState({
            onePerson: arrayOfPeople.filter(person => person.lastName.toLowerCase().includes(this.state.searchThisPerson.toLowerCase())),
          });
        });
    }
  }

  render() {
    const { onePerson, searchThisFirstName, searchThisLastName } = this.state;
    return (
      <div className="App" >
        <Header title="Meilleurs employés du mois" />
        <button id="German" onClick={this.modifyPeopleDisplayed}>Allemands</button>
        <button id="British" onClick={this.modifyPeopleDisplayed}>Anglais</button>
        <button id="Spanish" onClick={this.modifyPeopleDisplayed}>Espagnols</button>
        <button id="French" onClick={this.modifyPeopleDisplayed}>Français</button>
        <form><p>Quelle personne recherchez-vous ?</p><label htmlFor="searchingFirstName">Prénom :<input id="searchingFirstName" placeholder="John" value={searchThisFirstName} onChange={this.searchPerson} /></label>
          <label htmlFor="searchingLastName">Nom :<input id="searchingLastName" placeholder="Doe" value={searchThisLastName} onChange={this.searchPerson} /></label></form>
        <PersonsList onePerson={onePerson} />
        <button id="German" onClick={this.fetchPeople}>Voir tout le monde</button>
        <Footer year="2020" authorName="Valérie Tylski Vincent" />
      </div >
    );
  }
}

export default App;
