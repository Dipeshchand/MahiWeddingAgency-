export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* LEFT SECTION */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide mb-4">
              Mahi Wedding STUDIO
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Address: Sec -14 near Bank of Baroda, Indira Nagar,
              <br />
              Bihar 
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-4">
              <i className="fab fa-facebook text-lg cursor-pointer hover:text-gray-400"></i>
              <i className="fab fa-instagram text-lg cursor-pointer hover:text-gray-400"></i>
            </div>
          </div>

          {/* CENTER SECTION */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide mb-4">
              Bihar · Patna
            </h3>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Portfolio</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* RIGHT SECTION */}
          <div>
            <p className="mb-2 text-gray-300">
              +91 9116419165 (Mahi)
            </p>
            <p className="mb-2 text-gray-300">
              +91 83182536 (Alok )
            </p>
            <p className="text-gray-300">
              mahistudio7080@gmail.com
            </p>
          </div>

        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Picture Perfect Studio
        </div>

      </div>
    </footer>
  );
}