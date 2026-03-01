import { useEffect } from "react";

export default function FotoowlGallery() {

  useEffect(() => {
    document.title =
      "Client Wedding Albums | 35 Frames Photography Bangalore";

    const metaDescription = document.querySelector(
      "meta[name='description']"
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore premium wedding albums by 35 Frames Photography, Bangalore. View full wedding galleries powered by FotoOwl."
      );
    }
  }, []);

  return (
    <div className="w-full min-h-screen pt-32 pb-10 px-4">

      {/* Page Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
          Client Wedding Albums
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Explore full wedding galleries powered by FotoOwl
        </p>
      </div>

      {/* IFRAME CONTAINER */}
      <div className="w-full h-[80vh] rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src="https://site.fotoowl.ai/pragatifilms"
          title="Pragati Films Wedding Albums"
          className="w-full h-full border-none "
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
}
