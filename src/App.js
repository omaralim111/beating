/*import React from 'react';*/
  const connectWallet = async() => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined"){
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts"});
        console.log(accounts[0]);
      } catch(err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please Install MetaMask");
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
