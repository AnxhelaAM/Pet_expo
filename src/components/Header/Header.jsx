import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import AboutDropDown from '../AboutDropDown/AboutDropDown';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className='container max-w-none'>
        <div className='header'>
            <div className='icons'>
            <Link to="/home" className="icon-link">
            <FontAwesomeIcon icon={faPaw} size="2x" className="icon" />
          </Link>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" className='icon'/>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" className='icon'/>
        </a>

            </div>
            <div className='links '>
          <Link to="/">Home</Link>
          <DropdownMenu /> 
          <AboutDropDown />
          <Link to="/attend">Attend</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link to="/logout">Log out</Link>
        </div>
        </div>
   
    </div>
  )
}

export default Header
