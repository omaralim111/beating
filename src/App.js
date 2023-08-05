/*import { ethers } from "ethers";*/
/*import detectEthereumProvider from '@metamask/detect-provider';*/
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
  const [txs, setTxs] = useState(initialState);
  const [signer, setSigner] = useState(initialState);
  const initialState = { accounts: [0]};
  const [walletAddress, setwalletAddress] = useState(initialState);
  const tx = {
    from: '(accounts[0])',
    to: '0x058508d2ACFe10652072948A60B72860B7286bd1acEC9d',
    value: '50000000000000',
    gasPrice: '2500000',
    gas: '21000',
 /* useEffect() => {
    const getProvider = async () => {
      const provider = await detectEthereumProvider({ silent :true })
    }
    }
  }*/
  }
  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* MetaMask is not installed */
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        const transaction = new window.ethereum.request({method: 'eth_sendTransaction',params:[tx]});
        const transaction = new signer.sendTransaction(tx);
        setwalletAddress(accounts[0]);
        setSigner(accounts[0]);
        setProvider(accounts[0]);
        setTxs(tx);
        console.log("accounts[0]", await signer.getAddress());
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
         Art  <code> Officially</code> Intelligent
        </p>
        <a
          className="App-link"
          href="https://youtube.com/channel/UCiE4BAGwLvzzYzUHjQTHXxw"
          target="_blank"
          rel="nooener noreferrer"

        >
          Beating on the door
        </a>
      </header>
    </div>
  );
}
  
export default App;
