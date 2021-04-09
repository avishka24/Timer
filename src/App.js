import {useState} from "react";
import './App.css';

function App() {
  const [currentTime,setCurrenttime] = useState(false);
  const updateTime = () =>{
    let time = new Date().toLocaleTimeString();
    setCurrenttime(time);
  }
  
  setInterval(updateTime,1000);
  return (
    <div className="App">
    <img src="./assets/timerImage.svg" alt="timer image"/>
      <h1>{currentTime}</h1>
    </div>
  );
}

export default App;
