/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useContext, useEffect } from "react"; // Remove duplicate import of useState
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../../../utils/myContext.js";
import { List, ListItem } from "@mui/material";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Cookies from "js-cookie";

const Header = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [isSearchInputActive, setIsSearchInputActive] = useState(false);
  const searchRef = useRef();
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(MyContext);

  const handleSearchProduct = (event) => {
    const searchKeyword = searchRef.current.value;
    if (event.key === "Enter" || event.type === "click") {
      navigate(`/search/${searchKeyword}`);
    }
  };

  const handleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  const handleOpenSearchInput = () => {
    setIsSearchInputActive(!isSearchInputActive);
  };

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userDataCookie");
    setUserData([]);
    navigate("/");
  };

  return (
    <>
      <div
        className={`font-poppins bg-color-light fixed left-0 top-0 z-30 h-screen w-full max-w-[18rem] px-4 pb-4 pt-0 shadow-xl shadow-blue-gray-900 ${
          isSidebarActive ? "translate-x-0" : "-translate-x-full"
        } duration-300`}
      >
        <div className="flex justify-between items-center mb-8 px-4 py-4 md:pt-5 pt-4">
          <div className="text-2xl font-bold">
            <span className="text-color-primary">Shop</span>
            <span className="text-color-secondary">Sphere</span>
          </div>
          <button onClick={handleSidebar}>
            <RxCross2 className="text-color-secondary hover:text-color-primary text-3xl pt-1" />
          </button>
        </div>
        <div
          className={`flex flex-col justify-center items-center gap-3 ${
            userData.length == 0 ? "hidden" : "block"
          }`}
        >
          <img
            src={userData.image}
            className="w-20 h-20 rounded-full object-cover"
          />
          <h2 className="text-lg font-semibold text-color-primary">
            Hi, {userData.name}
          </h2>
        </div>
        <List>
          <ListItem>
            <NavLink
              className="text-color-black text-xl font-bold hover:font-normal"
              to="/"
            >
              Home
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              className="text-color-black text-xl font-bold hover:font-normal"
              to={userData.length == 0 ? `/login` : `/cart`}
            >
              Cart
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              className="text-color-black text-xl font-bold hover:font-normal"
              to={userData.length == 0 ? `/login` : `/order`}
            >
              My Orders
            </NavLink>
          </ListItem>
          {userData.role_id === 2 && (
            <ListItem>
              <NavLink
                className="text-color-black text-xl font-bold hover:font-normal"
                to={
                  userData.length == 0
                    ? `/login`
                    : `/order-history/${userData.id}`
                }
              >
                Seller Transactions
              </NavLink>
            </ListItem>
          )}

          <ListItem>
            <NavLink
              className="text-color-black text-xl font-bold hover:font-normal"
              to={userData.length == 0 ? `/login` : `/profile`}
            >
              Profile
            </NavLink>
          </ListItem>
        </List>
        {userData.length == 0 ? (
          <button className="absolute bottom-10 right-0 left-0">
            <NavLink
              to={"/login"}
              className="text-color-secondary hover:text-color-accent2 text-xl font-bold"
            >
              Log in
            </NavLink>
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="absolute bottom-10 right-0 left-0"
          >
            <h2 className="text-color-secondary hover:text-color-accent2 text-xl font-bold">
              Log out
            </h2>
          </button>
        )}
      </div>
      <header className="bg-color-primary font-poppins sticky top-0 z-20 flex justify-between items-center py-4 md:px-20 px-10">
        <button onClick={handleSidebar}>
          <RxHamburgerMenu className="text-color-light text-2xl active:animate-ping" />
        </button>
        <NavLink to="/" className="text-2xl font-bold">
          <span className="text-color-light">Shop</span>
          <span className="text-color-secondary">Sphere</span>
        </NavLink>
        <button onClick={handleOpenSearchInput}>
          <FaMagnifyingGlass className="text-color-light text-2xl hover:-rotate-90 duration-300" />
        </button>
      </header>
      <div
        className={`font-poppins flex md:flex-row md:items-center flex-col md:gap-8 gap-2 items-center justify-center md:pt-2 pb-2 bg-color-secondary z-10 w-full md:h-30 h-28 fixed ${
          isSearchInputActive ? "translate-y-0" : "-translate-y-full"
        } duration-300`}
      >
        <h2 className="font-bold text-xl text-color-light">SEARCH</h2>
        <form>
          <input
            type="text"
            ref={searchRef}
            onKeyDown={handleSearchProduct}
            onBlur={handleOpenSearchInput}
            placeholder="What are you looking for?"
            className="w-[80vw] py-2 px-20 rounded-md pl-2 ring-4 focus:ring-color-primary ring-color-light outline-none"
          />
        </form>
      </div>
    </>
  );
};

export default Header;
