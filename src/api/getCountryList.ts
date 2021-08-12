import axios from "axios";

const getCountryList = async () => {
  return await axios.get("https://restcountries.eu/rest/v2/all");
};
export default getCountryList;
