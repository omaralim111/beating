/*import { ethers } from "ethers";*/
import { useEffect, useState} from'react';
import balance from './Omar_Balance.mp3';
import moon from './moon.png';
import './App.css';
import React from 'react';
/*import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";*/

/*const sendTransaction = async ({ setError, setTxs, ether, addr }) => {
  try {
    from: accounts[0], // The user's active address.
    to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970', // Required except during contract publications.
    value: '0x29a2241af62c0000', // Only required to send ether to the recipient from the initiating external account.
    gasPrice: '0x09184e72a000', // Customizable by the user during MetaMask confirmation.
    gas: '0x2710', 
    console.log({ ether, addr });
  } catch (err){
    setError(err.message);
  }
};*/

function App() {
  let audio = new Audio("/Omar_Balance.mp3")
  const start = () => {
    audio.play()
  }
  /*const [error, setError] = useState("");
  const [txs, setTxs] = useState([]);*/
  const [signer, setSigner] = useState("");
  const [ walletAddress, setwalletAddress] = useState("");
  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* MetaMask is not installed */
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        setwalletAddress(accounts[0]);
        setSigner(accounts[0]);
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
