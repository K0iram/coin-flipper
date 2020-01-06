import React, { useState } from 'react';
import './App.css';

function App() {
  const [side, setSide] = useState("");
  const [flipping, setFlipping] = useState(false);
  const [headsCount, setHeadsCount] = useState(0)
  const [tailsCount, setTailsCount] = useState(0)

  const coinFlip = () => {
    let flipResult = Math.random();
    setFlipping(true)
    setSide('')
    
    setTimeout(() => {
      if(flipResult <= 0.5){
        setSide('heads')
        setTimeout(() => { 
          setHeadsCount(headsCount + 1)
          setFlipping(false)
        }, 3000)
      }
      else{
        setSide('tails')
        setTimeout(() => { 
          setTailsCount(tailsCount + 1)
          setFlipping(false)
        }, 3000)
      }
    }, 100);
  }

  const resetCount = () => {
    setHeadsCount(0)
    setTailsCount(0)
  }

  return (
    <div className="App">
      <h1>Coin Flipper</h1>
      <div id="coin" className={side}>
        <div className="side-a">HEADS</div>
        <div className="side-b">TAILS</div>
      </div>
      <button onClick={coinFlip} disabled={flipping} className="flipper">
      {flipping ? 'Flipping...' : 'Flip'}
      </button>

      <div className="counter">
        <p>Heads Count: {headsCount}</p>
        <p>Tails Count: {tailsCount}</p>
        <button className="reset" onClick={resetCount}>Reset</button>
      </div>
    </div>
  );
}

export default App;
