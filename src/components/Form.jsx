import React from 'react'
import back from '../assets/group 982.png'

const Form = () => {
  return (
    <section className="relative w-full">

      {/* Background Image */}
      <img
        src={back}
        alt="background"
        className="w-full h-[420px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center">

        <div className="
      w-11/12 md:w-10/12 lg:w-9/12
      flex flex-col md:flex-row
      gap-6
    ">

          {/* LEFT TEXT */}
          <div className="text-white flex-1">
            <h1 className="text-2xl md:text-3xl font-semibold">
              An easy way to send requests to all suppliers
            </h1>
            <p className="mt-2 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-xl p-4 md:p-6 flex-1 shadow-lg">
            <h2 className="text-gray-800 font-semibold mb-3">
              Send quote to suppliers
            </h2>

            <input
              type="text"
              placeholder="What item you need?"
              className="w-full border rounded-md p-2 mb-3"
            />

            <textarea
              placeholder="Type more details"
              className="w-full border rounded-md p-2 mb-3"
            />

            <div className="flex gap-2 mb-3">
              <input
                type="number"
                placeholder="Quantity"
                className="w-full border rounded-md p-2"
              />
              <select className="border rounded-md p-2">
                <option>Pcs</option>
              </select>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md">
              Send inquiry
            </button>
          </div>

        </div>
      </div>
    </section>

  )
}

export default Form
