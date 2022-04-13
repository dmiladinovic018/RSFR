import EasterEggs from "./components/EasterEggs";
import logo from './logo.svg';
import './sass/App.scss';

const App = () => {

    const url =
        'http://bcwp.hltv.test/wp-json/wp/v2/pages/1422';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('body').innerHTML = data.content.rendered;
        });

    EasterEggs();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
