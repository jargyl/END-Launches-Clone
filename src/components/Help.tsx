import React, { Component } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdSearch } from "react-icons/md";
import { VscChromeMinimize } from "react-icons/vsc";

interface HelpButtonState {
  isOpen: boolean;
}

export default class HelpButton extends Component<{}, HelpButtonState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleHelpDialog = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div className="fixed bottom-4 right-4">
        <button
          className="bg-black text-white  py-2.5 px-4 rounded-full flex items-center gap-1.5"
          onClick={this.toggleHelpDialog}
        >
          <AiOutlineQuestionCircle size={24} />
          <p className="text-xs font-bold">Help</p>
        </button>
        <div
          className={`fixed bottom-4 right-4 w-80 bg-white border border-gray-200 rounded-lg shadow-xl transition-opacity duration-300 overflow-hidden text-[14px] ${
            this.state.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="bg-black flex justify-center items-center relative">
            <p className=" py-3 text-white">Help</p>
            <VscChromeMinimize
              className="text-white flex-1 absolute right-3 text-lg cursor-pointer"
              onClick={this.toggleHelpDialog}
            />
          </div>
          <div className="m-4 relative">
            <MdSearch className="absolute top-3 text-xl left-3 text-gray-400" />
            <input
              autoFocus
              type="text"
              placeholder="How can we help?"
              className="w-full flex-grow py-2 pl-9 border-[1px] rounded border-black focus:shadow-md"
            />
          </div>
        </div>
      </div>
    );
  }
}
