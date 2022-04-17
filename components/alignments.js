import React from 'react'

function Alignment({children,year,ttl,place,pj=false}) {
  return (
    <div className='grid grid-cols-[15%,80%] gap-4 w-full'>
        <div className='text-gray-600 text-sm mt-1'>{year}</div>
        <div className='grid gap-2'>
            <h5 className='text-lg'>
              {pj?<div className='flex gap-2'>
              <a href={pj}>{ttl}</a>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              </div>:ttl}
            </h5>
<span className='text-sm text-gray-600 italic'>In {place}</span>
            <p className='text-[15px] text-justify text-gray-700'>{children}</p>
        </div>
    </div>
  )
}

export default Alignment