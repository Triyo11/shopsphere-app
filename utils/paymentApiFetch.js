import Cookies from "js-cookie";
let token = Cookies.get("token");
const url_app = import.meta.env.VITE_APP_URL;

export const postPayment = async (id, shipping_cost) => {
  try {
    const response = await fetch(`${url_app}/api/process-payment`, {
      method: "POST",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        shipping_cost: shipping_cost,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const afterPayment = async (dynamic, order_id) => {
  try {
    const response = await fetch(
      `http://localhost:4200/api/afterPayment?session_id=${dynamic}&order_id=${order_id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
          "content-type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
