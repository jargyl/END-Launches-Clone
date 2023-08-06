import React, { Component } from "react";
import { MdNavigateBefore } from "react-icons/md";
import launches from "../../public/data/launches.json";

interface SidebarLaunchesPopupProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

export default class SidebarLaunchesPopup extends Component<SidebarLaunchesPopupProps> {
  render() {
    const { isOpen, toggleSidebar } = this.props;
    let key = 0;
    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div
          className={`fixed left-0 top-0 h-full w-full sm:w-[22rem] bg-white ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div
            className="flex items-center pl-2 h-12 border-b-[1px]"
            onClick={toggleSidebar}
          >
            <MdNavigateBefore className="mr-3" />
            <p className="font-[400] cursor-pointer select-none">Launches</p>
          </div>
          <div className="p-3 cursor-pointer">View Upcoming Launches</div>
          <div className="h-[calc(100vh-7rem)] overflow-y-auto font-[400] text-sm ">
            {launches.map((launch) => (
              <div key={key++} className="mb-8 cursor-pointer">
                <img src={launch.image} alt="" />
                <div className="ml-6">
                  <div>{launch.brand}</div>
                  <div className="text-neutral-400">{launch.model}</div>
                  <div>{launch.release_date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
