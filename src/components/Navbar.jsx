import React from 'react'
import menu from '../assets/menu.png'
import { Navigate, useNavigate  } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
 <nav className='flex flex-wrap border border-grey md:justify-between min-w-full'>
  <ul className='flex flex-wrap items-center'>
    <li><img src={menu} alt="" className='h-5 ' /></li>
    <li onClick={()=>{navigate(-1)}} className='rounded-xl p-2 cursor-pointer'>All Category</li>
    <li className='rounded-xl p-2'>Hot Offers</li>
    <li className='rounded-xl p-2'>Gift boxes</li>
    <li className='rounded-xl p-2'>Projects</li>
    <li className='rounded-xl p-2'>Menu items</li>
    <select name="help" id="">
        <option value="">Help</option>
    </select>
  </ul>
  <ul className='items-center flex'>
    <select name="" id="">
        <option value="">English, USD</option>
    </select>
    <select name="" id="">
        <option value="">Ship to🌏</option>
    </select>
  </ul>
 </nav>
  )
}

export default Navbar
