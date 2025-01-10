import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react';
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from 'react-router-dom';
import { FaAngleDoubleRight, FaHome, FaUser, FaQuestionCircle, FaShoppingCart } from "react-icons/fa";

const HamburgerMenu = ({ propData }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'visible'; // Enable scrolling
    }

    // Cleanup function to ensure scrolling is enabled when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setIsOpen(false);
      }}
    >
      <div className="overflow-auto text-black">
        <Hamburger 
          toggled={isOpen} 
          toggle={setIsOpen} 
          size={32}
          rounded
          distance="sm"
          color="black"
        />
        {isOpen && (
          <div className="fixed z-10 hamburger-style h-full bg-primary_theme w-[70%] top-0 right-0 p-4 overflow-clip" data-aos="slide-left">
            <div className="w-full flex justify-start pr-4">
              <FaAngleDoubleRight className="hover:cursor-pointer text-white hover:scale-105" onClick={handleToggle} size={36} />
            </div>
            <div className="grid place-content-start gap-y-5 pt-10 pb-10">
              {propData.map((item) => (
                <NavLink
                  to={item.path}
                  key={item.id}
                  className={({ isActive }) =>
                    `text-lg transition transform ease-in-out delay-75 border-b-2 border-transparent ${
                      isActive ? "text-black border-b-black" : "text-black hover:text-slate-600 hover:scale-110 hover:border-b-[#d4cfcc]"
                    }`
                  }
                >
                  <span className="flex items-center space-x-2">
                    {item.icon} {/* Render icon here */}
                    <span>{item.name}</span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default HamburgerMenu;
