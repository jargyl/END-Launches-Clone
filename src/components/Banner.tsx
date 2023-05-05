import Image from "next/image";
import React, { Component } from "react";
import { MdExpandMore } from "react-icons/md";
import CountrySelector from "./CountrySelector";
import countries from "../../public/data/countries.json";

export default class Banner extends Component {
  render() {
    return (
      <div className="bg-black px-5">
        <div className="flex justify-center items-center gap-2 relative w-full max-w-screen-lg mx-auto text-[10px] px-2 py-3 text-white font-bold">
          <div className="absolute left-0 flex items-center gap-1 font-[500] cursor-pointer">
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
