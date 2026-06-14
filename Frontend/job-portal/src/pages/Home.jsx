import React, { useEffect, useState } from 'react'
import { deleteJob, getFilterJobs, getJobById, getJobByPage, getJobs, searchJobs } from '../services/services'
import Card from '../components/Card'
import { toast } from 'react-toastify'
import LodingPage from '../components/LodingPage'
import EmptyState from '../components/EmptyState'

const Home = (
  {
    keyword,
    setSuggestions,
    location,
    skill,
    company,
    salary,
    sortBy
  }
  ) => {

  const [jobs, setJobs] = useState([])
  const [page, setPage] = useState(0) 
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)


  const loadJob = async ()=>{
    
    try{
      setLoading(true)
      const response = await getJobByPage(page,5)
      setJobs(response.data.content)
      setTotalPages(response.data.totalPages)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setLoading(false)
    }
  
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


 useEffect(() => {

  const applyFilters = async () => {

    if(
      location ||
      skill ||
      company ||
      salary ||
      sortBy !== "id"
    ){

      const response = await getFilterJobs(
        location,
        skill,
        company,
        salary,
        sortBy
      )

      setJobs(response.data)
    }else{
      loadJob()
    }

  }

  applyFilters()

},[
  location,
  skill,
  company,
  salary,
  sortBy
])

  if(loading){
    return <div className='h-screen w-screen flex justify-center items-center'>
      <LodingPage />
    </div> 
  }

  return (
    <div className='max-w-7xl mx-auto px-4'>

        <div className='flex flex-wrap gap-6 justify-center'>
          {jobs.length === 0 ? <EmptyState/> : jobs.map((job)=>{
          return(
            <Card 
            key={job.id}
            job={job}
            handleDelete={handleDelete}
            />
          )
        })}
        </div>

        {
          !location && 
          !skill &&
          !company &&
          !salary &&
          sortBy ==="id" &&(
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
          )
        }
    </div>
  )
}

export default Home