import React, { Component, ChangeEvent } from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

interface FooterState {
  email: string;
}

export default class Footer extends Component<{}, FooterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    const { email } = this.state;

    return (
      <div className="flex flex-col items-center">
        <div className="border-t-2 w-full">
          <div className="max-w-screen-lg mx-auto">
            <div className="flex justify-between mt-16 h-44">
              <div>
                <p className="font-[500] text-xl mb-8">
                  SIGN UP TO THE END. MENSWEAR MAILING LIST
                </p>
                <p className="text-sm w-72">
                  Sign up for exclusive early sale access and tailored new
                  arrivals
                </p>
              </div>
              <div>
                <p className="text-sm font-[500] ">EMAIL ADDRESS</p>
                <div className="flex ">
                  <input
                    type="text"
                    className="border-b border-gray-300 focus:outline-none w-80"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <button
                    className={`ml-6 px-5 py-2 font-[500] ${
                      email
                        ? "bg-black text-white"
                        : "bg-gray-300 text-gray-500"
                    } `}
                    disabled={!email}
                  >
                    SIGN UP
                  </button>
                </div>
                <div className="flex mt-8 text-xl ">
                  <FiInstagram className="mr-4"></FiInstagram>
                  <FiTwitter className="mr-3"></FiTwitter>
                  <FiFacebook></FiFacebook>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 w-full">
          <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex justify-between">d</div>
          </div>
        </div>
        <div className="border-t-2 w-full">
          <div className="max-w-screen-lg mx-auto px-4">
            <div className="flex justify-between">f</div>
          </div>
        </div>
      </div>
    );
  }
}
