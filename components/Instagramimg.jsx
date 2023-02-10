import Image from 'next/image'
import React from 'react'
import { FaTwitter } from 'react-icons/fa'

const Instagramimg = ({image}) => {
  return (
    <div className='relative'>
        <Image  src={image} alt="/" className='w-full h-full' layout="responsive"/>

        {/* overlay */}

        <div className='flex absolute  justify-center items-center top-0 left-0 bottom-0 right-0 hover:bg-black/50 group'>
              <p className='text-gray-300 hidden group-hover:block'>
                       <FaTwitter size={30}/>
              </p>
        </div>
    </div>
  )
}

export default Instagramimg