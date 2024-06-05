import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBook } from '@fortawesome/free-solid-svg-icons';
import './AboutDropDown.css';

const AboutDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const sections = [
    { name: 'Our Story', path: '/about/our-story', icon: faBook },
    { name: 'Our Team', path: '/about/our-team', icon: faUsers },
  ];

  const handleSelection = (path) => {
    setIsOpen(false);
    navigate(path);
  };
  const handleOutsideClick = (event) => {
    if (!event.target.closest('.about-dropdown')) {
      setIsOpen(false);
    }
  };
  React.useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('click', handleOutsideClick);
    } else {
      document.body.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative about-dropdown">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="about text-white"
      >
        About Us
      </button>
      {isOpen && (
        <div className="absolute bg-white mt-2 p-2 rounded-lg shadow-lg">
          {sections.map((section, index) => (
            <button 
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center w-full text-left"
              onClick={() => handleSelection(section.path)}
            >
              <FontAwesomeIcon icon={section.icon} className="mr-2" />
              {section.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutDropdown;
