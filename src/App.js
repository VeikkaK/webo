import { useState } from 'react'
import './App.css'

function App() {
  const [Age, setAge] = useState(0)
  const [Tulos, setTulos] = useState(0)
  
function laske(e) {
  e.preventDefault()
  const Upper = (220 - Age) * 0.85
  const Lower = (220 - Age) * 0.65
  const Tulos = (Lower +"-"+ Upper)
  setTulos(Tulos)
}

  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={laske}>
      <div>
        <label>Age</label>
        <input type="number" value={Age} onChange={e=> setAge(e.target.value)}/>   
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{Tulos}</output>
          </div>
        <button type="button" onClick={laske}>Calculate</button>
      </form>
      </div>
  );
}

export default App;