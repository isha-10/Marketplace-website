"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingBag, FaBars, FaTimes, FaChevronDown, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useCart } from '@/app/context/CartContex';

interface DropdownProps {
  items: { label: string; href: string }[];
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 bg-black border rounded-md py-2 min-w-[200px] z-50">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block px-4 py-2 text-white hover:bg-[#FF9F0D] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { cart } = useCart(); // Access the cart from the context

  const handleDropdownHover = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const dropdownMenus = {
    about: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Chef', href: '/chef' },
    ],
    pages: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Sign up', href: '/signup' },
      { label: '404 Error', href: '/404error' },
      { label: 'Sign in', href: '/signin' },
    ],
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-col items-center p-4 bg-black">
      <div className="flex items-center justify-between w-full">
        <span className="text-yellow-500 font-bold text-2xl flex-grow text-center">
          Food<span className="text-white">tuck</span>
        </span>
        <div className="md:hidden flex gap-5">
          <Link href="/cart" className="relative hover:text-yellow-500 text-white">
            <FaShoppingCart className="ml-4 text-white cursor-pointer hover:text-yellow-500" />
            {/* Cart Item Count Badge */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes className="text-white" /> : <FaBars className="text-white" />}
          </button>
        </div>
      </div>
      {/* Main Navigation for Desktop */}
      <div className={'hidden md:flex flex-row items-center justify-around w-full p-2 transition-all duration-300 ease-in-out'}>
        <div className="flex items-center space-x-6 text-base font-normal">
          <Link href="/" className='hover:text-yellow-500 text-white'>
            Home
          </Link>
          <Link href="/menu" className='hover:text-yellow-500 text-white'>
            Menu
          </Link>
          <Link href="/blog" className='hover:text-yellow-500 text-white flex items-center'>Blog</Link>

          {/* Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover('pages')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className='hover:text-yellow-500 text-white flex items-center'>
              Pages <FaChevronDown className='ml-1 text-xs' />
            </button>
            <Dropdown items={dropdownMenus.pages} isOpen={activeDropdown === 'pages'} />
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownHover('about')}
            onMouseLeave={handleDropdownLeave}
          >
            <button className='hover:text-yellow-500 text-white flex items-center'>
              About <FaChevronDown className='ml-1 text-xs' />
            </button>
            <Dropdown items={dropdownMenus.about} isOpen={activeDropdown === 'about'} />
          </div>

          <Link href="/shop" className='hover:text-yellow-500 text-white flex items-center'>Shop</Link>
          <Link href="/contact" className='hover:text-yellow-500 text-white'>
            Contact
          </Link>
        </div>

        <div className="flex items-center mt-4 md:mt-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none"
              spellCheck={false}
              data-ms-editor="true"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-500" />
          </div>
          <Link href="/cart" className="relative hover:text-yellow-500 text-white">
            <FaShoppingCart className="ml-4 text-white cursor-pointer hover:text-yellow-500" />
            {/* Cart Item Count Badge */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <Link href="/signin" className='hover:text-yellow-500 text-white'>
            <FaUser className="ml-4 text-white cursor-pointer hover:text-yellow-500" />
          </Link>
          <Link href="/shop" className='hover:text-yellow-500 text-white'>
            <FaShoppingBag className="ml-4 text-white cursor-pointer hover:text-yellow-500" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden w-full transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col space-y-4 mt-4">
          <Link href="/" className='hover:text-yellow-500 text-white'>
            Home
          </Link>
          <Link href="/menu" className='hover:text-yellow-500 text-white'>
            Menu
          </Link>
          <Link href="/blog" className='hover:text-yellow-500 text-white flex items-center'>Blog</Link>

          {/* Mobile Dropdowns */}
          {Object.entries(dropdownMenus).map(([key, items]) => (
            <div key={key} className="space-y-2">
              <button
                onClick={() => setActiveDropdown(activeDropdown === key ? null : key)}
                className='hover:text-yellow-500 text-white flex items-center justify-between w-full'
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                <FaChevronDown className={`text-xs transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === key && (
                <div className="pl-4 space-y-2">
                  {items.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block text-gray-300 hover:text-yellow-500"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/shop" className='hover:text-yellow-500 text-white flex items-center'>Shop</Link>

          <Link href="/contact" className='hover:text-yellow-500 text-white'>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;