import Cookies from "js-cookie";
let token = Cookies.get("token");

export const getOrder = async (orderItem) => {
  try {
    const response = await fetch("http://localhost:4200/api/order", {
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
