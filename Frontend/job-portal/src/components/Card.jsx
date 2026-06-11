import { Link } from "react-router-dom"

const Card = ({ job ,handleDelete }) => {
  return (
    <div className='p-4'>
      <div className='bg-white rounded-xl w-80 shadow-md hover:shadow-lg transition-all duration-300'>

        <div className='flex justify-between items-center p-4'>
          <img
            className='h-12 w-12 rounded'
            src= {job.imgUrl}
            alt={job.company}
          />

          <button className='text-gray-500 hover:text-black font-medium'>
            Save
          </button>
        </div>

        <div className='px-4 pb-4'>

          <h1 className='text-xl font-semibold text-black'>
            {job.company}
          </h1>

          <h2 className='text-2xl font-bold mt-2 text-black'>
            {job.title}
          </h2>

          <p className='text-gray-500 text-sm mt-1'>
            {job.location}
          </p>

          <div className='mt-4'>
            <span className='bg-blue-100 text-blue-700 rounded px-2 py-1 text-sm'>
              {job.skills}
            </span>
          </div>

          <p className='text-gray-600 text-sm mt-4 line-clamp-3'>
            {job.description}
          </p>

          <div className='border-t mt-5 pt-4 border-gray-300 flex justify-between items-center'>
            <div>
              <h1 className='font-semibold text-lg text-black'>
                ₹{job.salary}
              </h1>
            </div>

            <div className='flex gap-2'>
  
              <button
                className='bg-black text-white rounded-xl py-2 px-3 hover:bg-gray-800 transition'
              >
                Apply
              </button>

              <Link
                to={`/editJob/${job.id}`}
                className='bg-blue-500 text-white rounded-xl py-2 px-3 hover:bg-blue-600 transition'
              >
                Edit
              </Link>

              <button
                onClick={()=>{
                  handleDelete(job.id)
                }}
                className='bg-red-500 text-white rounded-xl py-2 px-3 hover:bg-red-600 transition'
              >
                Delete
              </button>

            </div>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Card