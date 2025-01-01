import logo from './logo.svg';
import './App.css';
import Chronometer from './hooks/Chronometer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chronometer/>
      </header>
    </div>
  );
}

export default App;
