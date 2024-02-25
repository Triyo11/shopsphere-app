const url_app = import.meta.env.VITE_APP_URL;

export const getSearch = async (keyword, page, limit) => {
  try {
    const response = await fetch(`${url_app}/api/search?query=${keyword}&page=${page}&limit=${limit}`, {
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
