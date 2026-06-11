import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-gray-800 border-b border-gray-700 p-5'>
      <div className='flex justify-between items-center'>

        <Link
          to='/'
          className='text-white text-xl font-bold'
        >
          Job Portal
        </Link>

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