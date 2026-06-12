import React, { useEffect, useState } from 'react'
import { deleteJob, getJobs, searchJobs } from '../services/services'
import Card from '../components/Card'

const Home = ({keyword,setSuggestions}) => {

  const [jobs, setJobs] = useState([])
  
  const loadJob = async ()=>{
    const response =await getJobs()
    setJobs(response.data)
  }

  const handleDelete =async (id) =>{

    const confirm =  window.confirm("Do you want to delete")
    if(!confirm) return

    await deleteJob(id)

    loadJob()
  }

  const searchJob = async () =>{

    if(keyword.trim() === ''){
      loadJob()
      return
    }
    else{
      const response = await searchJobs(keyword)
      setJobs(response.data)
      setSuggestions(response.data)
    }
    
  }
  
  useEffect(()=>{

    const timer = setTimeout(()=>{
        if(keyword.trim() === ''){
        loadJob()
      }
      else{
        searchJob()
      }
    },500)

    return()=>clearTimeout(timer)
  },[keyword])


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