import React from 'react'

const EmptyState = () => {
  return (
    <div className="text-center mt-10 h-screen w-screen flex justify-center flex-col">
      <h2 className="text-2xl font-bold">
        No Jobs Found
      </h2>

      <p className="text-gray-500 mt-2">
        Try searching with another keyword.
      </p>
    </div>
  )
}

export default EmptyState