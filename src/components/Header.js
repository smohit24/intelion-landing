import React, { useState } from 'react';
// Images
import Logo from '../assets/logo.svg';
// Icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquareText,
  BsArrowRight,
  BsChevronDown,
} from 'react-icons/bs';
// Link
import { Link } from 'react-scroll';

const Dropdown = ({ title, items, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-2 text-sm cursor-pointer">
        <Icon className="text-xs" />
        <span>{title}</span>
        <BsChevronDown className="text-xs" />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 w-40">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              smooth={true}
              spy={true}
              className="block px-3 py-1 text-xs text-black font-bold hover:bg-gray-200 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <header className="py-6 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with Reduced Left Margin */}
          <a href="#" className="ml-0">
            <img src={Logo} alt="Logo" className="h-12" />
          </a>
          {/* Nav inner */}
          <div className="flex space-x-4 text-sm text-black items-center">
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="cursor-pointer flex items-center space-x-1"
            >
              <BiHomeAlt className="text-xs" /> <span>Home</span>
            </Link>
            <Dropdown
              title="Services"
              icon={BsClipboardData}
              items={[
                { label: 'Web Development', link: 'web-development' },
                { label: 'SEO Optimization', link: 'seo-optimization' },
              ]}
            />
            <Link
              to="industries"
              activeClass="active"
              smooth={true}
              spy={true}
              className="cursor-pointer flex items-center space-x-1"
            >
              <BsBriefcase className="text-xs" /> <span>Industries</span>
            </Link>
            <Dropdown
              title="Market Research"
              icon={BsChatSquareText}
              items={[
                { label: 'Consumer Analysis', link: 'consumer-analysis' },
                { label: 'Competitor Study', link: 'competitor-study' },
              ]}
            />
            <Dropdown
              title="Company"
              icon={BiUser}
              items={[
                { label: 'About Us', link: 'about-us' },
                { label: 'Careers', link: 'careers' },
              ]}
            />
            <Dropdown
              title="Brands"
              icon={BsBriefcase}
              items={[
                { label: 'Brand A', link: 'brand-a' },
                { label: 'Brand B', link: 'brand-b' },
              ]}
            />
          </div>
          {/* Client Support Button with Arrow and Phone Number */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <a
                href="#support"
                className="flex items-center space-x-1 bg-blue-600 text-white font-bold px-3 py-1 text-xs rounded-md hover:bg-blue-700 transition"
              >
                <span>Client Support</span> <BsArrowRight className="text-xs" />
              </a>
              <span className="text-xs text-gray-700 font-bold mt-1">
                0612-2500971
              </span>
            </div>
            {/* Button */}
            <a href="#contact">
              <button className="btn btn-xs font-bold">Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
