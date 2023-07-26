import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Logo from "/img/logo.png"
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="flex justify-between items-center gap-[4.5rem] py-4 font-nav text-[24px]">
      <div className="md:hidden mx-3 flex">
        <AiOutlineMenu size="2rem" onClick={handleMobileMenuToggle} className="cursor-pointer" />
        <img src={Logo} alt="logo" className="cursor-pointer ml-[250px] w-[80px]" />
      </div>
      <div className={`hidden md:flex mx-auto gap-[4.5rem] ${showMobileMenu ? 'hidden' : 'flex'}`}>
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/product">Product</Link>
        </span>
        <span>
          <Link to="/"><img src={Logo} alt="logo" className="w-[100px]" /></Link>
        </span>
        <span ref={dropdownRef}>
          <span onClick={handleDropdownToggle} className="cursor-pointer">
            Blog
          </span>
          {showDropdown && (
            <div className="dropdown-content absolute grid grid-cols-1 bg-white rounded-sm border border-slate-700">
              <Link to="/blog/guide" className="hover:bg-slate-100 py-2 px-6">Guide</Link>
              <Link to="/blog/return-policy" className="hover:bg-slate-100 py-2 px-6">Return Policy</Link>
            </div>
          )}
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
      </div>
      {showMobileMenu && (
        <div className="mobile-menu bg-white rounded-sm border border-slate-700 z-[1] absolute top-16 left-0 ml-3">
          <div className="flex flex-col gap-4 py-4 px-6">
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <span ref={dropdownRef} className="w-[150px]">
              <span onClick={handleDropdownToggle} className="cursor-pointer">
                Blog
              </span>
              {showDropdown && (
                <div className="dropdown-content absolute grid grid-cols-1 bg-white rounded-sm border border-red-700">
                  <Link to="/blog/guide" className="hover:bg-slate-100 py-2 px-6">Guide</Link>
                  <Link to="/blog/return-policy" className="hover:bg-slate-100 py-2 px-6">Return Policy</Link>
                </div>
              )}
            </span>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}