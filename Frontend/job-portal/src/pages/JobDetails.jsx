import React, { useEffect, useState } from 'react'
import { getJobById } from '../services/services'
import { useParams } from 'react-router-dom'

const JobDetails = () => {

    const [job, setJob] = useState('')

    const {id} = useParams()

    const loadJob = async () =>{
        const response = await getJobById(id)
        setJob(response.data)
    }

    useEffect(()=>{
        loadJob()
    },[id])

    if (!job) {
    return (
        <div className='text-white text-center mt-10'>
            Loading...
        </div>
    )
    }

  return (
    <div className='max-w-4xl mx-auto p-8 text-black'>

        <div className='bg-white rounded-2xl shadow-lg p-8'>

            <div className='flex items-center gap-6'>

                <img
                    src={job.imgUrl}
                    alt={job.company}
                    className='h-24 w-24 rounded-xl'
                />

                <div>
                    <h1 className='text-3xl font-bold'>
                        {job.title}
                    </h1>

                    <h2 className='text-xl text-gray-600'>
                        {job.company}
                    </h2>
                </div>

            </div>

            <div className='mt-6 grid grid-cols-2 gap-4'>

                <div>
                    <p className='font-semibold'>Location</p>
                    <p>{job.location}</p>
                </div>

                <div>
                    <p className='font-semibold'>Salary</p>
                    <p>₹{job.salary}</p>
                </div>

            </div>

            <div className='mt-6'>
                <h3 className='font-semibold text-lg'>
                    Skills
                </h3>

                <p>{job.skills}</p>
            </div>

            <div className='mt-6'>
                <h3 className='font-semibold text-lg'>
                    Description
                </h3>

                <p>{job.description}</p>
            </div>

            <button
                className='mt-8 bg-black text-white px-6 py-3 rounded-xl'
            >
                Apply Now
            </button>

        </div>

    </div>
  )
}

export default JobDetails