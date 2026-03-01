import React from 'react'

import img1 from "../assets/images/g1.jpg";
import img2 from "../assets/images/g2.jpg";
import img3 from "../assets/images/g3.jpg";
import img4 from "../assets/images/g4.jpg";
import img5 from "../assets/images/g5.jpg";
import img6 from "../assets/images/g6.jpg";
import img7 from "../assets/images/g7.jpg";
import img8 from "../assets/images/g8.jpg";
import img9 from "../assets/images/g9.jpg";
import img10 from "../assets/images/g10.jpg";
import img11 from "../assets/images/g11.jpg";
import img12 from "../assets/images/g12.jpg";
import img13 from "../assets/images/g13.jpg";
import img14 from "../assets/images/g14.jpg";
import img15 from "../assets/images/g15.jpg";
import img16 from "../assets/images/g16.jpg";
import img17 from "../assets/images/g17.jpg";
import img18 from "../assets/images/g18.jpg";
import img19 from "../assets/images/g19.jpg";
// ------------------
import img20 from "../assets/images/im1.jpg";
import img21 from "../assets/images/im2.jpg";
import img22 from "../assets/images/im3.jpg";
import img23 from "../assets/images/im4.jpg";
import img24 from "../assets/images/im5.jpg";
import img25 from "../assets/images/im6.jpg";
import img26 from "../assets/images/im7.jpg";
import img27 from "../assets/images/im8.jpg";
import img28 from "../assets/images/im9.jpg";
import img29 from "../assets/images/im10.jpg";
import img30 from "../assets/images/im11.jpg";
import img31 from "../assets/images/im12.jpg";
import img32 from "../assets/images/im13.jpg";
import img33 from "../assets/images/im14.jpg";
import img34 from "../assets/images/im15.jpg";

const images = [
  img1, img9,img10,
  img2,img3,img7,img8,
  ,img11,img12,img13,img4,img5,img6,
  img14,img15,img16,img17,
  img18, img19 , img20, img21, img22, img23, img24, img25, 
  img26, img27, img28, img29, img30, img31, img32, img33, img34
]

export default function Gallery() {
  return (

    <div className='mt-32'>
      <div className='flex justify-center  mb-10'>
        <span className="relative text-3xl   bg-gradient-to-r  to-red-400" style={{ fontFamily: "Session2" }}>
          Our Gallery
        </span>
      </div>

    <div  className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 [column-gap:0px]">
        {images.map((img, i)=>(
          <div key={i}>
            <img src={img} alt="Gallery" 
            className="w-full object-cover "
            />
          </div>
        ))}
    </div>
    </div>
  )
}
