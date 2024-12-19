import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import State_basic from './components/State_basic'
import Btn from './components/Btn'
import Api from './components/Api'
import Pokemon from './components/Pokemon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <br /><br /><br />
      <h1>welcome home</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/state" element={<State_basic />} />
        <Route path="/btn" element={<Btn />} />
        <Route path="/api" element={<Api />} />
        <Route path="/poki" element={<Pokemon />}/>
      </Routes>
    </>
  )
}

export default App
