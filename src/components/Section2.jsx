import React from 'react'
import group1 from '../assets/group1.png'
import group2 from '../assets/group2.png'
import group3 from '../assets/group3.png'
import group4 from '../assets/group4.png'
import search from '../assets/search.png'

const Section2 = () => {
    return (
        <section className='flex justify-evenly flex-wrap lg:flex-nowrap '>
            {/* card 1 */}
            <div className='border border-grey-600 rounded-xl relative p-1 flex flex-col justify-center gap-2'>
                <img src={group1} alt="background" className='object-cover' />

                <p className='w-3/5'>Source from industry Hubs</p>
                <button className='bg-blue-100 rounded-full p-2 absolute bottom-10 right-1'>
                    <img src={search} alt="" className='w-5 h-5' />
                </button>
            </div>
            {/* card 2 */}
            <div className='border border-grey-600 rounded-xl relative p-1 flex flex-col justify-center gap-2'>
                <img src={group2} alt="background" className='object-cover' />

                <p className='w-3/5'>Customize your Product</p>
                <button className='bg-blue-100 rounded-full p-2 absolute bottom-10 right-1'>
                    <img src={search} alt="" className='w-5 h-5' />
                </button>
            </div>

            {/* card 3 */}
            <div className='border border-grey-600 rounded-xl relative p-1 flex flex-col justify-center gap-2'>
                <img src={group3} alt="background" className='object-cover' />

                <p className='w-3/5'>fast reliable shipping by oceans or air</p>
                <button className='bg-blue-100 rounded-full p-2 absolute bottom-10 right-1'>
                    <img src={search} alt="" className='w-5 h-5' />
                </button>
            </div>
            {/* card 4 */}
            <div className='border border-grey-600 rounded-xl relative p-1 flex flex-col justify-center gap-2'>
                <img src={group4} alt="background" className='object-cover' />

                <p className='w-3/5'>Product monitoring and inspection</p>
                <button className='bg-blue-100 rounded-full p-2 absolute bottom-10 right-1'>
                    <img src={search} alt="" className='w-5 h-5' />
                </button>
            </div>
        </section >
    )
}

export default Section2