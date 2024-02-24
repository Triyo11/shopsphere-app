const key_ongkir = import.meta.env.VITE_KEY_ONGKIR;
const url_app = import.meta.env.VITE_APP_URL;

export const getProvinceOngkir = async () => {
  try {
    const response = await fetch(`${url_app}/province`, {
      method: "GET",
      headers: {
        key: key_ongkir,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getCityOngkir = async (province) => {
  try {
    const response = await fetch(`${url_app}/city?province=${province}`, {
      method: "GET",
      headers: {
        key: key_ongkir,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getCostOngkir = async (origin, destination, courier = "jne") => {
  try {
    const response = await fetch(`${url_app}/cost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: key_ongkir,
      },
      body: JSON.stringify({
        origin,
        destination,
        weight: 1,
        courier,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
