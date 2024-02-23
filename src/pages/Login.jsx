// eslint-disable-next-line no-unused-vars
import React from "react";
import FormLogin from "../components/macro/FormLogin";
import Logo from "../components/micro/Logo";



export default function Login(){
    return(
        <div className="font-poppins w-full h-screen flex flex-col items-center justify-center tracking-wider bg-color-primary">
            <Logo/>
            <FormLogin />
        </div>
    );
}
