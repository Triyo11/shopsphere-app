const url_app = import.meta.env.VITE_APP_URL;

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
