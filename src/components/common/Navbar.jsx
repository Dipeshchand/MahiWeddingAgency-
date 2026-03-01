import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="  
 fixed top-0 left-0 w-full z-[100]
  bg-white/20 
  backdrop-blur-lg
  border-b border-white/30
  shadow-sm
  "
  >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className=" text-xl tracking-wide font-semibold text-black"
        >
          Mahi Photography
        </Link>
                                                                                                                                        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm uppercase tracking-widest text-black font-semibold">
          <li><Link to="/" className="hover:text-blue-700 transition">Home</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-700 transition">Gallery</Link></li>
          <li><Link to="/WeddingFilms" className="hover:text-blue-700 transition">Wedding Films</Link></li>
          {/* <li><Link to="/Portfolio" className="hover:text-blue-700 transition">fotoowl Portfolio</Link></li> */}
          <li><Link to="/PortfolioUpload" className="hover:text-blue-700 transition">Portfolio</Link></li>
          <li><Link to="/about" className="hover:text-blue-700 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-700 transition">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
     <div
  className={`
    md:hidden
    absolute top-20 left-0 w-full
    bg-white/10 backdrop-blur-md bg-opacity-95 text-black
    px-6 py-15 space-y-6 uppercase tracking-widest text-sm
    transform transition-all duration-500 ease-in-out
    ${isOpen 
      ? "opacity-100 translate-y-0 pointer-events-auto" 
      : "opacity-0 -translate-y-5 pointer-events-none"}
  `}
>
  <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
  <Link to="/gallery" onClick={() => setIsOpen(false)} className="block">Gallery</Link>
  <Link to="/WeddingFilms" onClick={() => setIsOpen(false)} className="block">Wedding Films</Link>
  {/* <Link to="/Portfolio" onClick={() => setIsOpen(false)} className="block">fotoowl Portfolio</Link> */}
  <Link to="/PortfolioUpload" onClick={()=>setIsOpen(false)} className="block">Portfolio</Link>
  <Link to="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
  <Link to="/contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
</div>
    </header>
  );
};

export default Navbar;


