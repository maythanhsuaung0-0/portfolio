import React from 'react'

function Card() {
  return (
    <div className=' hover:border-indigo-600 grid gap-4 px-4 py-4 w-full rounded-lg border border-gray-400 shadow-sm'>
        <div><h6 className=' text-lg font-medium text-indigo-600'>Social App</h6>
        <p className=''>Testing Social Website</p></div>
            <div className='flex gap-2'>
                <span className=' self-center w-3 h-3 bg-red-500 rounded-full block'></span><span className='text-gray-600'>Javascript</span>
            </div>
    </div>
  )
}

export default Card