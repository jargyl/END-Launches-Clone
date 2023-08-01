import React, { Component, ChangeEvent } from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { BiCreditCard } from "react-icons/bi";
import { MdExpandMore, MdMinimize } from "react-icons/md";

interface FooterState {
  email: string;
  expandedCategories: string[];
  isMobile: boolean;
}

export default class Footer extends Component<{}, FooterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      expandedCategories: [],
      isMobile: false,
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value,
    });
  };

  toggleCategory = (category: string) => {
    this.setState((prevState) => ({
      expandedCategories: prevState.expandedCategories.includes(category)
        ? prevState.expandedCategories.filter((item) => item !== category)
        : [...prevState.expandedCategories, category],
    }));
  };

  render() {
    const { email, expandedCategories, isMobile } = this.state;

    const categories = [
      {
        name: "ABOUT",
        subcategories: [
          "Our Purpose",
          "Careers",
          "Affiliates",
          "Press",
          "Stores",
        ],
      },
      {
        name: "CUSTOMER SERVICE",
        subcategories: [
          "Help",
          "Shipping",
          "Returns",
          "Payments",
          "Your Order",
        ],
      },
      {
        name: "CONTACT US",
        subcategories: ["+44 (0)333 323 7728", "Email us"],
      },
    ];

    return (
      <div className="flex flex-col items-center">
        <div className="border-t-2 w-full mb-12 md:mb-0">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col justify-between mt-16 mx-5 md:flex-row md:h-44">
              <div className="mb-4 text-center md:text-start md:mb-0 md:mr-8">
                <p className="font-[500] text-xl mb-8">
                  SIGN UP TO THE END. MENSWEAR MAILING LIST
                </p>
                <p className="text-sm md:w-72">
                  Sign up for exclusive early sale access and tailored new
                  arrivals
                </p>
              </div>
              <div>
                <p className="text-sm font-[500] ">EMAIL ADDRESS</p>
                <div className="flex flex-col md:flex-row">
                  <input
                    type="text"
                    className="border-b border-gray-300 focus:outline-none w-80"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <button
                    className={`md:ml-6 mt-3 px-5 py-2 font-[500] ${
                      email
                        ? "bg-black text-white"
                        : "bg-gray-300 text-gray-500"
                    } `}
                    disabled={!email}
                  >
                    SIGN UP
                  </button>
                </div>
                <div className="flex justify-center md:justify-start mt-8 text-xl ">
                  <FiInstagram className="mr-4"></FiInstagram>
                  <FiTwitter className="mr-3"></FiTwitter>
                  <FiFacebook></FiFacebook>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isMobile ? (
          <div className="border-t-2 w-full">
            <div className="max-w-screen-2xl text-center mx-auto">
              <div className="flex flex-col justify-between mb-14">
                {categories.map((category) => (
                  <div key={category.name} className="relative border-b-[1px] ">
                    {expandedCategories.includes(category.name) ? (
                      <MdMinimize className="absolute right-2 top-3" />
                    ) : (
                      <MdExpandMore className="absolute right-2 top-4" />
                    )}
                    <p
                      className="text-sm font-[500] cursor-pointer py-3"
                      onClick={() => this.toggleCategory(category.name)}
                    >
                      {category.name}
                    </p>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedCategories.includes(category.name)
                          ? "max-h-[10rem]"
                          : "max-h-0"
                      }`}
                    >
                      {category.subcategories.map((subcategory) => (
                        <p
                          className="text-sm my-4 text-gray-500"
                          key={subcategory}
                        >
                          {subcategory}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-3 mb-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-black text-white rounded-lg h-10 w-10 flex items-center justify-center">
                    <p className="text-xs font-bold"> END.</p>
                  </div>
                  <p className="text-sm font-[500] ml-1">Our Apps</p>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="border rounded-lg h-10 w-10 flex items-center justify-center">
                    <BiCreditCard className="text-xl" />
                  </div>
                  <p className="text-sm font-[500] ml-1">Gift Cards</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="border-t-2 w-full">
            <div className="max-w-screen-2xl mx-auto">
              <div className="flex justify-between my-14 mx-5 h-44">
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
        )}

        <div className="border-t-2 w-full ">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex md:flex-row flex-col justify-between mx-5 mb-5 h-44">
              <div className="flex md:flex-row flex-col items-center gap-5">
                <p className="text-xl font-bold">END.</p>
                <p className="text-xs">Terms & Conditions</p>
                <p className="text-xs">Privacy Policy</p>
                <p className="text-xs">Other Policies</p>
              </div>
              <div className="flex justify-center md:justify-start items-center gap-5">
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
