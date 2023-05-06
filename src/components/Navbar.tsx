import Link from "next/link";
import React, { Component } from "react";
import CategoryPopup from "./CategoryPopup";
import categories from "../../public/data/categories.json";
import LaunchesPopup from "./LaunchesPopup";
import FeaturedPopup from "./FeaturedPopup";

interface NavItem {
  name: string;
  href: string;
  subcategoryTitle: string[];
  subCategories: string[][];
  subImageTitles: string[];
  subImages: string[];
}

const navItems: NavItem[] = [
  ...categories,
  {
    name: "LAUNCHES",
    href: "/launches",
    subcategoryTitle: [],
    subCategories: [],
    subImageTitles: [],
    subImages: [],
  },
  {
    name: "FEATURED",
    href: "/featured",
    subcategoryTitle: [],
    subCategories: [],
    subImageTitles: [],
    subImages: [],
  },
];

interface NavbarState {
  activeIndex: number | null;
}

export default class Navbar extends Component<{}, NavbarState> {
  state = {
    activeIndex: null,
  };

  handleMouseOver = (index: number) => {
    this.setState({ activeIndex: index });
  };

  handleMouseOut = () => {
    this.setState({ activeIndex: null });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <nav>
        <ul className="flex relative justify-center border-y-[1px] text-[11px] border-gray-200 box-content">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              onMouseOver={() => this.handleMouseOver(index)}
              onMouseOut={this.handleMouseOut}
              className="py-4 px-3"
            >
              <a
                href={item.href}
                className={`uppercase font-[500] ${
                  activeIndex === null || activeIndex === index
                    ? "text-black"
                    : "text-gray-400"
                } ${index === 6 ? "text-red-600" : ""}`}
              >
                {item.name}
              </a>
              {activeIndex === index && (
                <div className="absolute top-full left-0 w-full shadow-lg bg-white py-4 border-t">
                  {item.name === "LAUNCHES" ? (
                    <LaunchesPopup />
                  ) : item.name === "FEATURED" ? (
                    <FeaturedPopup />
                  ) : (
                    <CategoryPopup category={item} />
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
