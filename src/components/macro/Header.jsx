// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="bg-color-primary flex justify-between items-center p-4">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-color-light">Shop</span>
          <span className="text-color-secondary">Sphere</span>
        </h1>
      </div>
      <div className="flex items-center justify-center relative">
        <label className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className="md:w-[50vw] w-[40vw] py-2 px-20 rounded-md pl-2"
          />
          {searchTerm.length === 0 && (
            <button>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 20l-4.58-4.58a8 8 0 10-1.42 1.42L18 20z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          )}
        </label>
      </div>
      <div>
        <button className="text-2xl text-color-light font-bold py-2 px-4 rounded-md">Login</button>
      </div>
    </header>
  );
};

export default Header;
