import axios from "axios";

const getCountryInfo = async (code: string) => {
  return await axios.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
};
export default getCountryInfo;
