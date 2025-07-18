import React from 'react'
import { BsEnvelopePaper } from 'react-icons/bs'

const NewsLetter = () => {
    return (
        <div className="bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col">
            <BsEnvelopePaper className="w-16 h-16 mt-20 text-white" />
            <h1 className="text-lg sm:text-xl md:text-2xl text-white font-semibold mt-10 tracking-widest">
                Your Requirements starts Here.
            </h1>
            <p className="mt-3 text-white text-xs sm:text-sm">
                Sign up and we&apos;ll send the best deals to you.
            </p>
            {/* subscription input and button */}
            <div className="w-full">
                <input
                    type="text"
                    className="px-6 py-3.5 bg-white mt-8 w-full max-w-lg block mx-auto rounded-lg outline-none"
                    placeholder="Email Us"
                />
                <button className="px-6 py-3.5 bg-white hover:bg-blue-950 transition-all duration-200 mt-8 w-full max-w-md block mx-auto rounded-lg outline-none">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default NewsLetter;
