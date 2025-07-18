import AboutHero from '@/components/About/AboutHero';
import InfoCards from '@/components/About/InfoCards';
import MissionVision from '@/components/About/MissionVision';
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <AboutHero/>
      <MissionVision/>
      <InfoCards/>
    </div>
  )
}

export default AboutPage;
