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

export const postOrder = async (checkedItems) => {
  try {
    const response = await fetch(`${url_app}/api/order`, {
      method: "POST",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        cart_id: checkedItems,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getOrderBySeller = async (seller_id) => {
  try {
    const response = await fetch(`${url_app}/api/order/seller/${seller_id}`, {
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

export const postReceiptOrder = async (seller_id, order_id, receipt) => {
  try {
    const response = await fetch(`${url_app}/api/order/seller/${seller_id}`, {
      method: "POST",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        order_id: order_id,
        receipt: receipt,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
