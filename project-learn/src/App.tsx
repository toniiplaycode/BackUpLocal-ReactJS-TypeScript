import './App.css';
import Counter from './Components/Counter';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter/> */}
        <ToDo />
      </header>
    </div>
  );
}

export default App;
