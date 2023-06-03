import React, { Component, ChangeEvent } from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BiCreditCard } from "react-icons/bi";

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
          <div className="max-w-screen-lg mx-auto">
            <div className="flex justify-between my-14 h-44">
              <div>
                <p className="text-sm font-[500] mb-3">ABOUT</p>
                <p className="text-sm mb-2">Our Purpose</p>
                <p className="text-sm mb-2">Careers</p>
                <p className="text-sm mb-2">Affiliates</p>
                <p className="text-sm mb-2">Press</p>
                <p className="text-sm mb-2">Stores</p>
              </div>
              <div>
                <p className="text-sm font-[500] mb-3">CUSTOMER SERVICE</p>
                <p className="text-sm mb-2">Help</p>
                <p className="text-sm mb-2">Shipping</p>
                <p className="text-sm mb-2">Returns</p>
                <p className="text-sm mb-2">Payments</p>
                <p className="text-sm mb-2">Your Order</p>
              </div>
              <div>
                <p className="text-sm font-[500] mb-3">CONTACT US</p>
                <p className="text-sm mb-2">+44 (0)333 323 7728</p>
                <p className="text-sm mb-2">Email us</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-black text-white rounded-lg h-10 w-10 flex items-center justify-center">
                    <p className="text-xs font-bold"> END.</p>
                  </div>
                  <p className="text-sm font-[500] ml-2">Our Apps</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="border rounded-lg h-10 w-10 flex items-center justify-center">
                    <BiCreditCard className="text-xl" />
                  </div>
                  <p className="text-sm font-[500] ml-2">Gift Cards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 w-full">
          <div className="max-w-screen-lg mx-auto">
            <div className="flex justify-between h-44">
              <div className="flex items-center gap-5">
                <p className="text-xl font-bold">END.</p>
                <p className="text-xs">Terms & Conditions</p>
                <p className="text-xs">Privacy Policy</p>
                <p className="text-xs">Other Policies</p>
              </div>
              <div className="flex items-center gap-5">
                <img src="payment/visa.png" alt="visa" className="h-4" />
                <img
                  src="payment/mastercard.png"
                  alt="mastercard"
                  className="h-4"
                />
                <img src="payment/amex.png" alt="amex" className="h-4" />
                <img src="payment/paypal.png" alt="paypal" className="h-4" />
                <img src="payment/jcb.png" alt="jcb" className="h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
