import ContactForm from '@/components/Contact/ContactForm'
import ContactHero from '@/components/Contact/ContactHero'
import ContactInfo from '@/components/Contact/ContactInfo'
import React from 'react'

const page = () => {
  return (
    <div>
      <ContactHero/>
      <ContactInfo/>
      <ContactForm/>
    </div>
  )
}

export default page
