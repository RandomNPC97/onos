import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import HamburgerMenu from "./Hamburger";
import { AiOutlineSearch } from "react-icons/ai"; // Icon for mobile search
import { FaHome, FaUser, FaQuestionCircle, FaShoppingCart } from "react-icons/fa"; // Icons for nav links

const navlinks = [
  { id: 1, path: "/", name: "Home", icon: <FaHome /> },
  { id: 2, path: "/help", name: "Help", icon: <FaQuestionCircle /> },
  { id: 3, path: "/cart", name: "Cart", icon: <FaShoppingCart /> },
];

function Navbar(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform search action here
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      {/* Navbar */}
      <header className="bg-primary_theme text-black shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-2 px-6 md:px-10">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">
              <img src="./assets/logo.avif" alt="Logo" className="h-14 inline" />
            </Link>
          </div>


          {/* Hamburger Menu and Mobile Search Icon for Small Screens */}
          <div className="sm:hidden flex items-center space-x-4">
            <HamburgerMenu propData={navlinks} />
          </div>

          {/* Navigation Links for Larger Screens */}
          <div className="hidden sm:flex items-center space-x-8 w-full justify-end">
            <nav className="space-x-8 flex items-center">
              {navlinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-400 text-lg font-bold flex items-center space-x-2"
                      : "text-lg hover:text-blue-400 transition duration-300 flex items-center space-x-2"
                  }
                >
                  {item.icon}
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

      </header>
    </>
  );
}

export default Navbar;
