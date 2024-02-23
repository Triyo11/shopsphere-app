import Cookies from "js-cookie";
let token = Cookies.get("token");

const url_app = import.meta.env.VITE_APP_URL;

export const getCart = async () => {
  try {
    const response = await fetch(`${url_app}/api/cart`, {
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

export const postCart = async (cartItem) => {
  try {
    const response = await fetch(`${url_app}/api/cart`, {
      method: "POST",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem), // ubah objek JavaScript menjadi string JSON
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCartProduct = async (productId) => {
  try {
    const response = await fetch(`${url_app}/api/cart/${productId}`, {
      method: "DELETE",
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
