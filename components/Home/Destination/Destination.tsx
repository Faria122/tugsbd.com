import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import ProjectSlide from './ProjectSlide';




const Destination = () => {
  return (
    <div className="w-[80%] mx-auto">
      {/* Section Heading */}
     <SectionHeading heading="Exploring our Projects"/>
     {/* Section Content */}
     <div className="mt-14 w-[80%] mx-auto">
      {/* Slider */}
      <ProjectSlide/>
     </div>
    </div>
  )
}

export default Destination;
