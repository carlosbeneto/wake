import Card from "./Card";
import { useState } from "react";

const TYPES = [
  { d: "A388", n: "Airbus A380", w: "J" },
  { d: "A330", n: "Airbus A330", w: "H" },
  { d: "A340", n: "Airbus A340", w: "H" },
  { d: "A320", n: "Airbus A320", w: "M" },
  { d: "A321", n: "Airbus A321", w: "M" },
  { d: "A319", n: "Airbus A319", w: "M" },
  { d: "B737", n: "Boeing 737", w: "M" },
  { d: "B747", n: "Boeing 747", w: "H" },
  { d: "B777", n: "Boeing 777", w: "H" },
  { d: "B767", n: "Boeing 767", w: "H" },
  { d: "B787", n: "Boeing 787", w: "H" },
  { d: "DH8A", n: "Dash 8 A", w: "M", isLight: true },
  { d: "DH8B", n: "Dash 8 B", w: "M", isLight: true },
  { d: "DH8B", n: "Dash 8 B", w: "M", isLight: true },
  { d: "DH8C", n: "Dash 8 C", w: "M", isLight: true },
  { d: "DH8D", n: "Dash 8 D", w: "M" },
  { d: "AT72", n: "ATR 72", w: "M", isLight: true },
  { d: "H25B", n: "BAe 125", w: "M", isLight: true },
  { d: "B190", n: "Beechcraft 1900", w: "M", isLight: true },
  { d: "C5XX", n: "Cessna Citation 5", w: "M", isLight: true },
  { d: "C6XX", n: "Cessna Citation 6", w: "M", isLight: true },
  { d: "DH8B", n: "Dash 8 B", w: "M", isLight: true },
  { d: "C750", n: "Citation 750", w: "M", isLight: true },
  { d: "E120", n: "Embraer 120 Brasilia", w: "M", isLight: true },
  { d: "E135", n: "Embraer 135", w: "M", isLight: true },
  { d: "E145", n: "Embraer 145", w: "M", isLight: true },
  { d: "E550", n: "Embraer 550 Legacy", w: "M", isLight: true },
  { d: "FA50", n: "Dassault Falcon 50", w: "M", isLight: true },
  { d: "LJ35", n: "Learjet 35", w: "M", isLight: true },
  { d: "LJ45", n: "Learjet 45", w: "M", isLight: true },
  { d: "SF34", n: "Saab 340", w: "M", isLight: true },
  { d: "SW4", n: "Fairchild Metroliner", w: "M", isLight: true },
  { d: "CL60", n: "Bombardier Challenger 60", w: "M", isLight: true },
  { d: "JS32", n: "BAe Jetstream 32", w: "M", isLight: true },
  { d: "FA20", n: "Dassault Falcon 20", w: "M", isLight: true },
  { d: "F2TH", n: "Dassault Falcon 2000", w: "M", isLight: true },
  { d: "BE40", n: "Hawker 400", w: "M", isLight: true },
  { d: "C130", n: "C130 Hercules", w: "M" },
  { d: "C5", n: "Lockheed C5 Galaxy", w: "H" },
  { d: "PA31", n: "Piper Navajo", w: "L" },
  { d: "AS32", n: "Aerospatiale AS-332 Super Puma", w: "M" },
  { d: "H47", n: "Boeing Chinook", w: "M" },
  { d: "H53", n: "Sikorsky TH-53", w: "M" },
  { d: "B757", n: "Boeing 757", w: "M" },
  { d: "PA28", n: "Piper Cherokee", w: "L" },
  { d: "C182", n: "Cessna 182", w: "L" },
  { d: "BE20", n: "Beech 200 Super King Air", w: "L" },
  { d: "SH36", n: "Short 360", w: "M", isLight: true },
];
const generateScenario = () => {
  const randomType = TYPES[Math.floor(Math.random() * TYPES.length)];
  return randomType;
};

const Type_Quiz = () => {
  const [type, setType] = useState(generateScenario());
  const [buttonState, setButtonState] = useState("Reveal");
  const reset = () => {
    if (buttonState === "Reset") {
      setType(generateScenario());
      setButtonState("Reveal");
      return;
    }
    setButtonState("Reset");
  };

  const lm = type.isLight && "*Is LM";

  return (
    <Card title='Aircraft Type Quiz'>
      <div className='text-center text-2xl font-bold'>
        <b>{type.d}</b>
      </div>

      <div className='text-2xl font-black align-center text-center'>
        <b>{buttonState === "Reset" ? type.n : "TYPE"}</b>
      </div>
      <div className='text-2xl font-black align-center py-6 text-center'>
        <p>
          <span>
            <b>{buttonState === "Reset" ? type.w : "WAKE"}</b>
            &nbsp;{" "}
            <span className='font-thin'>{buttonState === "Reset" && lm} </span>
          </span>
        </p>
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

export default Type_Quiz;
