import React, { useEffect, useState } from 'react'
import { deleteJob, getJobById, getJobByPage, getJobs, searchJobs } from '../services/services'
import Card from '../components/Card'
import { toast } from 'react-toastify'

const Home = ({keyword,setSuggestions}) => {

  const [jobs, setJobs] = useState([])
  const [page, setPage] = useState(0) 
  const [totalPages, setTotalPages] = useState(0)

  const loadJob = async ()=>{

    const response = await getJobByPage(page,5)
    setJobs(response.data.content)
    setTotalPages(response.data.totalPages)

  }

  const handleDelete = async (id) =>{

    const confirm =  window.confirm("Do you want to delete")
    if(!confirm) return

    await deleteJob(id)
    toast.success("Job Delated Successfully")

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
    loadJob()
  },[page])
  
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

        <div className='w-full flex justify-center items-center gap-4 my-8'>

          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className='bg-gray-700 px-4 py-2 rounded disabled:opacity-50'
          >
            Previous
          </button>

          {
            [...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={`px-3 py-2 rounded ${
                  page === index
                    ? 'bg-green-500'
                    : 'bg-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))
          }

          <button
            disabled={page === totalPages - 1}
            onClick={() => setPage(page + 1)}
            className='bg-gray-700 px-4 py-2 rounded disabled:opacity-50'
          >
            Next
          </button>

        </div>
    </div>
  )
}

export default Home