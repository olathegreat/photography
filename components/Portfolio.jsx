import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'> Photos</h1>

        <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src="/images/mainbowl.jpg" width="677" height="451" layout="responsive" alt="/"/>
            </div>

            <div className='w-full h-full'>
                <Image src="/images/sport.jpg" width="215" objectFit="cover" height="217" layout="responsive" alt="/" />
            </div>

            <div className='w-full h-full'>
                <Image src="/images/sports.jpg"  width="215" objectFit="cover" height="217"  layout="responsive" alt="/"/>
            </div>

            <div className='w-full h-full'>
                <Image src="/images/ict.jpg"  width="215" objectFit="cover" height="217"  layout="responsive" alt="/"/>
            </div>
            <div className='w-full h-full'>
                <Image src="/images/sport.jpg"  width="215" objectFit="cover" height="217"  layout="responsive" alt="/"/>
            </div>
        </div>
    </div>
  )
}

export default Portfolio