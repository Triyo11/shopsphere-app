// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import BottonRegister from '../micro/BottonRegister';

export default function FormRegister() {
  return (      
    <div>
      <form className="my-2 mx-2 py-3">

        <div className="flex border-b-color-light border-b-2 mx-5 my-7 py-1 px-2">
        <input type="text" className="w-11/12 bg-color-transparent outline-none placeholder-color-light text-color-light" placeholder="Enter your name" required/>
        <div className="w-2/12 flex items-center justify-center">
            <FaUser className="fill-color-light  text-xl"/>
        </div>
        </div>



        <div className="flex border-b-color-light border-b-2 mx-5 my-7 py-1 px-2">
            <input type="email" className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light " placeholder="Your email address" required/>
            <div className="w-2/12 flex items-center justify-center">
                <MdEmail className="fill-color-light text-xl"/>
            </div>
        </div>


        <div className="flex border-b-color-light border-b-2 mx-5 my-7 py-1 px-2">
            <input type="password" className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light" placeholder="Create a strong password" required/>
            <div className="w-2/12 flex items-center justify-center">
            <RiLockPasswordFill className="fill-color-light text-xl"/>
            </div>
        </div>

        <div className="flex border-b-color-light border-b-2 mx-5 my-7 py-1 px-2">
            <input type="password" className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light" placeholder="Retype password" />
            <div className="w-2/12 flex items-center justify-center">
            <RiLockPasswordFill className="fill-color-light text-xl"/>
            </div>
        </div>

        <BottonRegister/>

        <Link to='/login' className="mx-5 my-5 py-2 flex item-center justify-center cursor-pointer text-color-secondary">
        <p className="text-sm">Already have a account ? / Login</p>
        </Link>

      </form>
    </div>
  )
}
