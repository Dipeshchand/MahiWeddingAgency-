import React from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/im1.jpg";
import img14 from "../../assets/images/im14.jpg";
import img2 from "../../assets/images/im2.jpg";
import img3 from "../../assets/images/im3.jpg";
import img4 from "../../assets/images/im4.jpg";
import img5 from "../../assets/images/im5.jpg";
import img6 from "../../assets/images/im6.jpg";
import img7 from "../../assets/images/im7.jpg";
import img8 from "../../assets/images/im8.jpg";
import img9 from "../../assets/images/im9.jpg";
import img10 from "../../assets/images/im10.jpg";
import img11 from "../../assets/images/im11.jpg";
import img12 from "../../assets/images/im12.jpg";
import img13 from "../../assets/images/im13.jpg";

export default function GalleryPreview() {
  const navigate = useNavigate();

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img7,
    img8,
    img9,
    img6,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];

  let imageIndex = 0;

  return (
    <div className="w-full min-h-screen md:h-screen">
      <div
        className="
          grid
          grid-cols-3
          grid-rows-5
          md:grid-cols-5
          md:grid-rows-3
          w-full
          h-full
        "
      >
        {Array.from({ length: 15 }).map((_, i) => {
          // CENTER CELL
          if (i === 7) {
            return (
              <div
                key={i}
                className="flex items-center justify-center bg-white p-4"
              >
                <div className="text-center px-4 sm:px-0">
                  <h2
                    className="text-lg sm:text-xl md:text-3xl font-semibold leading-snug"
                    style={{ fontFamily: "Seasons9" }}
                  >
                    NOT JUST PICTURE
                  </h2>

                  <p
                    className="mt-2 text-sm sm:text-base md:text-lg"
                    style={{ fontFamily: "Seasons9" }}
                  >
                    It’s a Memory
                  </p>

                  <button
                    onClick={() => navigate("/gallery")}
                    className="
      mt-4
      px-4 py-2
      sm:px-6 sm:py-2.5
      bg-[#5A3F33]
      text-white
      rounded-full
      text-sm sm:text-base
      hover:opacity-90
      transition
    "
                  >
                    STEP IN
                  </button>
                </div>
              </div>
            );
          }

          const img = images[imageIndex++];

          return (
            <div key={i} className="overflow-hidden">
              <img
                src={img}
                alt="gallery"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
