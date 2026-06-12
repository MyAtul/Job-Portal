import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({
  keyword,
  setKeyword,
  suggestions,
  setSuggestions
}) => {
  return (
    <div className='bg-gray-800 border-b border-gray-700 p-5'>
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

        <Link
          to='/addJob'
          className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition'
        >
          Add Job
        </Link>

      </div>
    </div>
  )
}

export default Navbar