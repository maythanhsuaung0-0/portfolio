import React from 'react'
import {useRouter} from 'next/router'
function Drawer({isOpen,setIsOpen}) {
    let history=useRouter()
 
    if(isOpen){
        return(
            <div className='w-full h-screen fixed z-40 top-0 left-0 bg-white   lg:hidden'>
        <ul className='flex flex-col gap-4 py-5 w-10/12 m-auto h-full justify-center'>
            <li className=' mb-36 self-end'>
                <div onClick={()=>setIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </div>
            </li>
        <li className=' hover:bg-gray-100 w-full text-center py-2 text-lg'>
                <div onClick={()=>history.push('/about')} className='cursor-pointer'>About</div>
                </li>
                <li className=' hover:bg-gray-100 w-full text-center py-2 text-lg'>
                <div onClick={()=>history.push('/blogs')} className='cursor-pointer'>Blogs</div>
                </li>
                <li className=' hover:bg-gray-100 w-full text-center py-2 text-lg'>
                <div onClick={()=>history.push('/cv')} className='cursor-pointer'>My CV</div>
                </li>
                <li className=' hover:bg-gray-100 w-full text-center py-2 text-lg mb-auto'>
                    <div onClick={()=>history.push('/#contact')} className='cursor-pointer'>Contact</div>
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