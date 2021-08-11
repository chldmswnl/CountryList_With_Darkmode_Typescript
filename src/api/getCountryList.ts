import axios from "axios";

const getJobList = async () => {
  return await axios.get("https://restcountries.eu/rest/v2/all");
};
export default getJobList;
