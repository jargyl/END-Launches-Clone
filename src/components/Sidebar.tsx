import React, { Component } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

class Sidebar extends Component<SidebarProps> {
  render() {
    const { isOpen, toggleSidebar } = this.props;

    return (
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={toggleSidebar}
          >
            Close
          </button>
          {/* Sidebar content */}
          <ul className="p-8">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
