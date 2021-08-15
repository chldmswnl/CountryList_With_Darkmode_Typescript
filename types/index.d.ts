declare module "Mymodule" {
  type countryType = {
    languages: languageType[];
    flag: string;
    name: string;
    population: number;
    region: string;
    borders: string[];
    capital: string;
    numericCode: string;
    alpha2Code: string;
    alpha3Code: string;
    currencies: currencyType[];
  };

  type currencyType = {
    code: string;
    name: string;
    symbol: string;
  };

  type languageType = {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  };
}
