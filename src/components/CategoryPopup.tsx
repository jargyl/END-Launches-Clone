import React, { Component } from "react";

interface Props {
  category: {
    name: string;
    subcategoryTitle: string[];
    subCategories: string[][];
    subImageTitles: string[];
    subImages: string[];
  };
}

export default class CategoryPopup extends Component<Props> {
  render() {
    const { category } = this.props;

    return (
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="flex justify-between h-[29rem] overflow-hidden">
          <div className="flex justify-between">
            {category.subCategories.map((subCategoryGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="flex flex-col flex-wrap mb-2 mr-20 w-32"
              >
                <p className="font-bold absolute">
                  {category.subcategoryTitle[groupIndex]}
                </p>
                {subCategoryGroup.map((subCategory, index) => (
                  <div key={index} className="mb-2 relative top-8">
                    {subCategory}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div>
            <p className="mb-5 font-bold">FEATURED</p>
            {category.subImages.length === 4 ? (
              <div className="grid grid-cols-2 gap-5">
                {category.subImages.map((imagePath, index) => (
                  <div key={index} className="flex flex-col">
                    <img src={imagePath} className="h-44" />
                    <p className="mt-2">{category.subImageTitles[index]}</p>
                  </div>
                ))}
              </div>
            ) : (
              category.subImages.map((imagePath, index) => (
                <div key={index} className="flex flex-col mb-5">
                  <img src={imagePath} className="h-40" />
                  <p className="mt-2">{category.subImageTitles[index]}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
