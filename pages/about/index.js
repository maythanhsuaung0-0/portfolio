import React,{useState} from 'react'
import Image from 'next/image'
import Navbar from '../../components/navbar'
import Button from '../../components/button'
function AboutPage() {
  return (
    <div className={``}>
    <div className="w-10/12 lg:w-1/2 m-auto">
    <Navbar/>
      {/* info: hero section */}
     <div className='pb-10 pt-24'>
         <h6 className='text-lg font-medium'>About me</h6>
         <div className=' grid lg:grid-cols-[40%,60%] gap-3 mt-5'>
            <div className=' w-full h-[260px] relative'>
                <Image alt='my image' src={'/me.JPG'} className='rounded-xl object-cover object-[0%,30%]'  layout='fill'/>
            </div>
            <article className='grid gap-3 text-[15px]'>
                <p>Hey there, I am MayThanHsu, a passionate developer from Myanmar who loves to learn more and more.</p>
                <p>Everything is always new so may be there is nothing I absolutely expertise in. But I am always in progress so I would be never late! That is my motto.</p>
                <p>I am still a junior developer but I have so many experiment years and can work well with team.Good communicating skill and teamwork are also parts of my skills.</p>
                
            </article>
         </div>
         <article className={`text-[15px]   grid gap-3 mt-3`}>
         <p>I am available for <span className={`text-gray-700 bg-yellow-200`}>HTML</span>, <span className={`text-gray-700 bg-yellow-200`}>CSS</span>, <span className={`text-gray-700 bg-yellow-200`}>Javascript</span> and other libries and frameworks such as <span className={`text-gray-700 bg-yellow-200`}>Reactjs</span>, <span className={`text-gray-700 bg-yellow-200`}>Nextjs</span> and <span className={`text-gray-700 bg-yellow-200`}>Tailwind CSS</span>, <span className={`text-gray-700 bg-yellow-200`}>Bootstrap</span>, <span className={`text-gray-700 bg-yellow-200`}>ChakraUI</span>,<span className={`text-gray-700 bg-yellow-200`}>MaterialUI</span> and also work as a UI/UX designer using <span className={`text-gray-700 bg-yellow-200`}>Figma</span> and <span className={`text-gray-700 bg-yellow-200`}>AdobeXD</span>.</p>
             <p>I love to play guitor and ukulele as a hobby in free times apart from coding.</p>
         </article>
         <div className='flex justify-end'><Button variant='outline'>Contact Me</Button></div>
     </div>
    </div>
  </div>
      
  )
}

export default AboutPage