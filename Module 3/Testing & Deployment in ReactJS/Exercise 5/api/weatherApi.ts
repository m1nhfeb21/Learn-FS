import axios from "axios";

export const fetchWeather = async (city: string): Promise<string> => {
  const response = await axios.get("https://api.example.com/weather", {
    params: {
      city: city,
    },
  });
  return response.data.weather;
};
