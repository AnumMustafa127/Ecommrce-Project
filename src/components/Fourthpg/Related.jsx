import React from 'react'
import c6 from '../../assets/c1.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img10 from '../../assets/img10.jpg'
const Related = () => {
    const list = [
     {img: c6, head: 'Leather pocket purse for men', price: '$32.00-$40.00'},
     {img: img8, head: 'Electric smart watch', price: '$32.00-$40.00'},
     {img: img9, head: 'Original Headset Xiaomi', price: '$32.00-$40.00'},
     {img: img6, head: 'Xiaomi Digital Camera Original ', price: '$32.00-$40.00'},
     {img: img7, head: 'Samsung Laptop 12 GB RAM', price: '$320.00-$400.00'},
     {img: img10, head: 'Electric Juicer Original ', price: '$32.00-$40.00'},
    ]
  return (
    <>
    <div className='text-black text-lg mr-3 font-medium'>Related items</div>
   <section className='w-full flex p-2 gap-2 flex-wrap md:flex-nowrap items-center justify-center'>
    {list.map((item)=>{
        return<>
            <div className='flex flex-col border shadow-lg p-2'>
                <img src={item.img} className='w-4/5 h-auto' alt="" />
                <div className='w-3/4 text-lg font-medium'>{item.head}</div>
                <div>{item.price}</div>
            </div>
        </>
    })}
   </section>
   </>
  )
}

export default Related