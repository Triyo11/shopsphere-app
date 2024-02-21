// eslint-disable-next-line no-unused-vars
import React from "react";
import FormRegister from "../components/macro/FormRegister";
import Logo from "../components/micro/Logo";

export default function Register() {
  return (
    <div className="font-poppins w-full flex flex-col items-center justify-center tracking-wider bg-color-primary pb-10">
      <Logo />
      <FormRegister />
    </div>
  );
}
