import React, { useEffect, useState } from 'react'
import { deleteJob, getJobs } from '../services/services'
import Card from '../components/Card'

const Home = () => {

  const [jobs, setJobs] = useState([])

  const handleDelete =async (id) =>{

    const confirm =  window.confirm("Do you want to delete")
    if(!confirm) return

    await deleteJob(id)

    loadJob()
  }

  useEffect(()=>{
    loadJob()
  },[])

  const loadJob = async ()=>{
    const response =await getJobs()
    setJobs(response.data)
  }

  return (
    <div className='flex flex-wrap'>
        {jobs.map((job)=>{
          return(
            <Card 
            key={job.id}
            job={job}
            handleDelete={handleDelete}
            />
          )
        })}
    </div>
  )
}

export default Home