import Cookies from "js-cookie";
let token = Cookies.get("token");

const url_app = import.meta.env.VITE_APP_URL;

export const getProducts = async () => {
  try {
    const response = await fetch(`${url_app}/api/products`, {
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
