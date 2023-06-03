/*import { ethers } from "ethers";*/
import { useEffect, useState} from'react';
import balance from './Omar_Balance.mp3';
import moon from './moon.png';
import './App.css';
import React from 'react';
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

function App() {
  let audio = new Audio("/Omar_Balance.mp3")
  const start = () => {
    audio.play()
  }
  const [provider, setProvider] = useState("");
  const [error, setError] = useState("");
  const [txs, setTxs] = useState([]);
  const [signer, setSigner] = useState("");
  const [ walletAddress, setwalletAddress] = useState("");
  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* MetaMask is not installed */
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        const accounts = new window.ethereum.request(window.ethereum);
        setwalletAddress(accounts[0]);
        setSigner(accounts[0]);
        setProvider(accounts[0]);
        console.log(accounts[0]);
      } catch(err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please Install MetaMask");
    }
  } 
 /* const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
    })
  }*/
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={moon} className="App-logo" alt="moon" />
        <p>
        <button onClick={connectWallet}>Connect Wallet</button>
        </p>
        <p>      
        <button onClick={start}>Play</button>
        </p>        
        <p>
          Art  <code>  Officially </code> Intelligent
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
