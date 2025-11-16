import "./App.css";
import Wake_Quiz from "./components/WakeQuiz";
import Type_Quiz from "./components/TypeQuiz";

function App() {
  return (
    <div className='grid  grid-cols-1 lg:grid-cols-3 p-8'>
      <Wake_Quiz />
      <Type_Quiz />
    </div>
  );
}

export default App;
