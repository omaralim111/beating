import react,{Component} from "react";
import logo from './logo.svg';
import moon from './moon.png';
import './App.css';
import Omar_Beating.mp3

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={moon} className="App-logo" alt="moon" />
        <p>
          <h2> play </h2>
        </p>
        <p>
         Ramadan <code>Mubarak</code> from
        </p>
        <a
          className="App-link"
          href="https://omaralim.eth.limo"
          target="_blank"
          rel="nooener noreferrer"

        >
          The Alim Family 
        </a>
      </header>
    </div>
  );
}

export default App;
