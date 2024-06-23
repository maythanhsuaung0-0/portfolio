import React,{useState} from 'react'
import "@fontsource/inter";
import { useRouter } from 'next/router';
import Drawer from './drawer';
import Link from 'next/link';
import { themeSwitching } from '../hooks/theme'
import { useTheme } from '../themecontext/theme'
function Navbar() {
    let {mode,toggle}=useTheme()
  let history=useRouter()
  const [isOpen, setIsOpen] = useState(false)
  return (
      <>
    <div className={` dark:bg-[rgba(18,18,18,0.48)] dark:text-[#CDD5E1] py-5 backdrop-blur-md  z-50  fixed top-0 left-0 w-full shadow-sm`}>
        
        {/* <nav className='w-10/12 lg:w-1/2 2xl:w-2/5 m-auto flex justify-between'>
            <div  className='grid self-center cursor-pointer dark:text-white '>
            <Link href={'/'}>May</Link>
            </div>
            <ul className='hidden list-none lg:flex flex-row gap-8'>
            <li className='self-center '>
            <div  className={`${history.pathname==='/'?'active-link font-bold':'dark:text-white'} decorate cursor-pointer`}>
            <Link href={'/'}>Home</Link>
            </div>
            </li>
                <li className='self-center '>
                <div  className={`${history.pathname==='/about'?'active-link font-bold':'dark:text-white'} decorate cursor-pointer`}>
                <Link href={'/about'} >About</Link>
                </div>
                </li>
                <li className='self-center '>
                <div  className={`${history.pathname==='/cv'?'active-link font-bold':'dark:text-white'} decorate cursor-pointer`}>
                <Link href={'/cv'}>Experiment</Link>
                </div>
                </li> */}
                {/* <li className='self-center '>
                    <div  className={`${history.pathname==='/blogs'?'active-link font-bold':''} decorate cursor-pointer`}>
                    <Link href={'/blogs'}>Blogs</Link>
                    </div>
                </li> */}
            {/* </ul>
            <div className='flex ml-auto lg:ml-0 mr-3 lg:mr-0 h-9 self-center'>
                {
                    mode?<div onClick={()=>toggle()} className={`w-8 h-8 grid place-items-center   rounded-full cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    </div>:<div onClick={()=>toggle()} className={`w-8 h-8 grid place-items-center  rounded-full cursor-pointer`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            </div>
                }
               
            </div>
            <div onClick={()=>setIsOpen(true)} className='lg:hidden grid place-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        </div>
        </nav>
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}/> */}
    </div>
  
    </>
  )
}

export default Navbar