import React, { Component } from "react";
import { MdNavigateNext } from "react-icons/md";

export default class LaunchesCard extends Component {
  render() {
    return (
      <div className="h-[30rem] w-[24rem] bg-gray-100 relative rounded p-5 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200">
        <div className="absolute bg-gray-300 h-12 rounded flex items-center">
          <div className="h-8 w-8 ml-2 bg-white flex items-center justify-center rounded font-[600] text-sm">
            23
          </div>
          <p className="mx-3 text-white uppercase font-[500] text-sm">June</p>
        </div>
        <img
          src="https://launches-media.endclothing.com/DD1503-103_launches_thumbnailv2_1_1_1.jpg"
          alt="product"
        />
        <div className="flex items-center justify-between">
          <div>
            <p className="uppercase text-sm font-[500] mb-2">Nike</p>
            <p className="uppercase font-[500] mb-2">Nike Dunk Low W</p>
            <p className="text-sm">€115</p>
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
