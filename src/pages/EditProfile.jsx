// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Footer from "../components/macro/Footer";
import Header from "../components/macro/Header";
import EditProfileHeader from "../components/macro/EditProfileHeader";
import EditPhotoButton from "../components/micro/EditPhotoButton";

const shadowStyle = {
  transition: 'transform 0.5s ease',
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  padding: '20px',
  margin: 'auto',
  width: '90%', // Memastikan bagian kanan tetap responsif
};

const hoverStyle = {
  transform: 'translateY(-10px)',
};

const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;

const EditProfile = () => {
  // State untuk menyimpan nilai nama, email, dan password
  const [name, setName] = useState("User");
  const [email, setEmail] = useState("example@example.com");
  const [password, setPassword] = useState("password");

  // State untuk menyimpan status mode edit
  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);

  // Fungsi untuk mengaktifkan mode edit
  const handleEdit = (field) => {
    switch (field) {
      case 'name':
        setIsNameEdit(true);
        break;
      case 'email':
        setIsEmailEdit(true);
        break;
      case 'password':
        setIsPasswordEdit(true);
        break;
      default:
        break;
    }
  };

  // Fungsi untuk menyimpan perubahan
  const handleSave = (field) => {
    switch (field) {
      case 'name':
        setIsNameEdit(false);
        // Simpan perubahan ke database atau tempat penyimpanan lainnya
        break;
      case 'email':
        setIsEmailEdit(false);
        // Simpan perubahan ke database atau tempat penyimpanan lainnya
        break;
      case 'password':
        setIsPasswordEdit(false);
        // Simpan perubahan ke database atau tempat penyimpanan lainnya
        break;
      default:
        break;
    }
  };

  // Status pengguna (seller atau bukan)
  const isSeller = false; // Ganti dengan status pengguna yang sesuai

  return (
    <>
      <Header />
      <EditProfileHeader />
      <div className="font-poppins md:flex flex-row justify-center items-start w-full" style={{ ...shadowStyle, ...hoverStyle }}>
        {/* Bagian Sebelah Kiri */}
        <div className="flex flex-col items-center justify-start pb-20">
          <div className={`${isMediumScreen ? "h-40 w-40" : "h-36 w-36 mb-5"} rounded-full overflow-hidden md:mt-10 mt-5`}>
            <img
              className="h-full w-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXetqBk12IiVmLp-t1PqjvmL74ULCO-6mPVYC0Jy5CsxvJ7JxcKRSQTP4WGk9VbLLJIAg&usqp=CAU"
              alt="Foto Profil"
            />
          </div>
          <EditPhotoButton />
          <button className="mt-4 bg-color-primary hover:bg-color-secondary text-color-light font-bold py-2 px-4 rounded">
            {isSeller ? "Manage Store" : "Open Store"}
          </button>
        </div>

        {/* Bagian Sebelah Kanan */}
        <div className="items-start p-2 md:pl-20">
          <div className="flex justify-between items-center mb-4 md:mt-10">
            <div className="flex md:flex-row md:gap-3 flex-col">
              <span className="font-bold text-lg pr-[30px]">Name </span>
              {isNameEdit ? (
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ border: "2px solid #ccc", borderRadius: "5px", padding: "5px" }} // Menambahkan border dan gaya lainnya saat mode edit aktif
                />
              ) : (
                <span>{name}</span>
              )}
            </div>
            {isNameEdit ? (
              <button
                className="ml-2 font-bold py-2 px-4 rounded text-color-primary hover:text-color-secondary"
                onClick={() => handleSave('name')}
              >
                Save
              </button>
            ) : (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleEdit('name')}
              >
                Edit
              </button>
            )}
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex md:flex-row md:gap-3 flex-col">
              <span className="font-bold text-lg pr-[34px]">Email </span>
              {isEmailEdit ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "5px" }} // Menambahkan border dan gaya lainnya saat mode edit aktif
                />
              ) : (
                <span>{email}</span>
              )}
            </div>
            {isEmailEdit ? (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleSave('email')}
              >
                Save
              </button>
            ) : (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleEdit('email')}
              >
                Edit
              </button>
            )}
          </div>
          <div className="flex justify-between items-center mb-4 ">
            <div className="flex md:flex-row md:gap-3 flex-col">
              <span className="font-bold text-lg pr-[1px]">Password </span>
              <input
                type={isPasswordEdit ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={isPasswordEdit ? { border: "1px solid #ccc", borderRadius: "5px", padding: "5px" } : null} // Menambahkan border dan gaya lainnya saat mode edit aktif
              />
            </div>
            {isPasswordEdit ? (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleSave('password')}
              >
                Save
              </button>
            ) : (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleEdit('password')}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EditProfile;
