import React from 'react'
import Navbar from '../../components/navbar'
import Alignment from '../../components/alignments'
import '@fontsource/inter'
function ResumePage() {
  return (
    <div>
        <div className=" bg-white">
      <div className="w-10/12 lg:w-1/2 m-auto">
        <Navbar/>
        {/* info: hero section */}
        <div className='pb-5 pt-24'>
            <h3 className=" text-3xl">Work Experiments</h3>
            <div className='mt-5 grid gap-5 '>
                <Alignment year={'2019-2020'} place={'Myanmar'}
                ttl={'THtwin Innovation Lab'}
                >Work as a frontend developer for Shan Institute of Technology website and Gem&apos;s Gallery Website</Alignment>
                <Alignment year={'2020-2022'} place={'Myanmar'}
                ttl={'Nawphire Company'}
                >Work as  frontend developer while working on the projects for Pohmal Delivery App,Ei San&apos;s Homemade Inspiration and also as UI/UX designer in Ngwe Sann Yaung Sugarcane Factory&apos;s dashboard website</Alignment>

            </div>
        </div>
        <div className=" pt-5 pb-12">
            <h2 className=" text-3xl">Team Projects in Work</h2>
            <div className="mt-5 grid gap-3">
             <Alignment place={'THtwin Innovation Lab'} year={'2019'} pj={'https://shaniit.org/'} ttl={`Shan Institute of Technology `}>
               A website for Technology community of Shan Nation in Myanmar
             </Alignment>
             <Alignment place={'In Nawphire Company'} year={'2020'} pj={'https://www.eshmi.com/'} ttl={`Eisan Homemade Inspiration `}>
               Food blog for foodies by Ma Ei San
             </Alignment>
             <Alignment place={'In Nawphire Company'} year={'2022'}  ttl={`Pohmal Carrier Service's Agent Website `}>
               A website for the Delivery Company, you can&apos;t see this website because this includes privacies and it&apos;s a private website for the company
             </Alignment>
             <Alignment place={'In Nawphire Company'} year={'2020'} ttl={`Ngwe San Yaung sugarcane Dashboard `}>
             A dashboard for Sugarcane Factory, you can&apos;t see this website because this includes privacies and it&apos;s a private website for the Factory
             </Alignment>

            </div>
        </div>
      </div>
    </div>
        
    </div>
  )
}

export default ResumePage