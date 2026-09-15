import img from "../assets/img1.png";
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
  

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center h-16 w-full bg-black text-white px-4">
      <div className="flex flex-start items-center h-20 w-20">
        <img className="h-full w-full object-contain" src={img} alt="Logo" />
      </div>

      <div className="hidden md:flex flex-row justify-center items-center h-12 w-18 sm:h-15  sm:w-20 mr-2">
        <ul className="flex flex-row  gap-4 md:gap-10 items-center text-mdfont-serif">
          <li><Link to="/" className="text-gray-300 hover:text-white text-sm lg:text-base">Home</Link></li>
          <li><Link to="/about" className="text-gray-300 hover:text-white text-sm lg:text-base">About</Link></li>
          <li><Link to="/reservations" className="text-gray-300 hover:text-white text-sm lg:text-base">Reservations</Link></li>
          <li>
            {user ? (
              <button onClick={handleLogout} className="text-gray-300 hover:text-white text-sm lg:text-base cursor-pointer">
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-gray-300 hover:text-white text-sm lg:text-base">Login</Link>
            )}
          </li>
          <li><Link to="/menu" className="text-gray-300 hover:text-white text-sm lg:text-base">Menu</Link></li>

        </ul>
      </div>

      <button className="md:hidden hover: text-white cursor-pointer " onClick={() => setIsMenuOpen((prev) => !prev)}>
          {isMenuOpen ? <X  className="w-6 h-6 ease-in-out"/> 
          : 
          <Menu className="w-6 h-6 ease-in-out"/>}
        </button>

      <div className=" hidden md:flex flex-row justify-center items-center h-12 w-18 sm:h-15  sm:w-20 mr-4">
        <Link to="/orders">
          <button className="bg-black hover:cursor-pointer border-2 h-8 whitespace-nowrap border-[#B8925F] text-[#D8B27A] px-2 rounded-md">Order Online </button>
        </Link>
      </div>
      {isMenuOpen && (
        <div className="md:hidden w-25 p-2 z-50 m-0 bg-black backdrop-blur-lg border-gray-800 ease-in-out duration-300">
          <div >
            <ul className=" mt-20 flex flex-col">
              <li><Link to="/" className="text-gray-300 font-serif hover:text-white text-sm lg:text-base" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="text-gray-300 font-serif hover:text-white text-sm lg:text-base" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" className="text-gray-300 font-serif hover:text-white text-sm lg:text-base" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
              <li><Link to="/reservations" className="text-[#D8B27A] font-serif hover:text-white text-sm lg:text-base" onClick={() => setIsMenuOpen(false)}>Reservations</Link></li>
              <li><Link to="/menu" className="text-gray-300 font-serif hover:text-white text-sm lg:text-base" onClick={() => setIsMenuOpen(false)}>Menu</Link></li>
              <li>
                {user ? (
                  <button onClick={handleLogout} className="text-gray-300 font-serif hover:text-white text-sm lg:text-base cursor-pointer">
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="text-gray-300 font-serif hover:text-white text-sm lg:text-base" onClick={() => setIsMenuOpen(false)}>Login</Link>
                )}
              </li>
              <li><Link to="/orders" className="text-[#D8B27A] font-serif text-nowrap hover:text-white text-sm lg:text-base" onClick={() => setIsMenuOpen(false)}>Order Online</Link></li>
            </ul>
          </div>
        </div>
      )}


    </div>
  );
};

export default Navbar;
