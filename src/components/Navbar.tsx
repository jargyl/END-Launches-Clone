import Link from "next/link";
import React, { Component } from "react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "LATEST", href: "/latest" },
  { name: "BRANDS", href: "/brands" },
  { name: "CLOTHING", href: "/clothing" },
  { name: "FOOTWEAR", href: "/footwear" },
  { name: "ACCESSORIES", href: "/accessories" },
  { name: "LIFESTYLE", href: "/lifestyle" },
  { name: "END. ACTIVE", href: "/end-active" },
  { name: "SALE", href: "/sale" },
  { name: "LAUNCHES", href: "/launches" },
  { name: "FEATURES", href: "/features" },
];

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="flex justify-center border-y-[1px] font-bold text-[11px] border-gray-200 ">
          {navItems.map((item, index) => (
            <li
              className={`py-4 px-3  ${index === 7 ? "text-red-600" : ""}`}
              key={item.href}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
