import React from 'react';
import { Link } from 'react-router-dom';
import dog from '../../Assets/Images/animals1.jpeg';
import './Home.css';

const Home = () => {
  return (
    <div className='info-section'>
      <div className="left-section">
        <img src={dog} alt="Expo" className="expo-image" />
      </div>
      <div className="right-section">
        <div className='dots'>...............................</div>
        <h1>Be part of the upcoming expo</h1>
        <h2>TIRANA PETS EXPO</h2>
        <Link to="/attend" className="attend-button">
          Attend
        </Link>
        <div className='dots'>...............................</div>
        <p>SAVE THE DATE</p>
        <p className="date">12.06.2025</p>
        <p className="place"> "Skenderbeg Square" ,Tirana,ALBANIA</p>
      </div>
    </div> 
  )
}

export default Home;
