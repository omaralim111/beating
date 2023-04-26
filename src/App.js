import react,{Component} from "react";
import logo from './logo.svg';
import balance from './Omar_Balance.mp3';
import moon from './moon.png';
import './App.css';

function App() {
  let audio = new Audio("/Omar_Balance.mp3")
  
  const start = () => {
    audio.play()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={moon} className="App-logo" alt="moon" />
        <p>      
        <button onClick={start}>Play</button>
        </p>        
        <p>
         Art Officially <code> Intelligent</code> Music
        </p>
        <a
          className="App-link"
          href="https://omaralim.eth.limo"
          target="_blank"
          rel="nooener noreferrer"

        >
          Let It Play 
        </a>
      </header>
    </div>
  );
}

export default App;
