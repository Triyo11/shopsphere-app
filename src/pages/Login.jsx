// eslint-disable-next-line no-unused-vars
import React from "react";
import FormLogin from "../components/macro/FormLogin";
import Logo from "../components/micro/Logo";

export default function Login() {
  return (
    <div className="font-poppins w-full h-screen flex flex-col items-center justify-center tracking-wider bg-color-primary">
      <Logo />

      <div className="w-11/12 sm:w-5/15 md:w-3/12 text-sm glass ">
        <div className="w-full text-center my-3">
          <h2 className="text-2xl text-color-light font-medium">Login</h2>
        </div>

        <FormLogin />
      </div>
    </div>
  );
}
