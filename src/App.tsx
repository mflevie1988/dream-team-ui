import './App.css'

import dttLogo from './assets/dtt_logo_transparent.png'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.dreamteamtravels.com.au/" target="_blank">
          <img src={dttLogo} className="logo" alt="Dream Team Travels logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{`Vite + React ${import.meta.env.VITE_PORT}`}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
