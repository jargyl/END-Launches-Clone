import React, { Component } from "react";
import { MdClose } from "react-icons/md";
import SidebarNavigation from "./SidebarNavigation";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

type SidebarState = {
  selectedLink: string;
};

class Sidebar extends Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props);
    this.state = {
      selectedLink: "men",
    };
  }

  componentDidMount() {
    const storedGender = localStorage.getItem("selectedLink");
    if (storedGender) {
      this.setState({ selectedLink: storedGender });
    }
  }

  handleLinkClick = (link: string) => {
    this.setState({ selectedLink: link });
    localStorage.setItem("selectedLink", link);
  };

  render() {
    const { isOpen, toggleSidebar } = this.props;
    const { selectedLink } = this.state;

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
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={toggleSidebar}
          >
            <MdClose />
          </button>

          <div className="flex justify-center items-center h-12">
            <h1 className="text-2xl cursor-pointer select-none">END.</h1>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex w-full h-14 justify-center text-xs border-[1px]">
              <div
                className={`${
                  selectedLink === "men"
                    ? "bg-white"
                    : "bg-slate-100 text-gray-600 shadow-inner"
                } flex items-center justify-center w-full border-r-[1px] cursor-pointer`}
                onClick={() => this.handleLinkClick("men")}
              >
                <a>MEN</a>
              </div>
              <div
                className={`${
                  selectedLink === "women"
                    ? "bg-white"
                    : "bg-slate-100 text-gray-600 shadow-inner"
                } flex items-center justify-center w-full cursor-pointer`}
                onClick={() => this.handleLinkClick("women")}
              >
                <a>WOMEN</a>
              </div>
            </div>
          </div>
          <SidebarNavigation />
        </div>
      </div>
    );
  }
}

export default Sidebar;
