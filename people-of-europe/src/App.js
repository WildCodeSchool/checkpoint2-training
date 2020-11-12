import Header from './components/Header';
import Footer from './components/Footer';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Header title="People of Europe" />
      <Person
        firstName="John"
        lastName="Wayne"
        pic="https://upload.wikimedia.org/wikipedia/commons/7/7b/John_Wayne_-_still_portrait.jpg"
        city="Winterset"
        country="United States"
      />
      <Person
        firstName="Mary"
        lastName="Wayne"
        pic="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/200px-Missing_avatar.svg.png"
        city="Helsinki"
        country="Finland"
      />
      <Footer year="2020" authorName="Benoît Hubert" />
    </div>
  );
}

export default App;
