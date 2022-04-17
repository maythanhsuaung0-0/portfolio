import React,{useState} from 'react'
import "@fontsource/inter";
import { useRouter } from 'next/router';
function Navbar() {

    let history=useRouter()
    // 
  return (
    <div className={` py-5 backdrop-blur-sm bg-[rgba(255,255,255,0.8)]  fixed top-0 left-0 w-full shadow-sm`}>
        
        <nav className='w-10/12 lg:w-1/2 m-auto flex justify-between'>
            <div onClick={()=>history.push('/')} className='grid self-center cursor-pointer'>May</div>
            <ul className='hidden list-none lg:flex flex-row gap-8'>
                
                <li className='self-center'>
                <div onClick={()=>history.push('/about')} className=' hover:animate-bounce cursor-pointer'>About</div>
                </li>
                <li className='self-center'>
                <div onClick={()=>history.push('/blogs')} className=' hover:animate-bounce cursor-pointer'>Blogs</div>
                </li>
                <li className='self-center'>
                <div onClick={()=>history.push('/cv')} className=' hover:animate-bounce cursor-pointer'>My CV</div>
                </li>
                <li className='self-center'>
                    <div onClick={()=>history.push('/#contact')} className=' hover:animate-bounce cursor-pointer'>Contact</div>
                </li>
            </ul>
            <div className='flex ml-auto lg:ml-0 mr-3 lg:mr-0 h-9 self-center'>
               <div> <label htmlFor='lightmode'>
                <div className={`w-8 h-8 grid place-items-center bg-indigo-500  rounded-full cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                </div>
           
            </label>
            <input  type={'radio'} id='lightmode' value={'lightmode'} name='mode' className=' invisible'/>
            </div>
            <div><label htmlFor='darkmode'><div className={`w-8 h-8 grid place-items-center  rounded-full cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            </div></label>
            <input className='invisible'   type={'radio'} id='darkmode' value={'darkmode'} name='mode'/></div>
            </div>
            <div className='lg:hidden grid place-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        </div>
        </nav>
        
    </div>
  )
}

export default Navbar