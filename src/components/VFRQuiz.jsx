import Card from "./Card";
import { useState } from "react";

const POINTS = [
  { d: "KYB", location: "Kirby Beach" },
  { d: "MAL", location: "Mount Athol" },
  { d: "GIR", location: "Giralia" },
  { d: "NJU", location: "Namatjira University" },
  { d: "CMA", location: "Campbell's Asylum" },
  { d: "AKF", location: "Aardvark Farm" },
  { d: "DLH", location: "Darley Heights" },
  { d: "MOP", location: "Minilya Overpass" },
  { d: "EPP", location: "Epping" },
  { d: "CYD", location: "Carolyn Dam" },
  { d: "ECG", location: "Exmouth Cricket Ground" },
  { d: "MBP", location: "Mowbowra Powerhouse" },
  { d: "HPP", location: "Hope Point" },
  { d: "SAA", location: "Sandalwood" },
  { d: "TTL", location: "Tristan Island" },
  { d: "JNJ", location: "Janine Junction" },
  { d: "NNO", location: "Ningaloo" },
  { d: "NNM", location: "Nunns Mill" },
];
const generateScenario = () => {
  const randomPoint = POINTS[Math.floor(Math.random() * POINTS.length)];
  const mode = Math.random() < 0.5;
  return {
    point: randomPoint,
    mode: mode,
  };
};

const VFR_Quiz = () => {
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

  //   const designator = scenario.mode ? scenario.point.d : "Designator?";
  let designator;
  if (buttonState === "Reset") {
    designator = scenario.point.d;
  } else {
    designator = scenario.mode ? scenario.point.d : "Designator?";
  }

  let location;
  if (buttonState === "Reset") {
    location = scenario.point.location;
  } else {
    location = scenario.mode ? "Location?" : scenario.point.location;
  }

  return (
    <Card title='VFR Approach Point Quiz'>
      <div className='text-center text-2xl font-bold'>
        <b>{designator}</b>
      </div>

      <div className='text-2xl font-black align-center text-center'>
        <b>{location}</b>
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

export default VFR_Quiz;
