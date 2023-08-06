import React, { Component } from "react";
import categories from "../../public/data/categories.json";
import { MdNavigateNext } from "react-icons/md";
import SideBarCategoryPopup from "./SideBarCategoryPopup";
import SidebarLaunchesPopup from "./SidebarLaunchesPopup";
import SidebarFeaturedPopup from "./SidebarFeaturedPopup";

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

const full: Category[] = [
  ...categories,
  {
    name: "Launches",
    href: "/launches",
    subcategoryTitle: [],
    subCategories: [],
    subImageTitles: [],
    subImages: [],
  },
  {
    name: "Featured",
    href: "/featured",
    subcategoryTitle: [],
    subCategories: [],
    subImageTitles: [],
    subImages: [],
  },
];

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
        {/* Categories map */}
        {full.map((category) => (
          <div
            key={category.name}
            className="flex justify-between py-6 px-6 cursor-pointer"
            onClick={() => this.handleCategoryClick(category)}
          >
            <p className="font-[400]">{category.name}</p>
            <MdNavigateNext />
          </div>
        ))}

        {/* Check for Launches category */}
        {openedCategory?.name === "Launches" && (
          <SidebarLaunchesPopup
            isOpen={true}
            toggleSidebar={this.toggleSidebar}
          />
        )}

        {/* Check for Featured category */}
        {openedCategory?.name === "Featured" && (
          <SidebarFeaturedPopup
            isOpen={true}
            toggleSidebar={this.toggleSidebar}
          />
        )}

        {/* Check for other categories */}
        {openedCategory &&
          openedCategory.name !== "Launches" &&
          openedCategory.name !== "Featured" && (
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
