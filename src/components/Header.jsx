import React from 'react'
import logoSymbol from '../assets/logoSymbol.png'
import comment from '../assets/comment.png'
import heart from '../assets/heart.png'
import shoppingcart from '../assets/shoppingcart.png'
import user from '../assets/user.png'
import "./Header.css";
const Header = () => {
    return (
        <header className='flex md:flex-row flex-col gap-2 justify-between items-center'>
            <div className="flex flex-col ">
                <img src={logoSymbol} alt="" className='p-3' />
                <p className=' text-blue-500 text-lg font-bold'>Brand</p>
            </div>
            <div className=" w-full md:w-1/2 flex flex-col md:flex-row items-center gap-3 border-2 border-blue-500 rounded-lg p-2 ">
                <input type="text" placeholder='Search' className='w-full md:w-2/3 p-2 outline-none ' />
                <div className='flex flex-wrap md:flex-nowrap'>
                    <select name="category" className='w-full md:w-auto p-2 '>
                        <option value="">All Category</option>
                        <option value="">Cloth & wear</option>
                        <option value="">Home interior</option>
                        <option value="">Computer and Tech</option>
                        <option value="">Tools, equipments</option>
                        <option value="">Automobile</option>
                        <option value="">Sports and outdoor</option>
                        <option value="">Animal and Pets</option>
                        <option value="">Machinery tools</option>
                        <option value="">More Category</option>
                    </select>
                    <button className=' w-full md:w-1/3 bg-blue-500 text-white rounded p-2'>Search</button>
                </div>
            </div>
            <div className="items flex justify-between md:justify-evenly gap-3 w-full md:w-3/12 font-semibold flex-wrap md:flex-nowrap">
                <div className='flex flex-col items-center'>
                    <img className='item ' src={user} alt="" />
                    <h1>Profile</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='item' src={comment} alt="" />
                    <h1>Message</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='item' src={heart} alt="" />
                    <h1>Order</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img className='item' src={shoppingcart} alt="" />
                    <h1>My Cart</h1>
                </div>
            </div>
        </header>
    )
}

export default Header

