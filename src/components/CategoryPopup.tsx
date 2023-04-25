import React, { Component } from "react";

interface Props {
  subcategories: string[];
  imagePaths: string[];
}

export default class CategoryPopup extends Component<Props> {
  render() {
    const { subcategories, imagePaths } = this.props;

    return (
      <div>
        <p className=" text-[12px] mb-5">View all Brands</p>
        <div className="flex justify-between h-96 overflow-hidden">
          <div className="flex flex-col flex-wrap ">
            {subcategories.map((subcategory, index) => (
              <div key={index} className="mb-2 text-[12px] mr-24">
                {subcategory}
              </div>
            ))}
          </div>
          <div className="">
            {imagePaths.map((imagePath, index) => (
              <img key={index} src={imagePath} alt="" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
