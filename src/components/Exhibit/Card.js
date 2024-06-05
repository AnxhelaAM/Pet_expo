import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;