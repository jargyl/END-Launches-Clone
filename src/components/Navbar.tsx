import Link from "next/link";
import React, { Component } from "react";
import CategoryPopup from "./CategoryPopup";

interface NavItem {
  name: string;
  href: string;
  subCategories: string[];
  subImages: string[];
}

const navItems: NavItem[] = [
  {
    name: "LATEST",
    href: "/latest",
    subCategories: [
      "New this Week",
      "Latest Sneakers",
      "Latest Lifestyle",
      "Latest Kids",
    ],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/27-03-23_SpringMW_Dropdown_426x262.jpg",
      "https://media.endclothing.com/media/catalog/category/27-01-2023_Active_Editorial_Dropdown_426x262.jpg",
    ],
  },
  {
    name: "BRANDS",
    href: "/brands",
    subCategories: [
      "Bathing Ape",
      "A.P.C.",
      "Acne Studios",
      "adidas",
      "Alexander McQueen",
      "AMIRI",
      "Arc'teryx",
      "Burberry",
      "Canada Goose",
      "Carhartt WIP",
      "Comme des Garçons Play",
      "Common Projects",
      "Givenchy",
      "Gucci",
      "Human Made",
      "Kenzo",
      "Loewe",
      "Maison Kitsuné",
      "Maison Margiela",
      "Moncler",
      "Needles",
      "Neighborhood",
      "New Balance",
      "Nike",
      "Norse Projects",
      "Palm Angels",
      "Patagonia",
      "Rick Owens",
      "Saint Laurent",
      "Stone Island",
      "Stussy",
      "The North Face",
      "Thom Browne",
      "Valentino",
      "VETEMENTS",
      "Visvim",
      "WTAPS",
    ],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/03-04-23_Loewe_Dropdown_426x262.jpg",
      "https://media.endclothing.com/media/catalog/category/24-03-2023_Auralee_Dropdown_426x262.jpg",
    ],
  },
  {
    name: "CLOTHING",
    href: "/clothing",
    subCategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/Accessories_DropdownNew_426x262_0008_Gucci_eyewear.jpg",
    ],
  },
  {
    name: "FOOTWEAR",
    href: "/footwear",
    subCategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/Accessories_DropdownNew_426x262_0008_Gucci_eyewear.jpg",
    ],
  },
  {
    name: "ACCESSORIES",
    href: "/accessories",
    subCategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/Accessories_DropdownNew_426x262_0008_Gucci_eyewear.jpg",
    ],
  },
  {
    name: "LIFESTYLE",
    href: "/lifestyle",
    subCategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/Accessories_DropdownNew_426x262_0008_Gucci_eyewear.jpg",
    ],
  },
  {
    name: "END. ACTIVE",
    href: "/end-active",
    subCategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/Accessories_DropdownNew_426x262_0008_Gucci_eyewear.jpg",
    ],
  },
  {
    name: "SALE",
    href: "/sale",
    subCategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/Accessories_DropdownNew_426x262_0008_Gucci_eyewear.jpg",
    ],
  },
  {
    name: "LAUNCHES",
    href: "/launches",
    subCategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/Accessories_DropdownNew_426x262_0008_Gucci_eyewear.jpg",
    ],
  },
  {
    name: "FEATURES",
    href: "/features",
    subCategories: ["Subcategory 1", "Subcategory 2", "Subcategory 3"],
    subImages: [
      "https://media.endclothing.com/media/catalog/category/Accessories_DropdownNew_426x262_0008_Gucci_eyewear.jpg",
    ],
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
        <ul className="flex relative justify-center border-y-[1px]  text-[11px] border-gray-200">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              onMouseOver={() => this.handleMouseOver(index)}
              onMouseOut={this.handleMouseOut}
              className=" py-4 px-3"
            >
              <a
                href={item.href}
                className={`${
                  activeIndex === null || activeIndex === index
                    ? "text-black"
                    : "text-gray-400"
                } ${index === 7 ? "text-red-600" : ""}`}
              >
                {item.name}
              </a>
              {activeIndex === index && (
                <div className="absolute top-full left-0 w-full bg-white z-10 shadow-lg py-4">
                  <div className="px-4">
                    <CategoryPopup
                      subcategories={item.subCategories}
                      imagePaths={item.subImages}
                    />
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
