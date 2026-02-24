import React from 'react'
import c1 from '../../assets/c1.jpg'
import c5 from '../../assets/c5.jpg'
import lamp5 from '../../assets/6.jpg'
import p1 from '../../assets/payment.png'
import p2 from '../../assets/payment1.png'
import p3 from '../../assets/payment2.png'
import p4 from '../../assets/payment3.png'
import p5 from '../../assets/payment4.png'
import { useNavigate } from 'react-router-dom'
const Main = () => {
  const navigate = useNavigate()
  const payment = [
    { img: p1 },
    { img: p2 },
    { img: p3 },
    { img: p4 },
    { img: p5 },
  ]
  const list = [
    { img: c1, head: 'T-shirts with multiple colors, for men and lady', size: 'Size: medium, Color: blue,  Material: Plastic', seller: 'Artel Market', price: '$78.99', qnt: '3' },
    { img: c5, head: 'T-shirts with multiple colors, for men and lady', size: 'Size: medium, Color: blue,  Material: Plastic', seller: 'Artel Market', price: '$78.99', qnt: '3' },
    { img: lamp5, head: 'T-shirts with multiple colors, for men and lady', size: 'Size: medium, Color: blue,  Material: Plastic', seller: 'Artel Market', price: '$78.99', qnt: '3' },
  ]
  return (
    <main className='flex w-full gap-2  flex-col md:flex-row'>
      <div className=' md:w-3/4 '>
        {list.map((item) => {
          return <>
            <div className='flex justify-between flex-col sm:flex-row items-center p-3 border shadow-gray-700 shadow-lg'>
              <div className='first flex items-center'>
                <img className='max-h-32 w-auto' src={item.img} alt="" />
                <div className='flex flex-col gap-1 w-2/4'>
                  <h2 className='text-black font-medium text-lg'>{item.head}</h2>
                  <h2 className='text-gray-500'>size: {item.size}</h2>
                  <h2 className='text-gray-500'>seller: {item.seller}</h2>
                  <div className='flex gap-1 flex-col md:flex-row'>
                    <button className='shadow-md font-medium shadow-gray-700 text-red-600 border p-2 rounded-md '>Remove</button>
                    <button className='shadow-md font-medium shadow-gray-700 text-blue-600 border p-2 rounded-md '>Save for Later</button>
                  </div>
                </div>
              </div>
              <div className='second flex flex-col gap-4'>
                <h2>{item.price}</h2>
                <select className='border shadow-sm p-1 border-gray-400 rounded-md' name="qnt" id="">
                  <option value="">quantity: {item.qnt}</option>
                </select>
              </div>
            </div>

          </>
        })}
        <div className='flex flex-col sm:flex-row gap-2'>
          <button onClick={()=>{navigate(-1)}} className='bg-blue-600 mt-3 text-white p-3 rounded-md'>⬅ Back To Shop</button>
          <button className='text-blue-600 font-medium border border-gray-600 p-3 mt-3 shadow-md rounded-md'>Remove all</button>
        </div>
      </div>

      <div className='flex justify-start border border-green-600 w-full md:justify-center md:w-1/4 gap-4 p-3 flex-col'>
        <div className='border shadow-md shadow-gray-500 p-3 h-1/5 flex flex-col  gap-2'>
          <h1 className='text-gray-700 font-medium text-start'>Have a coupon?</h1>
          <div>
            <input className='border p-2' type="text" name="" placeholder='Add Coupon' id="" />
            <button className='border font-medium text-blue-700 p-2 rounded-md'>Apply</button>
          </div>
        </div>

        <div className='border shadow-md shadow-gray-500 p-3 h-3/5 flex flex-col  gap-2'>
          <div className='flex justify-between'>
            <h2>Sub Total</h2>
            <h2>$1403.97</h2>
          </div>
          <div className='flex justify-between'>
            <h2>Discount</h2>
            <h2 className='text-red-600 font-medium'>-$60.00</h2>
          </div>
          <div className='flex justify-between'>
            <h2>Tax</h2>
            <h2 className='text-green-700 font-medium'>+$14.00</h2>
          </div>
          <hr />
          <div>
            <div className='font-bold text-xl flex justify-between'>
              <h2>Total</h2>
              <h2>$1357.96</h2>
            </div>
          </div>
          <button className='bg-green-600 text-center text-white p-2 rounded-md'>Checkout</button>
          <div className='flex gap-1 justify-center mt-2'>
            {payment.map((item) => {
              return <img src={item.img} />
            })}
          </div>
        </div>

      </div>
    </main>
  )
}

export default Main