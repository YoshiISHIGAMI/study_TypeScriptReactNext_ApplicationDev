import React from 'react'
import logo from './logo.svg'
import './App.css'
import Clock from './components/Clock'
import Parent from './components/ContextSample2'
import ImageUploader from './components/RefSample'
import Counter from './components/ReducerSample'
import CounterUseCallbackTest1 from './components/UseCallbackTest1'
import UseMemoSample1 from './components/UseMemoSample1'
import UseMemoSample from './components/UseMemoSample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="test">
        {/* <Parent /> */}
        {/* <UseMemoSample /> */}
        <Clock />
        {/* <Parent /> */}
        {/* <Counter initialValue={0} /> */}
        {/* <CounterUseCallbackTest1 /> */}
        {/* <UseMemoSample1 /> */}
        <UseMemoSample />
      </div>
    </div>
  )
}

export default App
