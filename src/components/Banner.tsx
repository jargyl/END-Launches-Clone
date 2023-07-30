import Image from "next/image";
import React, { Component } from "react";
import { MdExpandMore } from "react-icons/md";
import CountrySelector from "./CountrySelector";
import countries from "../../public/data/countries.json";

export default class Banner extends Component {
  render() {
    return (
      <div className="bg-black px-5">
        <div className="flex justify-center items-center gap-2 relative w-full max-w-screen-2xl mx-auto text-[10px] px-2 py-3 text-white font-bold">
          <div className="hidden md:flex absolute left-0 items-center gap-1 font-[500] cursor-pointer">
            <CountrySelector countries={countries} />
          </div>
          <div className="flex gap-1 text-center items-center">
            <a href="#">MID-SEASON SALE</a>
            <p>|</p>
            <a href="#">FINAL REDUCTIONS</a>
            <p>|</p>
            <a href="#">SHOP NOW</a>
          </div>
        </div>
      </div>
    );
  }
}
