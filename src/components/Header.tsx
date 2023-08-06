import React, { Component } from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";

type HeaderState = {
  selectedLink: string;
  isMobile: boolean;
  isSidebarOpen: boolean;
};

export default class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedLink: "men",
      isMobile: false,
      isSidebarOpen: false,
    };
  }

  componentDidMount() {
    const storedGender = localStorage.getItem("selectedLink");
    if (storedGender) {
      this.setState({ selectedLink: storedGender });
    }

    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  handleLinkClick = (link: string) => {
    this.setState({ selectedLink: link });
    localStorage.setItem("selectedLink", link);
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  render() {
    const { selectedLink, isMobile, isSidebarOpen } = this.state;
    return (
      <div className="px-5">
        <div className="flex justify-between relative items-center py-4 font-bold w-full max-w-screen-2xl mx-auto h-12">
          {isMobile && (
            <>
              <button onClick={this.toggleSidebar}>
                <AiOutlineMenu />
              </button>
              <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={this.toggleSidebar}
              />
            </>
          )}
          {!isMobile && (
            <div className="justify-center gap-3 text-xs text-stone-400 hidden md:flex">
              <a
                className={`${
                  selectedLink === "men" ? "text-black" : "hover:text-black"
                } hover:cursor-pointer`}
                onClick={() => this.handleLinkClick("men")}
              >
                MEN
              </a>
              <a
                className={`${
                  selectedLink === "women" ? "text-black" : "hover:text-black"
                } hover:cursor-pointer`}
                onClick={() => this.handleLinkClick("women")}
              >
                WOMEN
              </a>
            </div>
          )}
          <h1 className="absolute left-1/2 translate-x-[-50%] text-3xl cursor-pointer select-none">
            END.
          </h1>
          {!isMobile && <CgProfile className="text-lg cursor-pointer" />}
        </div>
      </div>
    );
  }
}
