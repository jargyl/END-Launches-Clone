import React, { Component } from "react";
import LaunchesCard from "./LaunchesCard";
import launches from "../../public/data/launches.json";
import previous_launches from "../../public/data/previous_launches.json";

export default class LaunchesOverview extends Component {
  render() {
    let key = 0;
    return (
      <div className="w-full max-w-screen-2xl mx-auto mb-12">
        <div className="text-center mt-14 mb-6">
          <p className="uppercase text-xl font-bold">Upcoming Launches</p>
        </div>
        <div className="flex justify-center flex-wrap">
          {launches.map((launch) => (
            <LaunchesCard
              date={launch.release_date}
              brand={launch.brand}
              model={launch.model}
              imageUrl={launch.image}
              price={launch.retail_price}
              active={true}
              key={"A" + key++}
            />
          ))}
        </div>
        <div className="text-center mt-14 mb-6">
          <p className="uppercase text-xl font-bold">Previous Launches</p>
        </div>
        <div className="flex justify-center flex-wrap">
          {previous_launches.map((launch) => (
            <LaunchesCard
              date={launch.release_date}
              brand={launch.brand}
              model={launch.model}
              imageUrl={launch.image}
              price={launch.retail_price}
              active={false}
              key={"B" + key++}
            />
          ))}
        </div>
      </div>
    );
  }
}
