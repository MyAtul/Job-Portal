import React, { useState } from 'react'
import Home from './pages/Home'
import Card from './components/Card'
import { Routes,Route } from "react-router-dom";
import Edit from './pages/Edit';
import Navbar from './components/Navbar';
import AddJob from './pages/AddJob';

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
      </Routes>
    </div>
  )
}

export default App