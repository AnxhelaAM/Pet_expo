import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faDove } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnimalIcon, setSelectedAnimalIcon] = useState(null);
  const animals = ['dogs', 'cats', 'birds']; 
  const animalIcons = [faDog, faCat, faDove];                         
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnimalSelection = (animal, index) => {
    setSelectedAnimalIcon(animalIcons[index]);
    setIsOpen(false);
    navigate(`/animals/${animal.toLowerCase()}`);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.relative') && !event.target.closest('a')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('click', handleOutsideClick);
    } else {
      document.body.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!location.pathname.startsWith('/animals')) {
      setSelectedAnimalIcon(null); 
    }
  }, [location.pathname]);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="menu text-white focus:outline-none "
      >
        Menu {selectedAnimalIcon && <FontAwesomeIcon icon={selectedAnimalIcon} className="ml-2" />}
      </button>
      {isOpen && (
        <div className="menu-dropdown absolute bg-white mt-2 p-2 rounded-lg shadow-lg">
          {animals.map((animal, index) => (
            <button 
              key={index}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 flex items-center w-full text-left menu-item"
              onClick={() => handleAnimalSelection(animal, index)}
            >
              <FontAwesomeIcon icon={animalIcons[index]} className="mr-2" />
              {animal}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
