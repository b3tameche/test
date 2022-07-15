import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import SignUp from './components/SingUp'
import SignIn from './components/SignIn'
import Homepage from './components/Homepage'
import './App.css'

const App = () => {
  return (
    <div className='App'>
    <Router>
      <Routes>
        <Route path='/' element={<SignUp />}/>
        <Route path='/login' element={<SignIn />}/>
        <Route path='/homepage' element={<Homepage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App