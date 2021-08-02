import axios from "axios";

const getJobList = async () => {
  return await axios.get("./data.json");
};
export default getJobList;
