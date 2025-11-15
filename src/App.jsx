import "./App.css";
import {
  checkSeparation,
  getRandomStandard,
  getRandomWake,
  getRandomType,
} from "./wake";
import { useState } from "react";

const Card = ({ children, title }) => {
  return (
    <div class='m-2 max-w-sm rounded overflow-hidden shadow-lg bg-white text-black'>
      <div class='px-6 py-2'>
        <div class='font-bold text-xl mb-2'>{title}</div>
      </div>
      <div class='px-6 pt-4 pb-2'>{children}</div>
    </div>
  );
};

function App() {
  const generateScenario = () => {
    let scenario = {
      standard: getRandomStandard(),
      leader: getRandomWake(),
      follower: getRandomWake(),
      leaderType: "",
      followerType: "",
    };
    scenario.separation = checkSeparation(
      scenario.standard,
      scenario.leader,
      scenario.follower
    );
    scenario.leaderType = getRandomType(scenario.leader);
    scenario.followerType = getRandomType(scenario.follower);
    return scenario;
  };

  const [scenario, setScenario] = useState(generateScenario());
  const [buttonState, setButtonState] = useState("Reveal");
  const reset = () => {
    if (buttonState === "Reset") {
      setScenario(generateScenario());
      setButtonState("Reveal");
      return;
    }
    setButtonState("Reset");
  };
  return (
    <div className='flex flex-row flex-wrap p-8'>
      <Card title={"Wake Turbulence Standards Quiz"}>
        <div className='text-center text-2xl font-bold'>
          <b>
            {scenario.leaderType} followed by {scenario.followerType}
          </b>
        </div>
        <div className='text-center  font-bold'>
          <b>{scenario.standard.LABEL}</b>
        </div>
        <div className='grid grid-flow-col auto-cols-2 gap-x-8 content-center justify-center'>
          <div className='text-4xl font-black align-center py-6 text-center'>
            {buttonState === "Reset" ? scenario.separation.mins : "?"} <br />
            MIN
          </div>
          <div className='text-4xl font-black align-center py-6 text-center'>
            {buttonState === "Reset" ? scenario.separation.distance : "?"}{" "}
            <br />
            NM
          </div>
        </div>
        <div className='w-full '>
          <button
            className={
              buttonState === "Reset"
                ? "block mx-auto bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full transition-all"
                : " block mx-auto transition-all bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
            }
            onClick={reset}
          >
            {buttonState}
          </button>
        </div>
      </Card>
      <Card title={"Aicraft Type Quiz"}></Card>
    </div>
  );
}

export default App;
