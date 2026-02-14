import React from 'react'
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img5 from "../../assets/img5.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

const Mainthird = () => {
  const products = [
    {img: img1, price: 99.50 , oldprice: 1129.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"},
     {img: img2, price: 93.50 , oldprice: 1123.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"},
     {img: img3, price: 93.50 , oldprice: 1123.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"},
     {img: img1, price: 93.50 , oldprice: 1123.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"},
     {img: img5, price: 93.50 , oldprice: 1123.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"},
     {img: img9, price: 93.50 , oldprice: 1123.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"},
     {img: img7, price: 93.50 , oldprice: 1123.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"},
     {img: img8, price: 93.50 , oldprice: 1123.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"},
     {img: img9, price: 93.50 , oldprice: 1123.88, rating: 7.3, title: 'Go Pro Hero6 4K Action', desc: "Camera - Black"}
  ]
  return (
    <main className='flex flex-wrap items-center justify-center gap-4'>
      {products.map((products,index)=>{
          return(
            <div key={index} className='shadow-md shadow-gray-400 max-w-fit p-3 items-center justify-center flex flex-col'>
            <img src={products.img} alt="" />
            <div>
              <div className='flex justify-between'>
                <span>{products.price}</span>
                <span className='line-through text-gray-400'>{products.oldprice}</span>
              </div>
              <div className='flex gap-2'>
                <span className='text-yellow-600'>★★★★☆ </span>
                <span>{products.rating}</span>
              </div>
              <div className='w-4/5'>
                {products.title}
                {products.desc}
              </div>
            </div>
          </div>
          )
      })}
    </main>
  )
}

export default Mainthird