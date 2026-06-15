import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FilterBar from '../components/FilterBar'

const Navbar = ({
  keyword,
  setKeyword,
  suggestions,
  setSuggestions,
  location,
  setLocation,
  skill,
  setSkill,
  company,
  setCompany,
  salary,
  setSalary,
  sortBy,
  setSortBy,
  locations,
  companies,
  skills,
  handleLogout
}) => {

  const [showFilters, setShowFilters] = useState(false)

  const isLoggedIn = localStorage.getItem("token")

  return (
    <div className='bg-gray-800 border-b border-gray-700 p-5 relative'>
      <div className='flex justify-between items-center'>

        <Link
          to='/'
          className='text-white text-xl font-bold'
        >
          Job Portal
        </Link>

        {/* Search Container */}
        <div className='relative'>

          <input
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            className='px-3 py-2 rounded text-black w-80 bg-white outline-none'
            type='text'
            placeholder='Search jobs...'
          />

          {keyword && suggestions.length > 0 && (
            <div className='absolute top-12 left-0 w-full bg-white rounded-lg shadow-lg overflow-hidden z-50'>

              {suggestions.map((job) => (
                <div
                  key={job.id}
                  onClick={() => {
                    setKeyword(job.title)
                    setSuggestions([])
                  }}
                  className='px-4 py-3 text-black cursor-pointer hover:bg-gray-100 border-b last:border-b-0'
                >
                  <p className='font-medium'>{job.title}</p>
                  <p className='text-xs text-gray-500'>
                    {job.company}
                  </p>
                </div>
              ))}

            </div>
          )}

        </div>

        
        <div className='flex items-center gap-3'>

          {
            isLoggedIn?<div>
            <div className='flex items-center gap-3'>
              <Link
                to='/addJob'
                className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
              >
                Add Job
              </Link>
              
              <button
                onClick={handleLogout}
                className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'
              >
                Log Out
              </button>
            </div> 
            </div> : <>
            <Link 
              to='/login'
              className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
            >
              Login
            </Link>

            <Link 
              to='/register'
              className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
            >
              Register
            </Link>
            
            </>
          

          }

          <button
            onClick={() => setShowFilters(!showFilters)}
            className='bg-slate-700 px-4 py-2 rounded-lg hover:bg-slate-600'
          >
            Filters
          </button>

        </div>
      </div>
      {
        showFilters && (
          <div className='absolute right-5 top-20 z-50'>
            <FilterBar 
            location={location}
            setLocation={setLocation}
            skill={skill}
            setSkill={setSkill}
            salary={salary}
            setSalary={setSalary}
            company={company}
            setCompany={setCompany}
            sortBy={sortBy}
            setSortBy={setSortBy}
            locations={locations}
            companies={companies}
            skills={skills}
            />
          </div>
        )
      }
    </div>
  )
}

export default Navbar