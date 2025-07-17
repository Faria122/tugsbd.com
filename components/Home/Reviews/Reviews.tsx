import React from 'react'
import { FaStar } from 'react-icons/fa6';
import ReviewSlider from './ReviewSlider';

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
        <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Text Content */}
            <div>
                <h1 className="text-2xl font-semibold text-white">
                    What our customer are saying about us?
                </h1>
                <p className="mt-6 text-gray-200">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Debitis accusamus ad, quam tenetur, 
                    alias totam ipsum voluptatem ab hic soluta facilis a illo, 
                    aut commodi laborum vitae omnis quisquam iusto.
                </p>
                {/* Ratings */}
                <div className="mt-6 flex items-center space-x-6">
                    <div>
                        <p className="text-2xl font-bold text-white"></p>
                        <p className="text-white mb-2"></p>
                        <div className="flex items-center">
                            <FaStar className="text-white"/>
                            <FaStar className="text-white"/>
                            <FaStar className="text-white"/>
                            <FaStar className="text-white"/>
                            <FaStar className="text-white"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider */}
            <div className="overflow-hidden">
                <ReviewSlider />
            </div>

        </div>
    </div>
  )
}

export default Reviews;
