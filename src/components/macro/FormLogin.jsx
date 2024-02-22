// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
// import BottonLogin from '../micro/BottonLogin';

const exampleSuccessResponse = {
    "token": "hahahaha",
    "user": {
        "id": 1,
        "email": "bWQpP@example.com",
        "name": "John",
    }
}

const exampleEmailFailedResponse = {
    "error": {
        "email": "Email is required"
    }
}

const examplePasswordFailedResponse = {
    "error": {
        "password": "Password is required"
    }
}

const exampleEmailPasswordFailedResponse = {
    "error": {
        "email": "Email is required",
        "password": "Password is required"
    }
}
export default function FormLogin() {
    const navigate = useNavigate();
    const [loginResponse, setLoginResponse] = useState(exampleSuccessResponse);
    // const [loginResponse, setLoginResponse] = useState(exampleEmailFailedResponse);
    // const [loginResponse, setLoginResponse] = useState(examplePasswordFailedResponse);
    // const [loginResponse, setLoginResponse] = useState(exampleEmailPasswordFailedResponse);
    const [isEmailWrong, setIsEmailWrong] = useState(false);
    const [isPasswordWrong, setIsPasswordWrong] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault()
        // const email = e.target.email.value;
        // const password = e.target.password.value;

        // 1. post ke database untuk login dengan membawa email dan password
        // 2. setLoginResponse dengan response yang dikirimkan oleh API
        if (loginResponse.user) {
            navigate('/');
        }

        if (loginResponse.error.email) {
            setIsEmailWrong(true);
            console.log(loginResponse.error);
        } 
        
        if (loginResponse.error.password) {
            setIsPasswordWrong(true);
            console.log(loginResponse.error);
        }
    }

    return (
    <div className="w-11/12 sm:w-5/15 md:w-5/12 lg:w-3/12 text-sm glass">
        <div className="w-full text-center my-3">
            <h2 className="text-2xl text-color-light font-medium">Login</h2>
        </div>
        <form className="my-2 mx-2 py-3" onSubmit={handleLogin}>

            <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
                <input type="email" name='email' className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light  " placeholder="Your email address" required/>
                <div className="w-2/12 flex items-center justify-center">
                    <MdEmail className="fill-color-light text-xl"/>
                </div>
            </div>
            <div className='flex justify-start mx-7'>
                <p className={`text-sm text-color-secondary ${!isEmailWrong && 'hidden'}`}>Check again your email.</p>
            </div>


            <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
                <input type="password" name='password' className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light" placeholder="Your password" required/>
                <div className="w-2/12 flex items-center justify-center">
                    <RiLockPasswordFill className="fill-color-light text-xl "/>
                </div>
            </div>
            <div className='flex justify-start mx-7'>
                <p className={`text-sm text-color-secondary ${!isPasswordWrong && 'hidden'}`}>Check again your password.</p>
            </div>


            <div className="mx-5 my-7 py-2 text-center">
                <input type='submit' value={"Login"} className="cursor-pointer text-center w-full h-[40px] rounded-sm bg-color-secondary text-color-light hover:bg-color-light hover:text-color-secondary hover:font-semibold transition-all" />
            </div>

        </form>
        <Link to='/register' className="mx-5 my-5 py-2 flex item-center justify-center cursor-pointer text-color-secondary">
            <p className="text-sm">Doesn`t have a account ? / Register</p>
        </Link>
    </div>
    )
}
