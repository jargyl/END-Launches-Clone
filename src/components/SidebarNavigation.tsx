import React, { Component } from "react";

export default class SidebarNavigation extends Component {
  render() {
    return (
      <div className="flex justify-center items-center">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
