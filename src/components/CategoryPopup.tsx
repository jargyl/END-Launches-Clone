import React, { Component } from "react";

interface Props {
  category: {
    name: string;
    subcategoryTitle: string[];
    subCategories: string[][];
    subImages: string[];
  };
}

export default class CategoryPopup extends Component<Props> {
  render() {
    const { category } = this.props;

    return (
      <div className="">
        <div className="flex justify-between h-96 overflow-hidden p-5">
          <div className="flex">
            {category.subCategories.map((subCategoryGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="flex flex-col flex-wrap mb-2 mr-24"
              >
                <p className=" font-bold absolute ">
                  {category.subcategoryTitle[groupIndex]}
                </p>
                {subCategoryGroup.slice(1).map((subCategory, index) => (
                  <div key={index} className="mb-2  relative top-8">
                    {subCategory}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            <p className=" mb-5 font-bold">FEATURED</p>
            {category.subImages.map((imagePath, index) => (
              <img key={index} src={imagePath} alt="" className="h-44" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
