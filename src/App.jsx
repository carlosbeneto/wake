import './App.css'
import { checkSeparation, getRandomStandard, getRandomWake , getRandomType} from './wake'
import {useState} from 'react'

function App() {

  const [standard, setStandard] = useState(getRandomStandard())
  const [leader, setLeader] = useState(getRandomWake())
  const [follower, setFollower] = useState(getRandomWake())
  
  const separation = checkSeparation(standard, leader, follower)
  const [buttonState, setButtonState] = useState("Reveal")
  const reset = () => {
    if (buttonState === "Reset"){
          setStandard(getRandomStandard())
          setLeader(getRandomWake)
          setFollower(getRandomWake)
          setButtonState("Reveal")
          return
    }
    setButtonState("Reset")
  }

  return (
    <>
      <h2>Wake Turbulence Standards Quiz</h2>
      <h2>{standard.LABEL}</h2>
      <h2><b>{leader}</b> followed by <b>{follower}</b></h2>
      <button className = {buttonState === "Reset" ? "reset" : "reveal"} onClick = {reset}>{buttonState}</button>
      <p>Minutes: {buttonState === "Reset" && separation.mins }</p>
      <p>Distance: {buttonState === "Reset" && separation.distance}</p>
         
    </>
  )
}

export default App
