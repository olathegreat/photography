import React from 'react'
// import image1 from "../public/instaimages/academics.jpg"
import image2 from "../public/instaimages/roadone.jpg"
// import image3 from "../public/instaimages/museum.jpg"
import image4 from "../public/instaimages/oldamphi.jpg"
import image5 from "../public/instaimages/moremi.jpg"
// import image6 from "../public/instaimages/healthsciences.jpg"
import Instagramimg from './Instagramimg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Twitter</p>
        <p className='pb-4'>@olaniran3rd</p>
        
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-2 p-4'>
           <Instagramimg image={image2}/>
           <Instagramimg image={image5}/>
           <Instagramimg image={image2}/>
           <Instagramimg image={image5}/>
           <Instagramimg image={image2}/>
           <Instagramimg image={image5}/>
        </div>
       
    </div>
  )
}

export default Instagram