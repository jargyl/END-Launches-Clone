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
      <div className="w-full max-w-screen-lg mx-auto">
        <div className="flex justify-between h-96 overflow-hidden">
          <div className="flex justify-between">
            {category.subCategories.map((subCategoryGroup, groupIndex) => (
              <div
                key={groupIndex}
                className="flex flex-col flex-wrap mb-2 mr-12 w-32"
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
                  <img key={index} src={imagePath} className="h-44" />
                ))}
              </div>
            ) : (
              category.subImages.map((imagePath, index) => (
                <img key={index} src={imagePath} className="h-44 mb-5" />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
