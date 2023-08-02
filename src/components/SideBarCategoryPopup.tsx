import React, { Component } from "react";
import { MdClose, MdNavigateBefore } from "react-icons/md";

interface SidebarNavigationProps {
  category: {
    name: string;
    subcategoryTitle: string[];
    subCategories: string[][];
    subImageTitles: string[];
    subImages: string[];
  };
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default class SideBarCategoryPopup extends Component<SidebarNavigationProps> {
  render() {
    const { category, isOpen, toggleSidebar } = this.props;

    return (
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed left-0 top-0 h-full w-full sm:w-[22rem] bg-white transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <MdClose onClick={toggleSidebar} />
          </button>

          <div
            className="flex items-center pl-2 h-12 border-b-[1px]"
            onClick={toggleSidebar}
          >
            <MdNavigateBefore className="mr-3" />
            <p className="font-[400] cursor-pointer select-none">
              {category.name}
            </p>
          </div>

          <div className="flex flex-col justify-start py-8 pb-14 h-full overflow-y-auto">
            <p className="font-[500] pb-6 px-6">
              {category.subcategoryTitle[0]}
            </p>
            {category.subCategories[0].map((subCategory, index) => (
              <div key={index} className="py-6 px-6 cursor-pointer">
                <p className="font-[400]">{subCategory}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
