const url_app = import.meta.env.VITE_APP_URL;

export const postLogin = async (email, password) => {
  try {
    const response = await fetch(`${url_app}/api/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postRegister = async (name, email, password, city_id) => {
  try {
    const response = await fetch(`${url_app}/api/signup   `, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        city_id: city_id,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
