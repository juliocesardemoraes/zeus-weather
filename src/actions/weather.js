const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: {
    "Content-Type": "application/json",
  },
};

export const getWeather = async (cityName) => {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND}/weather?name=${cityName}`,
    requestOptions
  );

  const data = await response.json();
  return data;

  // .then((response) => response.text())
  // .then((result) => console.log(result))
  // .catch((error) => console.error(error));
};
