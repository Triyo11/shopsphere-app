// eslint-disable-next-line no-unused-vars
import React from 'react'
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import BottonLogin from '../micro/BottonLogin';

export default function FormLogin() {
  return (
    <div>
       <form className="my-2 mx-2 py-3">

        <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
            <input type="email" className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light  " placeholder="Your email address" required/>
            <div className="w-2/12 flex items-center justify-center">
                <MdEmail className="fill-color-light text-xl"/>
            </div>
        </div>
        <div className='flex justify-start mx-7'>
            <p className='text-sm text-color-secondary hidden'>email not valid</p>
        </div>


        <div className="flex border-b-color-light border-b-2 mx-5 my-4 py-1 px-2">
            <input type="password" className="w-10/12 bg-color-transparent outline-none placeholder-color-light text-color-light" placeholder="Your password" required/>
            <div className="w-2/12 flex items-center justify-center">
                <RiLockPasswordFill className="fill-color-light text-xl "/>
            </div>
        </div>
        <div className='flex justify-start mx-7'>
            <p className='text-sm text-color-secondary hidden'>password is wrong ! please create right password</p>
        </div>

        <BottonLogin/>
        

        <Link to='/register' className="mx-5 my-5 py-2 flex item-center justify-center cursor-pointer text-color-secondary">
            <p className="text-sm">Doesn`t have a account ? / Register</p>
        </Link>

        </form>
    </div>
  )
}
