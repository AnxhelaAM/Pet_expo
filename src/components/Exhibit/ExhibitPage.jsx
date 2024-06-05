import React from 'react';
import Card from './Card';

const ExhibitPage = ({ title, date, venue, includedItems, images, description }) => {
  const handleReserveTickets = () => {
    window.location.href = 'mailto:someone@example.com?subject=Reserve Tickets&body=I would like to reserve tickets for the exhibition.';
  };

  return (
    <div className="exhibit-page-container bg-orange-200 p-5">
      <h2 className="text-3xl font-semibold mb-4 mt-5">{title}</h2>
      <p className="mb-4">{date}</p>
      <p className="mb-8">{venue}</p>
      <h2 className="text-3xl font-semibold mb-4 mt-5 text-brown-300">What will be included:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {includedItems.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} image={item.image} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4 mt-8">
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`foto ${index}`} className="object-cover w-full h-full" />
          ))}
        </div>
        
        <div className="bg-red-100 p-5 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Who can attend?</h2>
          <p className="text-gray-600 p-4">{description}</p>
          <button onClick={handleReserveTickets} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-8">
            Reserve Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExhibitPage;
