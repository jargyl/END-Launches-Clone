import React, { Component } from "react";
import features from "../../public/data/features.json";

interface Feature {
  subcategoryTitle: string;
  subCategories: string[];
  subImageCategory: string[];
  subImageTitles: string[];
  subImages: string[];
}

const featuresData: Feature = features;

export default class FeaturedPopup extends Component {
  render() {
    return (
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="flex justify-between h-[29rem] overflow-hidden">
          <div>
            <p className="font-bold absolute">
              {featuresData.subcategoryTitle}
            </p>
            <div className="flex flex-col">
              {featuresData.subCategories.map((subCategory, index) => (
                <div key={index} className="mb-2 relative top-8">
                  {subCategory}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap pl-10">
            {featuresData.subImageCategory.map((category, index) => (
              <div key={index} className="w-1/3 px-2">
                <div className="relative">
                  <img
                    src={featuresData.subImages[index]}
                    alt={featuresData.subImageTitles[index]}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 px-2">
                    <div className="text-white uppercase text-xs">
                      {category}
                    </div>
                    <div className="text-white font-bold text-xs">
                      {featuresData.subImageTitles[index]}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
