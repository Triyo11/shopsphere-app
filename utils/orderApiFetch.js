import Cookies from "js-cookie";
let token = Cookies.get("token");
const url_app = import.meta.env.VITE_APP_URL;

export const getOrder = async (orderItem) => {
  try {
    const response = await fetch(`${url_app}/api/order`, {
      method: "GET",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify(orderItem),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
