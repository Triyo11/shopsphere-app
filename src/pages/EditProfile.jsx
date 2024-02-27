/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from "react";
import Footer from "../components/macro/Footer";
import Header from "../components/macro/Header";
import EditProfileHeader from "../components/macro/EditProfileHeader";
import { MyContext } from "../../utils/myContext";
import Cookie from "js-cookie";

import {
  getProfile,
  putPassword,
  putProfile,
} from "../../utils/profileApiFetch";

const shadowStyle = {
  transition: "transform 0.5s ease",
  boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
  padding: "20px",
  margin: "auto",
  width: "90%", // Memastikan bagian kanan tetap responsif
};

const hoverStyle = {
  transform: "translateY(-10px)",
};

const isMediumScreen = window.matchMedia("(min-width: 768px)").matches;

const EditProfile = () => {
  // State untuk menyimpan nilai nama, email, dan password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [image, setImage] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const { setUserData } = useContext(MyContext);
  const [isSeller, setIsSeller] = useState(false);

  const cloudName = "dbqbijf9v";
  const uploadPreset = "shopsphere";

  // get profile data
  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await getProfile();
      setName(data.name);
      setEmail(data.email);
      setImageUrl(data.image);
      setIsSeller(data.role_id === 2);
    };
    fetchProfileData();
  }, []);

  // upload photo profile
  useEffect(() => {
    handleEditPhoto();
  }, [image]);

  // State untuk menyimpan status mode edit
  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [isPasswordEdit, setIsPasswordEdit] = useState(false);

  // Fungsi untuk mengaktifkan mode edit
  const handleEdit = (field) => {
    switch (field) {
      case "name":
        setIsNameEdit(true);
        break;
      case "email":
        setIsEmailEdit(true);
        break;
      case "password":
        setIsPasswordEdit(true);
        break;
      default:
        break;
    }
  };

  const handleEditPhoto = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", uploadPreset);
    data.append("folder", "shopsphere2");
    await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const url = data.url;
        setImageUrl(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Fungsi untuk menyimpan data yang telah diubah ke api
  const editProfileData = async (data) => {
    const response = await putProfile(data);
    if (response.message === "Name or email is required") {
      setIsNameEdit(true);
    }
    if (response.message !== "Profile updated") {
      setIsEmailEdit(true);
    }
    if (response.message === "Profile updated") {
      //simpan dalam cookie
      Cookie.set("userDataCookie", JSON.stringify(response.user), {
        expires: 1,
      });
      setUserData(response.user);
    }
    setMessage(response.message);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  // Fungsi untuk menyimpan data password yang telah diubah ke api
  const editPasswordData = async (data) => {
    const response = await putPassword(data);
    if (response.message !== "Password updated") {
      setIsPasswordEdit(true);
    }
    setMessage(response.message);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const editedData = {
    name: name,
    email: email,
    image: imageUrl,
    role_id: isSeller ? 2 : 3,
  };

  const editedPasswordData = {
    old_password: password,
    new_password: newPassword,
  };

  const handleSave = (field) => {
    switch (field) {
      case "name":
        setIsNameEdit(false);
        // Simpan perubahan ke database atau tempat penyimpanan lainnya
        editProfileData(editedData);
        break;
      case "email":
        setIsEmailEdit(false);
        // Simpan perubahan ke database atau tempat penyimpanan lainnya
        editProfileData(editedData);
        break;
      case "password":
        setIsPasswordEdit(false);
        // Simpan perubahan ke database atau tempat penyimpanan lainnya
        editPasswordData(editedPasswordData);
        break;
      default:
        break;
    }
  };

  //Memanggil fungsi untuk membuka halaman store
  const dataOpenStore = {
    name: name,
    email: email,
    image: imageUrl,
    role_id: 2,
  };
  const handleOpenStore = async () => {
    try {
      setIsSeller(true);
      await editProfileData(dataOpenStore);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //Memanggil fungsi untuk membuka halaman manage store
  const handleManageStore = () => {
    window.location.href = "/manage-product";
  };

  return (
    <>
      <Header />
      <EditProfileHeader />
      <div
        className="font-poppins md:flex flex-row justify-center items-start w-full"
        style={{ ...shadowStyle, ...hoverStyle }}
      >
        {/* Bagian Sebelah Kiri */}
        <div className="flex flex-col items-center justify-start pb-20">
          <div
            className={`${
              isMediumScreen ? "h-40 w-40" : "h-36 w-36 mb-5"
            } rounded-full overflow-hidden md:mt-10 mt-5`}
          >
            <img
              className="h-full w-full object-cover"
              src={imageUrl}
              alt="Foto Profil"
            />
          </div>
          <label
            htmlFor="PhotoProfile"
            className="mt-5"
          >
            <span className="cursor-pointer mt-4 bg-color-primary hover:bg-color-secondary text-color-light font-bold py-2 px-4 rounded">
              Edit Photo
            </span>
          </label>
          <input
            id="PhotoProfile"
            name="PhotoProfile"
            type="file"
            className="sr-only"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
          <button
            onClick={isSeller ? handleManageStore : handleOpenStore}
            className="mt-4 bg-color-primary hover:bg-color-secondary text-color-light font-bold py-2 px-4 rounded"
          >
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
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    border: "2px solid #ccc",
                    borderRadius: "5px",
                    padding: "5px",
                  }} // Menambahkan border dan gaya lainnya saat mode edit aktif
                />
              ) : (
                <span>{name}</span>
              )}
            </div>
            {isNameEdit ? (
              <button
                className="ml-2 font-bold py-2 px-4 rounded text-color-primary hover:text-color-secondary"
                onClick={() => handleSave("name")}
              >
                Save
              </button>
            ) : (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleEdit("name")}
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
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    padding: "5px",
                  }} // Menambahkan border dan gaya lainnya saat mode edit aktif
                />
              ) : (
                <span>{email}</span>
              )}
            </div>
            {isEmailEdit ? (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleSave("email")}
              >
                Save
              </button>
            ) : (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleEdit("email")}
              >
                Edit
              </button>
            )}
          </div>
          <div className="flex justify-between items-center mb-2  ">
            <div className="flex md:flex-row flex-col">
              <span className="font-bold text-lg pr-2">
                {isPasswordEdit ? "Old password" : "Password"}
              </span>
              <input
                disabled={!isPasswordEdit}
                type={isPasswordEdit ? "text" : "password"}
                placeholder={isPasswordEdit ? "old password" : "********"}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-[6px]"
                style={
                  isPasswordEdit
                    ? {
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "5px",
                      }
                    : null
                } // Menambahkan border dan gaya lainnya saat mode edit aktif
              />
            </div>
            {isPasswordEdit ? (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleSave("password")}
              >
                Save
              </button>
            ) : (
              <button
                className="ml-2 font-bold py-2 px-4 rounded  text-color-primary hover:text-color-secondary"
                onClick={() => handleEdit("password")}
              >
                Edit
              </button>
            )}
          </div>
          <span className="font-bold text-lg pr-2">
            {isPasswordEdit ? "New password" : ""}
          </span>
          {isPasswordEdit ? (
            <input
              type={isPasswordEdit ? "text" : "password"}
              placeholder="new password"
              onChange={(e) => setNewPassword(e.target.value)}
              style={
                isPasswordEdit
                  ? {
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "5px",
                    }
                  : null
              } // Menambahkan border dan gaya lainnya saat mode edit aktif
            />
          ) : null}
          <p>{message}</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EditProfile;
