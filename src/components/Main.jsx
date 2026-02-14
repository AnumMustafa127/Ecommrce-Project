import React from 'react'
import banner from '../assets/banner.png'
import user from '../assets/user.png'
import './Header.css'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import group969 from '../assets/group 969.png'
import pic1 from '../assets/1.jpg'
import pic2 from '../assets/2.jpg'
import pic3 from '../assets/3.jpg'
import pic4 from '../assets/4.jpg'
import pic5 from '../assets/5.jpg'
import pic6 from '../assets/6.jpg'
import pic7 from '../assets/7.jpg'
import pic8 from '../assets/8.jpg'
import pic9 from '../assets/9.jpg'
import pic10 from '../assets/10.jpg'
import leftside from '../assets/left-side.png'


const Main = () => {
    return (
        <main className=''>
            <section id='1' className='flex md:flex-row flex-col m-4 border-[#DEE2E7] bg-[#e8e6e6]  justify-evenly rounded-lg'>

                <div className='flex flex-wrap  border  p-4 font-serif min-w-fit'>
                    <ul className="flex underline md:no-underline flex-row md:flex-col flex-wrap gap-3 md:gap-1.5">
                        <li>All Category</li>
                        <li>Cloth & wear</li>
                        <li>Home interior</li>
                        <li>Computer and Tech</li>
                        <li>Tools, equipments</li>
                        <li>Automobile</li>
                        <li>Sports and outdoor</li>
                        <li>Animal and Pets</li>
                        <li>Machinery tools</li>
                        <li>More Category</li>
                    </ul>
                </div>
                <div>
                    <img src={banner} alt="" className='max-h-lvh' />
                </div>
                <div className=' flex flex-col item-center p-3 gap-3 w-auto'>
                    <div className='flex flex-col justify-center  bg-[#E3F0FF]  p-3 gap-2 rounded-md'>
                        <div className='flex h-fit items-center justify-center gap-2 rounded-lg text-lg'>
                            <img src={user} alt="" className='item ' />
                            <p>Hi, user let's get started</p>
                        </div>
                        <button className='bg-[#127FFF] text-white p-1'>Join Now</button>
                        <button className='text-[#127FFF] bg-white p-1'>Log in</button>
                    </div>
                    <div className='bg-[#F38332] text-white p-2 rounded-md'>Get $10 off with a new supplier</div>
                    <div className='bg-[#55BDC3] text-white p-2 rounded-md'>Send quotes with supplier preferences</div>
                </div>
            </section>


            <section id='2' className=' flex flex-wrap md:flex-nowrap items-center justify-center mr-4 ml-4 border-[#DEE2E7] bg-[#e8e6e6] rounded-lg'>
                <div className='flex flex-col justify-center min-h-full m-3  max-w-fit p-3 rounded-md gap-2'>
                    <h1 className='font-bold font-sans text-lg'>Deals And Offers</h1>
                    <p>hygene equipments</p>
                    <div className='flex gap-2 '>
                        <span className='bg-red-400 border border-l-pink-950 rounded-md p-2'>04 Days</span>
                        <span className='bg-red-400 border border-l-pink-950 rounded-md p-2'>13 Hour</span>
                        <span className='bg-red-400 border border-l-pink-950 rounded-md p-2'>34 Min</span>
                        <span className='bg-red-400 border border-l-pink-950 rounded-md p-2'>56 Sec</span>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center  min-h-full max-w-fit '>
                    <img src={img8} alt="" className='w-4/6 h-auto mt-2' />
                    <p>Smart Watches</p>
                    <button className='bg-red-200 border  text-red-700 pl-3 pr-3 rounded-xl'>-25%</button>
                </div>
                <div className='flex flex-col justify-center items-center  min-h-full max-w-fit '>
                    <img src={img7} alt="" className='w-4/6 h-auto mt-2' />
                    <p>laptops</p>
                    <button className='bg-red-200 border  text-red-700 pl-3 pr-3 rounded-xl'>-15%</button>
                </div>

                <div className='flex flex-col justify-center items-center  min-h-full max-w-fit '>
                    <img src={img6} alt="" className='w-4/6 h-auto mt-2' />
                    <p>GPro Camera</p>
                    <button className='bg-red-200 border  text-red-700 pl-3 pr-3 rounded-xl'>-40%</button>
                </div>

                <div className='flex flex-col justify-center items-center  min-h-full max-w-fit '>
                    <img src={img5} alt="" className='w-4/6 h-auto mt-2' />
                    <p>headphones</p>
                    <button className='bg-red-200 border  text-red-700 pl-3 pr-3 rounded-xl'>-25%</button>
                </div>

                <div className='flex flex-col justify-center items-center  min-h-full max-w-fit '>
                    <img src={img3} alt="" className='w-4/6 h-auto mt-2' />
                    <p>Cannon cameras</p>
                    <button className='bg-red-200 border  text-red-700 pl-3 pr-3 rounded-xl'>-25%</button>
                </div>
            </section>


            <section id="3" className="min-h-[40vh] flex flex-col md:flex-row flex-wrap items-start justify-center m-4 border border-[#DEE2E7] bg-[#e8e6e6] rounded-lg p-4 gap-4">

                {/* Left Big Card */}
                <div className="relative w-full md:w-1/3 rounded-md overflow-hidden h-96">
                    <img src={group969} alt="" className="w-full h-full object-cover rounded-md" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/20 text-center p-4">
                        <p className="text-lg sm:text-xl font-semibold text-white">Home and Outdoor</p>
                        <button className="mt-2 px-4 py-2 bg-white rounded-md text-sm sm:text-base">
                            Source Now
                        </button>
                    </div>
                </div>

                {/* Right Grid of Small Cards */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="relative flex flex-col border bg-white rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Soft Chairs</h1>
                            <p className="text-sm text-gray-600">From USD 19</p>
                        </div>
                        <img src={pic1} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-white flex flex-col border rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Sofa and Chair</h1>
                            <p className="text-sm text-gray-600">From USD 19</p>
                        </div>
                        <img src={pic6} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-white flex flex-col border  rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Kitchen Chair</h1>
                            <p className="text-sm text-gray-600">From USD 19</p>
                        </div>
                        <img src={pic5} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 4 */}
                    <div className="relative bg-white flex flex-col border rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Smart Dishes</h1>
                            <p className="text-sm text-gray-600">From USD 19</p>
                        </div>
                        <img src={pic3} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 5 */}
                    <div className="relative bg-white flex flex-col border rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Kitchen Mixer</h1>
                            <p className="text-sm text-gray-600">From USD 100</p>
                        </div>
                        <img src={pic9} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 6 */}
                    <div className="relative bg-white flex flex-col border  rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Blenders</h1>
                            <p className="text-sm text-gray-600">From USD 39</p>
                        </div>
                        <img src={pic8} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 7 */}
                    <div className="relative bg-white flex flex-col border  rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Home Appliances</h1>
                            <p className="text-sm text-gray-600">From USD 19</p>
                        </div>
                        <img src={pic7} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 8 */}
                    <div className="relative bg-white flex flex-col border  rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Coffee Maker</h1>
                            <p className="text-sm text-gray-600">From USD 10</p>
                        </div>
                        <img src={pic4} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                </div>

            </section>


            <section id="4" className="min-h-[40vh] flex flex-col md:flex-row flex-wrap items-start justify-center m-4 border border-[#DEE2E7] bg-[#e8e6e6] rounded-lg p-4 gap-4">

                {/* Left Big Card */}
                <div className="relative w-full md:w-1/3 rounded-md overflow-hidden h-96">
                    <img src={leftside} alt="" className="w-full h-full object-contain rounded-md" />
                </div>

                {/* Right Grid of Small Cards */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="relative flex flex-col border bg-white rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Smart Watches</h1>
                            <p className="text-sm text-gray-600">From USD 19</p>
                        </div>
                        <img src={img8} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 2 */}
                    <div className="relative bg-white flex flex-col border rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Cameras</h1>
                            <p className="text-sm text-gray-600">From USD 89</p>
                        </div>
                        <img src={img6} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 3 */}
                    <div className="relative bg-white flex flex-col border  rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">headphones</h1>
                            <p className="text-sm text-gray-600">From USD 19</p>
                        </div>
                        <img src={img9} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 4 */}
                    <div className="relative bg-white flex flex-col border rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Smart Watches</h1>
                            <p className="text-sm text-gray-600">From USD 19</p>
                        </div>
                        <img src={img10} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 5 */}
                    <div className="relative bg-white flex flex-col border rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Gaming Set</h1>
                            <p className="text-sm text-gray-600">From USD 89</p>
                        </div>
                        <img src={img5} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 6 */}
                    <div className="relative bg-white flex flex-col border  rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Laptops and PCs</h1>
                            <p className="text-sm text-gray-600">From USD 39</p>
                        </div>
                        <img src={img7} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 7 */}
                    <div className="relative bg-white flex flex-col border  rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Smart Phones</h1>
                            <p className="text-sm text-gray-600">From USD 90</p>
                        </div>
                        <img src={img2} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>

                    {/* Card 8 */}
                    <div className="relative bg-white flex flex-col border  rounded-md p-2 h-48 justify-between">
                        <div>
                            <h1 className="font-semibold">Electric kettle</h1>
                            <p className="text-sm text-gray-600">From USD 10</p>
                        </div>
                        <img src={img1} alt="" className="w-16 h-16 rounded absolute bottom-2 right-2" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main
