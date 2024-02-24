/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../../utils/loginRegisterApiFetch.js";
import { getProfile } from "../../../utils/profileApiFetch.js";
import { MyContext } from "../../../utils/myContext.js";
// import BottonLogin from '../micro/BottonLogin';
export default function FormLogin() {
  const navigate = useNavigate();
  const [loginResponse, setLoginResponse] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const { userData, setUserData } = useContext(MyContext);

  const fetchProfileData = async () => {
    const data = await getProfile();
    setUserData(data);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // fetch POST LOGIN:
    const fetchLogin = async (email, password) => {
      const data = await postLogin(email, password);
      setLoginResponse(data);
      if (data.errors?.email) {
        setIsEmailWrong(true);
      } else {
        setIsEmailWrong(false);
      }

      if (data.errors?.password) {
        setIsPasswordWrong(true);
      } else {
        setIsPasswordWrong(false);
      }
      if (data.token && data.user.id) {
        fetchProfileData();
        navigate("/");
      }
    };
    fetchLogin(email, password);
  };

  return (
    <div className="w-11/12 sm:w-5/15 md:w-5/12 lg:w-3/12 text-sm glass">
      <div className="w-full text-center my-3">
        <h2 className="text-2xl text-color-light font-medium">Login</h2>
      </div>
      <form className="my-2 mx-2 py-3" onSubmit={handleLogin}>
        <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light  "
            placeholder="Your email address"
            required
          />
          <div className="w-2/12 flex items-center justify-center">
            <MdEmail className="fill-color-light text-xl" />
          </div>
        </div>
        <div className="flex justify-start mx-7">
          <p
            className={`text-sm text-color-secondary ${
              !isEmailWrong && "hidden"
            }`}
          >
            {loginResponse.errors?.email}
          </p>
        </div>
        <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light"
            placeholder="Your password"
            required
          />
          <div className="w-2/12 flex items-center justify-center">
            <RiLockPasswordFill className="fill-color-light text-xl " />
          </div>
        </div>
        <div className="flex justify-start mx-7">
          <p
            className={`text-sm text-color-secondary ${
              !isPasswordWrong && "hidden"
            }`}
          >
            {loginResponse.errors?.password}
          </p>
        </div>
        <div className="mx-5 my-7 py-2 text-center">
          <input
            type="submit"
            value={"Login"}
            className="cursor-pointer text-center w-full h-[40px] rounded-sm bg-color-secondary text-color-light hover:bg-color-light hover:text-color-secondary hover:font-semibold transition-all"
          />
        </div>
      </form>
      <Link
        to="/register"
        className="mx-5 my-5 py-2 flex item-center justify-center cursor-pointer text-color-secondary"
      >
        <p className="text-sm">Doesn`t have a account ? / Register</p>
      </Link>
    </div>
  );
}
