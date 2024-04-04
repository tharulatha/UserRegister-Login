import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login  from './components/Login'
import UserTable from './components/UserTable'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<UserTable /> } />
    </Routes>
    </div>
  )
}

export default App;


