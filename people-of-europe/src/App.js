import "./App.css";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="React is a nightmare" />
      <PersonList />
      <Footer year="2020" authorName="Miguel Santos" />
    </div>
  );
}

export default App;
