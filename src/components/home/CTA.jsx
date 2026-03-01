import React from 'react'

export default function CTA() {
  return (
    <div className='text-center '>
       <h2 className="text-2xl md:text-3xl mt-10 ">
            <span style={{ fontFamily: "Session1" }}>Capturing </span> Most
            Beautiful Moments -
            <span className="text-red-700" style={{ fontFamily: "Session2" }}>
              {" "}
              Professional Wedding Portrait Photography
            </span>
        </h2>
      <div className='flex justify-center mt-4'> 
        <a href="https://wa.me/919116419165" className='inline-flex items-center px-4 py-2 text-sm rounded-full bg-red-800 text-white hover:bg-gray-800 transition no-underline'>
          Book a Seassion
        </a>
      </div>
    </div>
  )
}
