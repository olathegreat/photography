import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import React from 'react'

const contact = () => {
  return (
    <div>
        <Hero heading="Contact" message="Submit the form below to contact me "/>
        <Contact/>
    </div>
  )
}

export default contact