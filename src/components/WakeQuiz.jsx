import Card from "./Card";
import { useState } from "react";

import {
  checkSeparation,
  getRandomStandard,
  getRandomWake,
  getRandomType,
} from "../utils/wake";

const Wake_Quiz = () => {
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
          {buttonState === "Reset" ? scenario.separation.distance : "?"} <br />
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
  );
};

export default Wake_Quiz;
