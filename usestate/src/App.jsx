import { useState } from 'react'
import './App.css'

const App = () => {
  const [value, setValue] = useState(0) // Define a stateful value and its updater function

  const handleDownClick = () => { // When clicking the down button
    setValue((prevValue) => {
      // if prevValue is greater than 0, set the new value to prevValue - 1
      if (prevValue > 0) return prevValue - 1

      // set the new value to 0
      return 0
    })
  }

  const handleUpClick = () => { // When clicking the up button
    // set the nev value to prevValue + 1
    setValue((prevValue) => prevValue + 1)
  }
  return (
    <div className="App">
      <div className="value">
        {value}
      </div>
      <button type="button" onClick={handleDownClick}>Down</button>
      <button type="button" onClick={handleUpClick}>Up</button>
    </div>
  );
}

export default App
