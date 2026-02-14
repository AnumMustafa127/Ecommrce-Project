import React from 'react';

const Card = () => {
    return (
        <div className="flex flex-wrap items-center justify-between bg-white p-3 rounded-md shadow-sm gap-2 w-full border border-gray-200">

            {/* Left Text */}
            <div className="text-gray-800 font-medium whitespace-nowrap">
                12,911 items in <span className="font-semibold">Mobile accessory</span>
            </div>

            {/* Verified Checkbox */}
            <label className="flex items-center gap-1 text-gray-700 whitespace-nowrap">
                <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                Verified only
            </label>

            {/* Featured Dropdown */}
            <select className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option>Featured</option>
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
            </select>

            {/* View Toggle Buttons */}
            <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">Horizontal</button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-100">Vertical</button>
            </div>
        </div>
    );
};

export default Card;
