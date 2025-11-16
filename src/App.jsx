import "./App.css";
import Wake_Quiz from "./components/WakeQuiz";
import Type_Quiz from "./components/TypeQuiz";

function App() {
  return (
    <div className='flex flex-row flex-wrap p-8'>
      <Wake_Quiz />
      <Type_Quiz />
    </div>
  );
}

export default App;
