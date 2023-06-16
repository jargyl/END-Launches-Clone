import React, { Component } from "react";
import LaunchesCard from "./LaunchesCard";
import launches from "../../public/data/launches.json";

export default class LaunchesOverview extends Component {
  render() {
    return (
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="flex justify-center flex-wrap">
          {launches.map((launch) => (
            <LaunchesCard
              date={launch.release_date}
              brand={launch.brand}
              model={launch.model}
              imageUrl={launch.image}
              price={launch.retail_price}
            />
          ))}
        </div>
      </div>
    );
  }
}
