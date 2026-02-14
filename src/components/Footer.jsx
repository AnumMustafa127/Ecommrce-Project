import React from "react";
import logo from "../assets/logoSymbol.png";
import appstore from "../assets/market-button.png";
import playstore from "../assets/group.png";
import fb from "../assets/facebook3.png";
import tw from "../assets/fill 184.png";
import ln from "../assets/fill 209.png";
import ig from "../assets/combined shape.png";
import yt from "../assets/youtube/Combined shape.png";
import flag from "../assets/usa/icon.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-10 border-t">
      
      {/* TOP FOOTER */}
      <div className="
        w-11/12 lg:w-10/12 mx-auto
        grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6
        gap-8 py-10
      ">
        
        {/* BRAND */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-8 h-8" />
            <h1 className="text-blue-500 font-bold text-lg">Brand</h1>
          </div>

          <p className="text-sm text-gray-500">
            Best information about the companies here but now lorem ipsum is
          </p>

          <div className="flex gap-2">
            {[fb, tw, ln, ig, yt].map((icon, i) => (
              <button
                key={i}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
              >
                <img src={icon} alt="" className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>

        {/* COLUMN 1 */}
        <div>
          <h2 className="font-semibold mb-3">About</h2>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h2 className="font-semibold mb-3">Partnership</h2>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h2 className="font-semibold mb-3">Information</h2>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h2 className="font-semibold mb-3">For users</h2>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Orders</li>
          </ul>
        </div>

        {/* APP BUTTONS */}
        <div>
          <h2 className="font-semibold mb-3">Get app</h2>
          <div className="space-y-2">
            <img src={appstore} alt="appstore" className="w-32 cursor-pointer" />
            <img src={playstore} alt="playstore" className="w-32 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-100 py-4">
        <div className="
          w-11/12 lg:w-10/12 mx-auto
          flex flex-col sm:flex-row
          justify-between items-center
          gap-2 text-sm text-gray-600
        ">
          <p>© 2023 Ecommerce.</p>

          <div className="flex items-center gap-2 cursor-pointer">
            <img src={flag} alt="flag" className="w-5 h-5" />
            <span>English</span>
            <span>⌃</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;

