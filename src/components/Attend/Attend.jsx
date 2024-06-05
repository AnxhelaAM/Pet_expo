import React from 'react';
import { Link } from 'react-router-dom';
import DogImage from './../../Assets/Images/dog2.jpg'
import CatImage from './../../Assets/Images/cat.jpg'
import BirdImage from './../../Assets/Images/bird.jpg'
import './Attend.css'; 

const Attend = () => {
  return (
    <div className="attend-pet-exhibition">
      <h1>Welcome to the Pet Exhibition!</h1>
      <p>Explore the wonderful world of pets at our exhibition. Choose a category to attend:</p>
      <div className="exhibition-grid">
        <Link to="/exhibition/dogs" className="exhibition-card">
          <img src={DogImage} alt="Dogs Exhibition" className="exhibition-image" />
          <div className="exhibition-info">
            <h2>Dogs Exhibition</h2>
            <p>Explore various breeds of dogs at our exhibition. Learn about their characteristics, behavior, and more!</p>
          </div>
        </Link>
        <Link to="/exhibition/cats" className="exhibition-card">
          <img src={CatImage} alt="Cats Exhibition" className="exhibition-image" />
          <div className="exhibition-info">
            <h2>Cats Exhibition</h2>
            <p>Discover the fascinating world of cats at our exhibition. Learn about different cat breeds, their habits, and more!</p>
          </div>
        </Link>
        <Link to="/exhibition/birds" className="exhibition-card">
          <img src={BirdImage} alt="Birds Exhibition" className="exhibition-image" />
          <div className="exhibition-info">
            <h2>Birds Exhibition</h2>
            <p>Experience the beauty of birds at our exhibition. Learn about various bird species, their habitats, and more!</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Attend;
