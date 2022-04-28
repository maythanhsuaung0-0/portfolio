import React from 'react'
import Link from 'next/link'
function Drawer({isOpen,setIsOpen}) {
 
    if(isOpen){
        return(
            <div className='w-full h-screen fixed z-50 top-0 left-0 bg-white dark:bg-[rgba(30,41,59)]   lg:hidden'>
        <ul className='flex flex-col gap-4 py-5 w-10/12 m-auto h-full justify-center'>
            <li className=' mb-36 self-end'>
                <div onClick={()=>setIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
            </li>
            <li className=' hover:bg-gray-100 w-full text-center py-2 text-lg'>
                <div className='cursor-pointer'>
                    <Link href={'/'}>Home</Link>
                </div>
                </li>
        <li className=' hover:bg-gray-100 w-full text-center py-2 text-lg'>

                <div  className='cursor-pointer'>
                <Link href={'/about'}>About</Link>
                </div>
                </li>
                <li className=' hover:bg-gray-100 w-full mb-auto text-center py-2 text-lg'>
                <div className='cursor-pointer'>
                <Link href={'/cv'}>Experiment</Link>
                </div>
                </li>

        </ul>
    </div>
        )
    }
    else {
        return null
    }
}

export default Drawer