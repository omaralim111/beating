import logo from './logo.svg';
import moon from './moon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={moon} className="moon" alt="moon" />
        <p>
         Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://omaralim.eth.limo"
          target="_blank"
          rel="nooener noreferrer"

        >
          Omar Alim
        </a>
      </header>
    </div>
  );
}

export default App;
