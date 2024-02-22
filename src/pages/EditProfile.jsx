// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Footer from "../components/macro/Footer";
import Header from "../components/macro/Header";
import EditProfileHeader from "../components/macro/EditProfileHeader";
import EditPhotoButton from "../components/micro/EditPhotoButton";
import OpenStoreButton from "../components/micro/OpenStoreButton";
import ManageStoreButton from "../components/micro/ManageStoreButton";

const EditProfile = () => {
  // State untuk menyimpan nilai nama, email, dan password
  const [name] = useState("User");
  const [email] = useState("example@example.com");
  const [password] = useState("********");

  // Status pengguna (seller atau bukan)
  const isSeller = false; // Ganti dengan status pengguna yang sesuai

  return (
    <>
      <Header />
      <EditProfileHeader />
      <div className="md:flex flex-row justify-center items-start w-full">
        {/* Bagian Sebelah Kiri */}
        <div className="flex flex-col items-center justify-start pb-20">
          <div className="h-56 w-56 rounded-full overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXetqBk12IiVmLp-t1PqjvmL74ULCO-6mPVYC0Jy5CsxvJ7JxcKRSQTP4WGk9VbLLJIAg&usqp=CAU"
              alt="Foto Profil"
            />
          </div>
          <EditPhotoButton />
          {isSeller ? <ManageStoreButton /> : <OpenStoreButton />}
        </div>

        {/* Bagian Sebelah Kanan */}
        <div className="items-start p-2 md:pl-20">
          <div className="flex justify-between items-center mb-4">
            <div>
            <span className="font-bold text-lg pr-[30px]">Name </span>
            <span className="">{name}</span>
            </div>
            <button className="ml-2 font-bold py-2 px-4 rounded">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
            <span className="font-bold text-lg pr-[34px]">Email </span>
            <span className="">{email}</span>
            </div>
            <button className="ml-2 font-bold py-2 px-4 rounded">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div>
            <span className="font-bold text-lg pr-[1px]">Password </span>
            <span className="">{password}</span>
            </div>
            <button className="ml-2 font-bold py-2 px-4 rounded">
              Edit
            </button>
          </div>
        </div>
      </div>
  
      <Footer />
    </>
  );
};

export default EditProfile;
