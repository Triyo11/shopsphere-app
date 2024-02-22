import Cookies from "js-cookie";
let token = Cookies.get("token");
const url_api = import.meta.env.VITE_API_URL;

export const getOrder = async (orderItem) => {
  try {
    const response = await fetch(`${url_api}/api/order`, {
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
