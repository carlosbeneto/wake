import "./App.css";
import Wake_Quiz from "./components/WakeQuiz";
import Type_Quiz from "./components/TypeQuiz";
import VFR_Quiz from "./components/VFRQuiz";

function App() {
  return (
    <div className='grid  grid-cols-1 lg:grid-cols-3 p-8'>
      <Wake_Quiz />
      <Type_Quiz />
      <VFR_Quiz />
    </div>
  );
}

export default App;
