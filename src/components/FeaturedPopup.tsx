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
      <div className="w-full max-w-screen-2xl text-[14px] mx-auto">
        <div className="flex justify-between h-[30rem] mx-5 overflow-hidden">
          <div className="mr-4">
            <p className="font-bold uppercase absolute cursor-pointer">
              {featuresData.subcategoryTitle}
            </p>
            <div className="flex flex-col">
              {featuresData.subCategories.map((subCategory, index) => (
                <div key={index} className="mb-2 relative top-8 cursor-pointer">
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
                    className="w-full h-56 object-cover cursor-pointer"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 px-2 cursor-pointer">
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
