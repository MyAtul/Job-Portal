import React, { useState } from 'react'
import Home from './pages/Home'
import Card from './components/Card'
import { Routes,Route } from "react-router-dom";
import Edit from './pages/Edit';
import Navbar from './components/Navbar';
import AddJob from './pages/AddJob';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import JobDetails from './pages/JobDetails';

const App = () => {

  const [keyword, setKeyword] = useState('')
  const [suggestions, setSuggestions] = useState([])

  return (
    <div className='bg-black text-white min-h-screen min-w-screen'>
      <Navbar 
      keyword={keyword}
      setKeyword={setKeyword}
      suggestions={suggestions}
      setSuggestions={setSuggestions}
      />
      <Routes>
        <Route path='/' element={<Home keyword={keyword} suggestions={suggestions} setSuggestions={setSuggestions}/>}/>
        <Route path='/editJob' element={<Edit />}/>
        <Route path='/addJob' element={<AddJob />}/>
        <Route path='/editJob/:id' element={<Edit />}/>
        <Route path='jobdetail/:id' element={<JobDetails />}/>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

    </div>
  )
}

export default App