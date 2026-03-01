import React from "react"
import { motion } from "framer-motion"
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
}

export default function Intro() {
  return (
    <div className="">

         <div className="fixed right-4  top-1/4  z-50 flex flex-col gap-4 mt-130">

        <a
          href="https://wa.me/919116419165"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaWhatsapp size={22} />
        </a>

        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="tel:+919116419165"
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaPhoneAlt size={20} />
        </a>
      </div>
      <div
        className="flex justify-center mt-10 text-4xl tracking-wide"
        style={{ fontFamily: "Seasons9", wordSpacing: "0.5rem" }}
       >
       <span className=" bg-gradient-to-r  to-red-400">Wedding</span>
          <span className="text-red-600 ml-2">Films</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 mt-10 mb-10">
        {["xE9Ox1xsHys", "_3P2pG17Ptc", "4JjiJWF1q1Q", "n2gAciolcLY"].map((id) => (
          <motion.div
            key={id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <iframe
              loading="lazy"
              src={`https://www.youtube.com/embed/${id}`}
              className="w-full aspect-video rounded-lg"
              allowFullScreen
            />
          </motion.div>
        ))}
      </div>

    </div>
  )
}
