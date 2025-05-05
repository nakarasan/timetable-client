import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as routes from "constants/routes";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    console.log("Logged Out");
    setShowMenu(false); 
    navigate(routes.LOGIN);
  };

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-white shadow px-4 py-2 flex justify-between items-center">
      <div className="text-lg font-bold">LOGO</div>

      
      <div className="relative" ref={menuRef}>
        <div
          className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        ></div>

        {showMenu && (
          <div className="absolute right-0 mt-2 w-24 bg-white shadow-lg rounded-md border">
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
