import React from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
      <Navbar/>
      <Home/>
    </div>
    
    </>
  )
}

export default App