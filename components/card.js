import React from 'react'
import Link from 'next/link'
function Card({project,pj_name,pj_note,lan}) {
  return (
    <Link href={project}>
    <div className='cursor-pointer hover:border-indigo-600 grid gap-4 px-4 py-4 w-full rounded-lg border border-gray-400 shadow-sm'>
        <div><h6 className=' text-lg font-medium text-indigo-600'>{pj_name}</h6>
        <p className=''>{pj_note}</p></div>
            <div className='flex gap-2'>
                <span className=' self-center w-3 h-3 bg-red-500 rounded-full block'></span><span className='text-gray-600'>{lan}</span>
            </div>
    </div></Link>
  )
}

export default Card