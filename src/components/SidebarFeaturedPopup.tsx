import React, { Component } from "react";
import { MdNavigateBefore } from "react-icons/md";
import features from "../../public/data/features.json";

interface SidebarFeaturedPopupProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

export default class SidebarFeaturedPopup extends Component<SidebarFeaturedPopupProps> {
  render() {
    const { isOpen, toggleSidebar } = this.props;
    let key = 0;
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div
          className={`fixed left-0 top-0 h-full w-full sm:w-[22rem] bg-white ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="flex items-center pl-2 h-12 border-b-[1px]"
            onClick={toggleSidebar}
          >
            <MdNavigateBefore className="mr-3" />
            <p className="font-[400] cursor-pointer select-none">Featured</p>
          </div>
          <p className="p-3 cursor-pointer">{features.subcategoryTitle}</p>
          <div className="h-[calc(100vh-7rem)] overflow-y-auto font-[400] text-sm ">
            {features.subCategories.map((subCategory) => (
              <p key={key++} className="my-8 mx-4">
                {subCategory}
              </p>
            ))}
            {features.subImageTitles.map((subImageTitle, index) => (
              <div key={index} className="mb-8 cursor-pointer ml-4 mr-2">
                <img src={features.subImages[index]} className="w-full" />
                <div>
                  <div className="uppercase text-xs text-neutral-400 mt-2">
                    {features.subImageCategory[index]}{" "}
                  </div>
                  <div className="mt-2">{subImageTitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
