import './App.css'
import { checkSeparation, getRandomStandard, getRandomWake , getRandomType} from './wake'
import {useState} from 'react'

function App() {

  const generateScenario = () => {
    let scenario = {
      standard: getRandomStandard(),
      leader: getRandomWake(),
      follower: getRandomWake(),
      leaderType: '',
      followerType: ''
    }
      scenario.separation = checkSeparation(scenario.standard, scenario.leader, scenario.follower)
      scenario.leaderType = getRandomType(scenario.leader)
      scenario.followerType = getRandomType(scenario.follower)
      return scenario
  }

  const [scenario, setScenario] = useState(generateScenario())
  const [buttonState, setButtonState] = useState("Reveal")
  const reset = () => {
    if (buttonState === "Reset"){
      setScenario(generateScenario())
      setButtonState("Reveal")
      return
    }
    setButtonState("Reset")
  }
  return (
    <>
      <h2>Wake Turbulence Standards Quiz</h2>
      <h2>{scenario.standard.LABEL}</h2>
      <h2><b>{scenario.leaderType}</b> followed by <b>{scenario.followerType}</b></h2>
      <button className = {buttonState === "Reset" ? "reset" : "reveal"} onClick = {reset}>{buttonState}</button>
      <p>Minutes: {buttonState === "Reset" && scenario.separation.mins }</p>
      <p>Distance: {buttonState === "Reset" && scenario.separation.distance}</p>
         
    </>
  )
}

export default App
