import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Card from './components/Card'
import { Routes,Route } from "react-router-dom";
import Edit from './pages/Edit';
import Navbar from './components/Navbar';
import AddJob from './pages/AddJob';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import JobDetails from './pages/JobDetails';
import { getCompanies, getLocations, getSkills } from './services/services';

const App = () => {

  const [keyword, setKeyword] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const [location, setLocation] = useState('')
  const [skill, setSkill] = useState('')
  const [company, setCompany] = useState('')
  const [salary, setSalary] = useState('')
  const [sortBy, setSortBy] = useState('id')

  /*For filter options*/
  const [locations, setLocations] = useState([])
  const [companies, setCompanies] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {

    const loadFilterOptions = async () =>{

      try{
      const loactionRes = await getLocations()
      const companiesRes = await getCompanies()
      const skillsRes = await getSkills()

      setLocations(loactionRes.data)
      setCompanies(companiesRes.data)
      setSkills(skillsRes.data)

      }catch(error){
        console.log(error)
      }
    }

    loadFilterOptions()

  },[])

  return (
    <div className='bg-black text-white min-h-screen min-w-screen'>
      <Navbar 
      keyword={keyword}
      setKeyword={setKeyword}
      suggestions={suggestions}
      setSuggestions={setSuggestions}
      location={location}
      setLocation={setLocation}
      skill={skill}
      setSkill={setSkill}
      company={company}
      setCompany={setCompany}
      salary={salary}
      setSalary={setSalary}
      sortBy={sortBy}
      setSortBy={setSortBy}
      locations={locations}
      companies={companies}
      skills={skills}
      />
      <Routes>
        <Route path='/' element={
          <Home 
          keyword={keyword} 
          suggestions={suggestions} 
          setSuggestions={setSuggestions}
          location={location}
          skill={skill}
          company={company}
          salary={salary}
          sortBy={sortBy}
          />
          }
        />
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