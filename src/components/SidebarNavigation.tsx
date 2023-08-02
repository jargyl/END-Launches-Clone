import React, { Component } from "react";
import categories from "../../public/data/categories.json";
import { MdNavigateNext } from "react-icons/md";
import SideBarCategoryPopup from "./SideBarCategoryPopup";

interface Category {
  name: string;
  href: string;
  subcategoryTitle: string[];
  subCategories: string[][];
  subImageTitles: string[];
  subImages: string[];
}

interface SidebarNavigationState {
  openedCategory: Category | null;
}

export default class SidebarNavigation extends Component<
  {},
  SidebarNavigationState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      openedCategory: null,
    };
  }

  handleCategoryClick = (category: Category) => {
    this.setState({ openedCategory: category });
  };

  toggleSidebar = () => {
    if (this.state.openedCategory) {
      this.setState({ openedCategory: null });
    }
  };

  render() {
    const { openedCategory } = this.state;

    return (
      <div>
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex justify-between py-6 px-6 cursor-pointer"
            onClick={() => this.handleCategoryClick(category)}
          >
            <p className="font-[400]">{category.name}</p>
            <MdNavigateNext />
          </div>
        ))}
        {openedCategory && (
          <SideBarCategoryPopup
            category={openedCategory}
            isOpen={true}
            toggleSidebar={this.toggleSidebar}
          />
        )}
      </div>
    );
  }
}
