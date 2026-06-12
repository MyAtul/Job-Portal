import React, { useEffect, useState } from 'react'
import { addJob, getJobById, updateJob } from '../services/services'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const JobForm = () => {

    const [title, setTitle] = useState('')
    const [company, setCompany] = useState('')
    const [skills, setSkills] = useState('')
    const [location, setLocation] = useState('')
    const [salary, setSalary] = useState('')
    const [description, setDescription] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const {id} = useParams()

    const navigate = useNavigate()

    const loadJobById = async () =>{
        const response = await getJobById(id)

        setTitle(response.data.title)
        setCompany(response.data.company)
        setSkills(response.data.skills)
        setLocation(response.data.location)
        setSalary(response.data.salary)
        setDescription(response.data.description)
        setImgUrl(response.data.imgUrl)
    }

    useEffect(()=>{
        if(id){
            loadJobById()
        }
    },[id])

    const handleSubmit =async (event)=>{
        event.preventDefault()

        const job ={
            title,
            company,
            skills,
            location,
            salary,
            imgUrl,
            description
        }

        if(id){
            await updateJob(id,job)
            toast.success("Job Details Updated")
            navigate("/")
        }

        else{
            await addJob(job)
            toast.success("New Job Added")
            navigate("/")
        }

    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 p-6'>

      <div className='bg-white w-full max-w-xl rounded-2xl shadow-lg p-8 text-black'>

        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Enter the details
        </h1>

        <form 
        onSubmit={(event)=>{
            handleSubmit(event)
        }}
        className='space-y-4'>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Job Title
            </label>
            <input
                onChange={(elem)=>{
                    setTitle(elem.target.value)
                }}
              value={title}
              type='text'
              placeholder='Enter job title'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Company
            </label>
            <input
                onChange={(elem)=>{
                    setCompany(elem.target.value)
                }}
                value={company}
              type='text'
              placeholder='Enter company name'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Skills
            </label>
            <input
                onChange={(elem)=>{
                    setSkills(elem.target.value)
                }}
                value={skills}
              type='text'
              placeholder='React, Spring Boot, MySQL'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black'
            />
          </div>

          <div className='grid grid-cols-2 gap-4'>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Location
              </label>
              <input
                onChange={(elem)=>{
                    setLocation(elem.target.value)
                }}
                value={location}
                type='text'
                placeholder='Mumbai'
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Salary
              </label>
              <input
                onChange={(elem)=>{
                    setSalary(elem.target.value)
                }}
                value={salary}
                type='text'
                placeholder='12 LPA'
                className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black'
              />
            </div>

          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Company Logo URL
            </label>
            <input
                onChange={(elem)=>{
                    setImgUrl(elem.target.value)
                }}
                value={imgUrl}
              type='text'
              placeholder='https://logo.clearbit.com/company.com'
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Description
            </label>
            <textarea
                onChange={(elem)=>{
                    setDescription(elem.target.value)
                }}
                value={description}
              rows='4'
              placeholder='Enter job description'
              className='w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-black'
            />
          </div>

          <button
            type='submit'
            className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition active:scale-95'
          >
            Add Job
          </button>

        </form>

      </div>

    </div>
  )
}

export default JobForm