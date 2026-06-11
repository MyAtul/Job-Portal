import React from 'react'
import Home from './pages/Home'
import Card from './components/Card'
import { Routes,Route } from "react-router-dom";
import Edit from './pages/Edit';
import Navbar from './components/Navbar';
import AddJob from './pages/AddJob';

const App = () => {
  return (
    <div className='bg-black text-white min-h-screen min-w-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/editJob' element={<Edit />}/>
        <Route path='/addJob' element={<AddJob />}/>
        <Route path='/editJob/:id' element={<Edit />}/>
      </Routes>
    </div>
  )
}

export default App