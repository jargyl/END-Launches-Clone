import React, { Component } from "react";
import launches from "../../public/data/launches.json";

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
      <div className="w-full max-w-screen-lg mx-auto">
        <p className="font-bold">View upcoming releases</p>
        <div className="flex flex-wrap justify-between overflow-hidden">
          {launchesData.map((launch, index) => (
            <div key={index} className="w-1/2 py-2 pr-2 flex">
              <img
                src={launch.image}
                alt={launch.model}
                className="w-3/5 mr-4"
              />
              <div>
                <p className="pb-1">{launch.model}</p>
                <p className="text-gray-500 pb-1">{launch.colorway}</p>
                <p>{launch.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
