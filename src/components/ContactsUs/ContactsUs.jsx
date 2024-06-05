import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-700 bg-blue-100 p-8 rounded-lg shadow-lg mx-auto my-4">
          <h1 className="text-2xl font-bold mb-4">Your Personal Contact for Pet Expo 2024</h1>
          <p className="text-gray-700">
            Please don't hesitate to contact us if you have any other questions or requests.
          </p>
        </div>
      </div>

      <div className="flex justify-around p-8 text-center">
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Exhibitor"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Contact for Exhibitors</div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
              <div>
                <p className="text-gray-900 leading-none">John Doe</p>
                <p className="text-gray-600 ml-8">john@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
              <p className="text-gray-600 ml-8">(123) 456-7890</p>
            </div>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Visitor"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Contact for Visitors</div>
            <div className="flex items-center mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
              <div>
                <p className="text-gray-900 leading-none">Jane Smith</p>
                <p className="text-gray-600 ml-8">jane@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
              <p className="text-gray-600 ml-8">(987) 654-3210</p>
            </div>
          </div>
        </div>
        <div className="max-w-md rounded overflow-hidden shadow-lg">
          <img
            className="w-full h-64 object-cover"
            src="https://via.placeholder.com/300x200"
            alt="Media"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Contact for Media</div>
            <div className="flex items-center mb-2">
               <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2" />
              <div>
                <p className="text-gray-900 leading-none">Michael Johnson</p>
                <p className="text-gray-600 ml-8">michael@example.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2" />
              <p className="text-gray-600 ml-8">(555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
