import React, { Component } from "react";
import { CgProfile } from "react-icons/cg";

type HeaderState = {
  selectedLink: string;
};

export default class Header extends Component<{}, HeaderState> {
  constructor(props: {}) {
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
    const { selectedLink } = this.state;
    return (
      <div className="px-5">
        <div className="flex justify-between relative items-center py-4 font-bold w-full max-w-screen-lg mx-auto">
          <div className="flex justify-center gap-3 text-xs text-stone-400 ">
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
          <h1 className="absolute left-1/2 translate-x-[-50%] text-3xl  cursor-pointer select-none">
            END.
          </h1>
          <CgProfile className="text-lg cursor-pointer" />
        </div>
      </div>
    );
  }
}
