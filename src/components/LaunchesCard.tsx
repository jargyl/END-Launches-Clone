import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";

interface LaunchesCardProps {
  date: string;
  brand: string;
  model: string;
  imageUrl: string;
  price: string;
  active: boolean; // Add the 'active' prop
}

export default class LaunchesCard extends Component<LaunchesCardProps> {
  render() {
    const { date, brand, model, imageUrl, price, active } = this.props;

    const parsedDate = new Date(date);
    const dayNumber = parsedDate.getDate();
    const month = parsedDate.toLocaleString("en-US", { month: "long" });

    return (
      <div className="relative h-[32rem] md:w-[28rem] w-full bg-gray-100 rounded m-3 p-5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200">
        {!active && (
          <div className="absolute inset-0 bg-black opacity-30 rounded hover:opacity-0 transition-opacity duration-200" />
        )}
        <div className="absolute bg-gray-300 h-12 rounded flex items-center">
          <div className="h-8 w-8 ml-2 bg-white flex items-center justify-center rounded font-[600] text-sm">
            {dayNumber}
          </div>
          <p className="mx-3 text-white uppercase font-[500] text-sm">
            {month}
          </p>
        </div>
        <div className="flex-grow flex flex-col justify-center">
          <img src={imageUrl} alt="product" />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="uppercase text-sm font-[500] mb-2">{brand}</p>
            <p className="uppercase font-[500] mb-2">{model}</p>
            <p className="text-sm">€{price}</p>
          </div>
          {active && (
            <div>
              <button className="text-white h-10 w-10 flex items-center justify-center rounded-full bg-white">
                <MdNavigateNext className="m-2 text-black font" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
