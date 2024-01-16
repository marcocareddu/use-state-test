import logo from './logo.svg';
import Button from './Components/Button';
import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const addCount = () => { setValue(value + 1) };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hai cliccato {value} volte</h1>
        <Button addCount={addCount}/>
      </header>
    </div>
  );
}

export default App;
