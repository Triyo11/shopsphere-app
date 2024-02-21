// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const hiUserFontSize = 21;

const Header = () => {
  const searchRef = useRef();
  const navigate = useNavigate()

  const handleSearchProduct = (event) => {
    const searchKeyword = searchRef.current.value;
    if (event.key === "Enter" || event.type === "click") {
      navigate(`/search/${searchKeyword}`);
    }
  };

  const isLogin = true;

  if (isLogin) {
    return (
      <header className="bg-color-primary sticky top-0 flex justify-between items-center p-4">
        <div className="flex items-center">
          <NavLink to= {"/"} className="text-2xl font-bold">
            <span className="text-color-light">Shop</span>
            <span className="text-color-secondary">Sphere</span>
          </NavLink>
        </div>
        <div className="flex items-center justify-center relative">
          <label className="relative">
            <input
              type="text"
              value={searchRef}
              onKeyDown={handleSearchProduct}
              className="md:w-[50vw] w-[40vw] py-2 px-20 rounded-md pl-2"
            />
            <button onClick={handleSearchProduct}>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 20l-4.58-4.58a8 8 0 10-1.42 1.42L18 20z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </label>
        </div>
        <div>
        <button className="text-2xl text-color-light font-bold py-2 px-4 rounded-md ">
        <span style={{ fontSize: `${hiUserFontSize}px` }}>Hi, User</span>
        <ShoppingCartIcon className="ml-3" style={{ fontSize: 32 }}/>
        <AccountCircleIcon className="ml-3" style={{ fontSize: 32 }}/>
      </button>
        </div>
      </header>
    );
  } else {
    return (
      <header className="bg-color-primary sticky top-0 flex justify-between items-center p-4">
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
              ref={searchRef}
              onKeyDown={handleSearchProduct}
              className="md:w-[50vw] w-[40vw] py-2 px-20 rounded-md pl-2"
            />
            <button onClick={handleSearchProduct}>
              <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 20l-4.58-4.58a8 8 0 10-1.42 1.42L18 20z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </label>
        </div>
        <div>
          <NavLink to= {"/login"} className="text-2xl text-color-light font-bold py-2 px-4 rounded-md">Login</NavLink>
        </div>
      </header>
    );
  }
};

export default Header;
