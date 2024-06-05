import React from 'react';
import ExhibitPage from './ExhibitPage';
import DogImage1 from '../../Assets/Images/dog1.jpg';
import DogImage2 from '../../Assets/Images/dog5.jpg';
import DogImage3 from '../../Assets/Images/dog3.jpg';
import DogImage4 from '../../Assets/Images/dog4.jpg';

const DogExhibit = () => {
  const exhibitProps = {
    title: "Welcome to Dog Expo 2024",
    date: "15 & 16 July | 9AM - 7PM",
    venue: "Suntec Convention — Hall 501 & 502",
    includedItems: [
      { title: "Training Workshops", description: "Learn dog training techniques from professional trainers.", image: "https://via.placeholder.com/300" },
      { title: "Adoption Event", description: "Find your new furry friend at our adoption drive.", image: "https://via.placeholder.com/300" },
      { title: "Dog Agility Show", description: "Watch amazing agility performances by trained dogs.", image: "https://via.placeholder.com/300" },
      { title: "Product Exhibition", description: "Explore the latest products and accessories for your dog.", image: "https://via.placeholder.com/300" }
    ],
    images: [DogImage1, DogImage2, DogImage3, DogImage4],
    description: "The Dog Expo is a premier event for dog lovers featuring various activities and exhibitions. It is open to all dog enthusiasts, including pet owners, trainers, breeders, and professionals. Attendees can participate in training workshops, watch exciting dog agility shows, and browse through a wide range of dog-related products and services. Whether you're looking to adopt a dog, improve your training skills, or simply enjoy the company of dogs, the Dog Expo has something for everyone.The Dog Expo is a premier event for dog lovers featuring various activities and exhibitions. It is open to all dog enthusiasts, including pet owners, trainers, breeders, and professionals. Attendees can participate in training workshops, watch exciting dog agility shows, and browse through a wide range of dog-related products and services. Whether you're looking to adopt a dog, improve your training skills, or simply enjoy the company of dogs, the Dog Expo has something for everyone."
  };

  return <ExhibitPage {...exhibitProps} />;
};

export default DogExhibit;
