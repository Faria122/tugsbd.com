import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';

import WhyChooseCard from './WhyChooseCard';

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      {/* Section Heading */}
      {/*<SectionHeading heading="Why Choose Us"/>*/}
      <div className="text-center w-[90%] md:w-[70%] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Choose Us
        </h2>
        <p className="mt-6 text-gray-600 text-base md:text-lg leading-7">
          At TUGSBD, we deliver dependable industrial engineering and
          construction solutions with a strong focus on quality, safety and
          precision. From storage tanks and piping systems to complex
          industrial infrastructure, our experienced team is committed to
          delivering every project to a high standard.
        </p>
      </div>
        {/* Why choose card */}
        <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-16">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <WhyChooseCard image="/images/jett.svg" title="Quality & Precision" content='Delivering reliable engineering solutions with attention to every detail.'/>
        </div>
        <div 
        data-aos="fade-up" 
        data-aos-anchor-placement="top-center" 
        data-aos-delay="150">
            <WhyChooseCard image="/images/safety.svg" title="Safety & Compliance" content='Putting safety, quality standards and responsible execution at the heart of every project' />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center"  data-aos-delay="300">
            <WhyChooseCard image="/images/project.svg" title="Reliable Project Delivery" content='From planning to completion, we focus on efficient execution and dependable results.'/>
        </div>
      </div>
    </div>
  )
}

export default WhyChoose
