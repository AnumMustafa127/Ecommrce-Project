import React from 'react'
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
import c4 from '../assets/c4.jpg'
import c5 from '../assets/c5.jpg'
import c6 from '../assets/c6.jpg'
import c7 from '../assets/c7.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
import pic3 from '../assets/3.jpg'
import { Navigate ,useNavigate } from 'react-router-dom'

const Section = () => {
    const navigate = useNavigate()
  return (
   <section className='bg-[#e8e6e6] '>
    <div className='flex flex-wrap  justify-center gap-3 m-2'>
        {/* card1 */}
        <div className='bg-white p-2 '>
            <img onClick={()=>{navigate('/Fourth')}} className='cursor-pointer' src={c1} alt="" />
            <h1 className='font-bold'>$10.30</h1>
            <p className='text-gray-500 w-10/12'>T shirt with multiple colors, for men</p>
        </div>
        {/* card2 */}
        <div className='bg-white p-2'>
            <img src={c3} alt="" />
            <h1 className='font-bold'>$10.30</h1>
            <p className='text-gray-500 w-10/12'>Brown winter coat medium size</p>
        </div>
        {/* card3 */}
        <div className='bg-white p-2 '>
            <img src={c7} alt="" />
            <h1 className='text-bold'>$10.30</h1>
            <p className='text-gray-500 w-10/12'>cannon camera black, 100x zoom</p>
        </div>
        {/* card4 */}
        <div className='bg-white p-2'>
            <img src={c6} alt="" />
            <h1 className='font-bold'>$10.30</h1>
            <p className='text-gray-500 w-10/12'>Blue wallet for men leather material</p>
        </div>
        {/* card5 */}
        <div className='bg-white p-2'>
            <img src={c5} alt="" />
            <h1 className='font-bold'>$10.30</h1>
            <p className='text-gray-500 w-10/12'>Jeans Bag for travel for men</p>
        </div>

        {/* card1 */}
        <div className='bg-white p-2'>
            <img src={c4} alt="" />
            <h1 className='font-bold'>$10.30</h1>
            <p className='text-gray-500 w-10/12'>Jeans shorts for men blue color</p>
        </div>
        {/* card2 */}
        <div className='bg-white p-2'>
            <img src={img9} alt="" />
            <h1 className='font-bold'>$10.30</h1>
            <p className='text-gray-500 w-10/12'> Headset for gaming with mic</p>
        </div>
        {/* card3 */}
        <div className='bg-white p-2'>
            <img src={c5} alt="" />
            <h1 className='font-bold'>$12.30</h1>
            <p className='text-gray-500 w-10/12'>Jeans bag for travel for men</p>
        </div>
        {/* card4 */}
        <div className='bg-white p-2'>
            <img src={pic3} alt="" />
            <h1 className='font-bold'>$99.45</h1>
            <p className='text-gray-500 w-10/12'>Blue wallet for men leather</p>
        </div>
        {/* card5 */}
        <div className='bg-white p-2'>
            <img src={img10} alt="" />
            <h1 className='font-bold'>$80.93</h1>
            <p className='text-gray-500 w-10/12'>Jeans bag for travel for men</p>
        </div>
    
</div>
   </section>
  )
}

export default Section