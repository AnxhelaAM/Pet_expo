import React from 'react';
import ExhibitPage from './ExhibitPage';
import Image1 from '../../Assets/Images/cat4.jpg';
import Image2 from '../../Assets/Images/cat5.jpg';
import Image3 from '../../Assets/Images/cat3.jpg';
import Image4 from '../../Assets/Images/cat6.jpg';

const CatExhibit = () => {
  const exhibitProps = {
    title: "Welcome to Asia Cat Expo 2024",
    date: "29 & 30 June | 10AM - 8PM",
    venue: "Suntec Convention — Hall 403 & 404",
    includedItems: [
      { title: "Talks", description: "Learn cat care from experts...", image: "https://via.placeholder.com/300" },
      { title: "Adoption Drive", description: "Consider making a positive impact...", image: "https://via.placeholder.com/300" },
      { title: "Cat Grooming Competition", description: "Watch talented groomers transform cats...", image: "https://via.placeholder.com/300" },
      { title: "Product Showcase", description: "Shop and support 60+ amazing brands...", image: "https://via.placeholder.com/300" }
    ],
    images: [Image1, Image2, Image3, Image4],
    description: " The Asia Cat Expo is a global event for cat lovers featuring workshops, exhibitions, and activities. It is open to all, including families, professionals and pet owners. Visitors can learn from experts on cat health and nutrition, animal welfare organizations, and breeders. Whether you are a cat enthusiast or guardian, breeder, or simply curious about cats, Asia Cat Expo is a must-attend event!  The Asia Cat Expo is a global event for cat lovers featuring workshops, exhibitions, and activities. It is open to all, including families, professionals and pet owners. Visitors can learn from experts on cat health and nutrition, animal welfare organizations, and breeders. Whether you are a cat enthusiast or guardian, breeder, or simply curious about cats, Asia Cat Expo is a must-attend event..."
  };

  return <ExhibitPage {...exhibitProps} />;
};

export default CatExhibit;
