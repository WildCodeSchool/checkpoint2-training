import { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    persons: [],
  };

  fetchPersons = () => {
    axios
      .get("https://my-json-server.typicode.com/bhubr/people-api/people")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        this.setState({
          persons: data,
        });
      });
  };

  render() {
    const { persons } = this.state;
    return (
      <div className="App">
        <Header title="React is a nightmare" />
        <PersonList persons={persons} />
        <button type="button" onClick={this.fetchPersons}>
          Fetch persons
        </button>
        <Footer year="2020" authorName="Miguel Santos" />
      </div>
    );
  }
}
export default App;
