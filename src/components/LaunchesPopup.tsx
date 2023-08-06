import React, { Component } from "react";
import launches from "../../public/data/launches.json";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBarReact from "simplebar-react";

interface Launch {
  model: string;
  colorway: string;
  release_date: string;
  image: string;
}

const launchesData: Launch[] = launches;

export default class LaunchesPopup extends Component {
  render() {
    return (
      <div className="w-full max-w-screen-2xl text-[14px] mx-auto">
        <p className="font-bold absolute uppercase z-30 p-2 cursor-pointer mx-5">
          View upcoming releases
        </p>
        <SimpleBarReact className="max-h-full h-[30rem] mx-5 pt-6 absolute">
          <div className="flex flex-wrap justify-between">
            {launchesData.map((launch, index) => (
              <div key={index} className="w-1/2 py-2 pr-2 flex">
                <img
                  src={launch.image}
                  alt={launch.model}
                  className="w-1/3 mr-4 cursor-pointer"
                />
                <div className="cursor-pointer">
                  <p className="pb-1">{launch.model}</p>
                  <p className="text-gray-500 pb-1">{launch.colorway}</p>
                  <p>{launch.release_date}</p>
                </div>
              </div>
            ))}
          </div>
        </SimpleBarReact>
      </div>
    );
  }
}
