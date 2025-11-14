import './App.css'
import { checkSeparation, getRandomStandard, getRandomWake } from './wake'
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
      <h1>Wake Turbulence Standard Quiz</h1>
      <h2>{standard.LABEL}</h2>
      <h2><b>{leader} </b>followed by <b>{follower}</b></h2>
      <button onClick = {reset}>{buttonState}</button>
      <p>Minutes: {buttonState === "Reset" && separation.mins }</p>
      <p>Distance: {buttonState === "Reset" && separation.distance}</p>
         
    </>
  )
}

export default App
