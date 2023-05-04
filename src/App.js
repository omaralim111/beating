import ethers, from 'ethers';
import react, {useState} from 'react';
import react,{Component} from 'react';
import logo from './logo.svg';
import balance from './Omar_Balance.mp3';
import moon from './moon.png';
import './App.css';

function App() {
  let audio = new Audio("/Omar_Balance.mp3")
  const start = () => {
    audio.play()
  }
  const sendTransaction = async () => {
    let params = [{
      from: (accounts[0]),
      to: '🦦stan.eth',
      value: '500000000000000',
      gasPrice: '2500000',
      gas: '21000',
      }]
    const [ethereum, setEthereum] = useState;
    const [signer, setSigner] = useState;
    const [accounts[0], setAccounts] = useState;
    const accounts = await window.ethereum.send ({ method : "eth_sendTransaction",params}).catch((err)=>{
        console.log(err)
      }
    } 
  }
  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        /* MetaMask is installed */
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        let accounts = await window.ethereum.send({ method: "eth_sendTransaction, params"});
        const provider = new ethers.providers(window.ethereum);
        const signer = providers.getsigner();
          ethers.utitls.getAddress(addr);
          const tx = await signer.sendTransaction({
            to: addr
      } catch (err) {
            console.log(console.log(err.message))
          }
          }
        }
      }
    }
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
