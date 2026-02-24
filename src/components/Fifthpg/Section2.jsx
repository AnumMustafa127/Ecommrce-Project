 import React from 'react'
import img2 from '../../assets/img2.jpg'
import img4 from '../../assets/img4.jpg'
import img8 from '../../assets/img8.jpg'
import img7 from '../../assets/img7.jpg'
import shop from '../../assets/shoppingcart.png'
const Section2 = () => {

    const list = [
        { img: img2, price: '$99.50', detail: 'GoPro HERO6 4K Action Camera - Black' },
        { img: img4, price: '$92.50', detail: 'GoPro HERO6 4K Action Camera - Black' },
        { img: img8, price: '$34.50', detail: 'GoPro HERO6 4K Action Camera - Black' },
        { img: img7, price: '$312.50', detail: 'GoPro HERO6 4K Action Camera - Black' },
    ]
    return (
        <section className='flex flex-col md:flex-row items-center justify-evenly gap-3 m-3'>
            {list.map((item) => {
                return <>
               <div className='flex  md:flex-col w-full md:w-1/5'>
                     <div className='border shadow-lg '>
                        <img className='' src={item.img} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>{item.price}</h1>
                        <h2 className='text-gray-400'>{item.detail}</h2>
                    </div>
                    <button className='border shadow-md text-blue-800'>
                        <div className='flex items-center justify-evenly font-medium p-1 rounded-md'>
                            <img className='h-4 w-auto' src={shop} alt="" />
                            <h2>Move to Cart</h2>
                        </div>
                    </button>
               </div>
                </>
            })}
        </section>
    )
}

export default Section2