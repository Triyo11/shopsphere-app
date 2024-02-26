const url_app = import.meta.env.VITE_APP_URL;
import Cookies from "js-cookie";
let token = Cookies.get("token");

export const getProducts = async () => {
  try {
    const response = await fetch(`${url_app}/api/products`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${url_app}/api/products/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyProduct = async () => {
  try {
    const response = await fetch(`${url_app}/api/myproducts`, {
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

export const getProductByCategory = async (category_id) => {
  try {
    const response = await fetch(`${url_app}/api/categories/${category_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putProduct = async (productEdited, product_id) => {
  try {
    const response = await fetch(`${url_app}/api/products/${product_id}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify(productEdited), // ubah objek JavaScript menjadi string JSON
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postProduct = async (productAdded) => {
  try {
    const response = await fetch(`${url_app}/api/products`, {
      method: "POST",
      headers: {
        Authorization: token,
        "content-type": "application/json",
      },
      body: JSON.stringify(productAdded), // ubah objek JavaScript menjadi string JSON
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
