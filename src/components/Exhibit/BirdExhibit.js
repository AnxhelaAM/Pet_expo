import React from 'react';
import ExhibitPage from './ExhibitPage';
import BirdImage1 from '../../Assets/Images/bird1.jpg';
import BirdImage2 from '../../Assets/Images/bird2.jpg';
import BirdImage3 from '../../Assets/Images/bird3.jpg';
import BirdImage4 from '../../Assets/Images/bird4.jpg';

const BirdExhibit = () => {

  const exhibitProps = {
    title: "Welcome to Bird Expo 2024",
    date: "5 & 6 August | 9AM - 7PM",
    venue: "Suntec Convention — Hall 601 & 602",
    includedItems: [
      { title: "Bird Watching Tours", description: "Join guided tours to observe local and exotic bird species.", image: "https://via.placeholder.com/300" },
      { title: "Conservation Talks", description: "Learn about bird conservation efforts and how you can help.", image: "https://via.placeholder.com/300" },
      { title: "Aviary Exhibition", description: "Explore interactive aviaries showcasing diverse bird habitats.", image: "https://via.placeholder.com/300" },
      { title: "Feathered Friends Market", description: "Shop for bird-related products, from toys to accessories.", image: "https://via.placeholder.com/300" }
    ],
    images: [BirdImage1, BirdImage2, BirdImage3, BirdImage4],
    description: "The Bird Expo is a unique event for bird enthusiasts featuring a wide range of activities and exhibitions. Visitors can participate in bird watching tours, attend conservation talks, and explore interactive aviaries showcasing diverse bird habitats. Additionally, the Feathered Friends Market offers a variety of bird-related products and accessories. Whether you're a seasoned birder or simply curious about birds, the Bird Expo promises an enriching experience for all.The Bird Expo is a unique event for bird enthusiasts featuring a wide range of activities and exhibitions. Visitors can participate in bird watching tours, attend conservation talks, and explore interactive aviaries showcasing diverse bird habitats. Additionally, the Feathered Friends Market offers a variety of bird-related products and accessories. Whether you're a seasoned birder or simply curious about birds, the Bird Expo promises an enriching experience for all."
  };

  return <ExhibitPage {...exhibitProps} />;
};

export default BirdExhibit;
