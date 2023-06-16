import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";

interface LaunchesCardProps {
  date: string;
  brand: string;
  model: string;
  imageUrl: string;
  price: string;
}

export default class LaunchesCard extends Component<LaunchesCardProps> {
  render() {
    const { date, brand, model, imageUrl, price } = this.props;

    const parsedDate = new Date(date);
    const dayNumber = parsedDate.getDate();
    const month = parsedDate.toLocaleString("default", { month: "long" });

    return (
      <div className="h-[30rem] w-[24rem] bg-gray-100 relative rounded m-5 p-5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200">
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
          <div>
            <button className="text-white h-10 w-10 flex items-center justify-center rounded-full bg-white">
              <MdNavigateNext className="m-2 text-black font" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
