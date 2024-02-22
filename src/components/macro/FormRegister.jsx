// eslint-disable-next-line no-unused-vars
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postRegister } from "../../../utils/loginRegisterApiFetch.js";
// import BottonRegister from '../micro/BottonRegister';

// TODO : validation about email
export default function FormRegister() {
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameValidation = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 5) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }
  };

  const handleEmailValidation = (event) => {
    setEmail(event.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
      setIsEmailValid(false);
      setIsEmailAvailable(true);
    } else {
      setIsEmailValid(true);
    }
  };

  const handlePasswordValidation = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 8) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  const handleFirstPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSecondPassword = (event) => {
    if (event.target.value !== password || event.target.value === "") {
      setIsPasswordCorrect(false);
    }
    if (event.target.value === password) {
      setIsPasswordCorrect(true);
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    // fetch POST REGISTER:
    const fetchRegister = async (name, email, password) => {
      const data = await postRegister(name, email, password);

      if (data.errors?.email) {
        setIsEmailAvailable(false);
      } else {
        setIsEmailAvailable(true);
      }

      if (data?.message === "User has been created") {
        navigate("/login");
      }
    };
    fetchRegister(name, email, password);
  };

  return (
    <div className="w-11/12 sm:w-5/15 md:w-5/12  lg:w-3/12 text-sm glass">
      <div className="w-full text-center my-3">
        <h2 className="text-2xl text-color-light font-medium">Register</h2>
      </div>
      <form className="my-2 mx-2 py-3" onSubmit={handleRegister}>
        <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
          <input
            type="text"
            onChange={handleUsernameValidation}
            className="w-11/12 bg-color-transparent outline-none placeholder-color-light text-color-light"
            placeholder="Enter your name"
            required
          />
          <div className="w-2/12 flex items-center justify-center">
            <FaUser className="fill-color-light  text-xl" />
          </div>
        </div>
        <div className="flex justify-start mx-7">
          <p
            className={`text-sm text-color-secondary ${
              isNameValid && "hidden"
            }`}
          >
            username min 5 word
          </p>
        </div>

        <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
          <input
            type="email"
            onChange={handleEmailValidation}
            className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light "
            placeholder="Your email address"
            required
          />
          <div className="w-2/12 flex items-center justify-center">
            <MdEmail className="fill-color-light text-xl" />
          </div>
        </div>
        <div className="justify-start mx-7">
          <p
            className={`text-sm text-color-secondary ${
              isEmailValid && "hidden"
            }`}
          >
            email not valid
          </p>
          <p
            className={`text-sm text-color-secondary ${
              isEmailAvailable && "hidden"
            }`}
          >
            email already is used
          </p>
        </div>

        <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
          <input
            id="password"
            type="password"
            onBlur={handleFirstPassword}
            onChange={handlePasswordValidation}
            className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light"
            placeholder="Create a strong password"
            required
          />
          <div className="w-2/12 flex items-center justify-center">
            <RiLockPasswordFill className="fill-color-light text-xl" />
          </div>
        </div>
        <div className="flex justify-start mx-7">
          <p
            className={`text-sm text-color-secondary ${
              isPasswordValid && "hidden"
            }`}
          >
            password min 8 charecter
          </p>
        </div>

        <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
          <input
            id="retype-password"
            type="password"
            onChange={handleSecondPassword}
            className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light"
            placeholder="Retype password"
          />
          <div className="w-2/12 flex items-center justify-center">
            <RiLockPasswordFill className="fill-color-light text-xl" />
          </div>
        </div>
        <div className="flex justify-start mx-7">
          <p
            className={`text-sm text-color-secondary ${
              isPasswordCorrect && "hidden"
            }`}
          >
            password not match!
          </p>
        </div>

        {/* <BottonRegister/> */}
        <div className="mx-5 my-7 py-2 text-center">
          <input
            type="submit"
            value={"Register"}
            className="cursor-pointer text-center w-full h-[40px] rounded-sm bg-color-secondary text-color-light hover:bg-color-light hover:text-color-secondary hover:font-semibold transition-all"
          />
        </div>
      </form>
      <Link
        to="/login"
        className="mx-5 my-5 py-2 flex item-center justify-center cursor-pointer text-color-secondary"
      >
        <p className="text-sm">Already have a account ? / Login</p>
      </Link>
    </div>
  );
}
