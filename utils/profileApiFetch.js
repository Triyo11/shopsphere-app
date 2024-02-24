import Cookies from "js-cookie";
let token = Cookies.get("token");
const url_app = import.meta.env.VITE_APP_URL;

export const getProfile = async () => {
  try {
    const response = await fetch(`${url_app}/api/profile`, {
      method: "GET",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putProfile = async (profileData) => {
  try {
    const response = await fetch(`${url_app}/api/profile`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify(profileData), // ubah objek JavaScript menjadi string JSON
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putPassword = async (passwordData) => {
  console.log(passwordData);
  try {
    const response = await fetch(`${url_app}/api/profile/password`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify(passwordData), // ubah objek JavaScript menjadi string JSON
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
