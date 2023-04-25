import React, { Component } from "react";
import Image from "next/image";
import { MdExpandMore, MdSearch } from "react-icons/md";

type Currency = {
  code: string;
  symbol: string;
  flag: string;
};

type Country = {
  name: string;
  currencies: Currency[];
};

type CountrySelectorProps = {
  countries: Country[];
};

type CountrySelectorState = {
  isOpen: boolean;
  selectedCountry: Country;
  searchTerm: string;
};

export default class CountrySelector extends Component<
  CountrySelectorProps,
  CountrySelectorState
> {
  constructor(props: CountrySelectorProps) {
    super(props);

    this.state = {
      isOpen: false,
      selectedCountry: this.props.countries[0],
      searchTerm: "",
    };
  }

  componentDidMount() {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      const selectedCountry = JSON.parse(storedCountry);
      this.setState({ selectedCountry });
    }
  }

  handleCountryClick = (country: Country) => {
    localStorage.setItem("selectedCountry", JSON.stringify(country));
    this.setState({ selectedCountry: country, isOpen: false });
  };

  filteredCountries = () => {
    return this.props.countries.filter((country) =>
      country.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    const { isOpen, selectedCountry, searchTerm } = this.state;
    const filteredCountries = this.filteredCountries();
    return (
      <div className="relative">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => this.setState({ isOpen: !isOpen })}
        >
          <Image
            src={selectedCountry.currencies[0].flag}
            alt="flag"
            width={12}
            height={12}
          />
          <p className="">{selectedCountry.currencies[0].code}</p>
          <MdExpandMore className="text-[10px]" />
        </div>

        <div
          className={`${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } transition-opacity duration-300 w-72 absolute top-10 left-0 z-50 bg-white shadow-2xl text-[12px]`}
        >
          <div className="flex justify-center items-center">
            <h1 className="p-5  text-[14px]">SHIPPING COUNTRY</h1>
          </div>
          <div className="h-72 overflow-y-scroll">
            <div className="bg-gray-100 border-[1px] border-gray-200 p-5">
              <p className="mb-5">
                You are currently shipping to{" "}
                <span className="">{selectedCountry.name}</span> and your order
                will be billed in{" "}
                <span className="">
                  {selectedCountry.currencies[0].code}{" "}
                  {selectedCountry.currencies[0].symbol}
                </span>
                .
              </p>
              <div className="relative">
                <MdSearch className="absolute top-3 text-xl right-2 " />
                <input
                  type="text"
                  placeholder="Search for shipping country"
                  value={searchTerm}
                  onChange={(e) =>
                    this.setState({ searchTerm: e.target.value })
                  }
                  className="w-full p-3 pr-8 mb-2 border-[1px] border-gray-300"
                />
              </div>
            </div>

            {filteredCountries.length === 0 ? (
              <p className="text-gray-400 p-5">No countries found</p>
            ) : (
              filteredCountries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center justify-between gap-4 p-5 cursor-pointer hover:bg-gray-200"
                  onClick={() => this.handleCountryClick(country)}
                >
                  <Image
                    src={country.currencies[0].flag}
                    alt="flag"
                    width={12}
                    height={12}
                  />
                  <p className="mt-0.5">{country.name}</p>
                  <p className="ml-auto">
                    {country.currencies[0].code} {country.currencies[0].symbol}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
