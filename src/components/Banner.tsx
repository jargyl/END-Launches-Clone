import Image from "next/image";
import React, { Component } from "react";
import { MdExpandMore } from "react-icons/md";
import CountrySelector from "./CountrySelector";
import countries from "../../public/countries.json";

export default class Banner extends Component {
  render() {
    return (
      <div className="bg-stone-200 px-5">
        <div className="flex justify-center items-center gap-2 relative w-full max-w-screen-lg mx-auto text-[10px] p-2 text-gray-600">
          <div className="absolute left-0 flex items-center gap-1 cursor-pointer">
            <CountrySelector countries={countries} />
          </div>
          <a href="#">MID-SEASON SALE</a>
          <p>|</p>
          <a href="#">FINAL REDUCTIONS</a>
          <p>|</p>
          <a href="#">SHOP NOW</a>
        </div>
      </div>
    );
  }
}
