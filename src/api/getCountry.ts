import axios from "axios";
import { countryType } from "Mymodule";
import getCountryList from "./getCountryList";

const getCountryInfo = async (name: string) => {
  const countryList: any = await getCountryList();
  const country = countryList.data?.filter(
    (country: countryType) => country.name === name
  );

  return await axios.get(
    `https://restcountries.eu/rest/v2/alpha/${country[0].alpha2Code}`
  );
};

export default getCountryInfo;
