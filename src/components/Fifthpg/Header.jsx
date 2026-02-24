import React from 'react'
import logo from '../../assets/logoSymbol.png'
import user from '../../assets/user.png'
import comment from '../../assets/comment.png'
import heart from '../../assets/heart.png'
import shoppingcart from '../../assets/shoppingcart.png'
const Header = () => {
  return (
   <header className='flex md:flex-row flex-col gap-2 justify-between items-center'>
              <div className="flex flex-col ">
                  <img src={logo} alt="" className='p-3' />
                  <p className=' text-blue-500 text-lg font-bold'>Brand</p>
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
