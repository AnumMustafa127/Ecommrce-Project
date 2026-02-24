import React from 'react'
import i1 from "../../assets/image 34.png";
import gallery from '../../assets/gallery.png'
import icon from '../../assets/icon.png'
import verify from '../../assets/verified_user.png'
import lang from '../../assets/language.png'
import fav from '../../assets/favorite_border.png'

const Main4 = () => {
  const arr = [
    { head: 'price', detail: 'Negotiatable' },
    { head: 'Type', detail: 'Classic T-Shirt' },
    { head: 'material', detail: 'Cotton' },
    { head: 'Design', detail: 'Modern Nice' },
    { head: 'Customization', detail: 'Customized logo and design custom packages' },
    { head: 'Protection', detail: 'Refund Policy' },
    { head: 'Warranty', detail: '2 years full Warranty' }
  ]

  return (
    <section className='bg-white shadow-lg rounded-lg p-3 m-2 
                        flex flex-col lg:flex-row gap-4'>

      {/* Images */}
      <div className="images w-full lg:w-1/4 border flex 
                      flex-row lg:flex-col gap-2 justify-center">
        <img src={i1} alt="" className='w-full lg:w-auto object-contain' />
        <img src={gallery} alt="" className='w-full lg:w-auto object-contain' />
      </div>

      {/* Product Info */}
      <div className='w-full lg:w-2/4 p-2'>
        <h1 className='text-green-600 font-semibold'>✔ In Stock</h1>

        <p className='text-black font-bold text-lg'>
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </p>

        {/* Rating */}
        <div className='text-gray-500 flex flex-wrap items-center gap-2 text-sm'>
          <span className="text-yellow-400">★★★★☆ 9.3</span>
          <span>○</span>
          <span>📩 32 Reviews</span>
          <span>○</span>
          <span>155 Sold</span>
        </div>

        {/* Pricing */}
        <div className='flex flex-col sm:flex-row 
                        justify-between bg-[#FFF0DF] gap-4 
                        mt-4 rounded-lg p-4 text-center sm:text-left'>

          {[1, 2, 3].map((_, i) => (
            <div key={i} className='flex-1'>
              <h1 className='text-[#FA3434] text-2xl font-bold'>$98.00</h1>
              <p className='text-gray-500 text-sm'>50-100 pcs</p>
            </div>
          ))}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 mt-4">
          {arr.map((item, index) => (
            <React.Fragment key={index}>
              <div className='text-[#8B96A5] capitalize'>{item.head}</div>
              <div className='text-[#505050]'>{item.detail}</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Supplier Card */}
      <div className='w-full lg:w-1/4 border rounded-lg p-3 flex flex-col gap-3'>
        
        <div className='flex gap-3 items-center'>
          <div className='bg-blue-100 text-blue-500 text-2xl font-bold px-3 py-1 rounded'>
            R
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Supplier</p>
            <p className='font-semibold'>Guanjoi Trading LLC</p>
          </div>
        </div>

        <span className='border border-gray-200'></span>

        <div className='flex gap-2 items-center text-sm'>
          <img src={icon} alt="" className='w-4 h-4' />
          <p>Germany, Berlin</p>
        </div>

        <div className='flex gap-2 items-center text-sm'>
          <img src={verify} alt="" className='w-4 h-4' />
          <p>Verified Seller</p>
        </div>

        <div className='flex gap-2 items-center text-sm'>
          <img src={lang} alt="" className='w-4 h-4' />
          <p>Worldwide Shipping</p>
        </div>

        <button className='bg-[#0067FF] text-white p-2 rounded-md text-sm'>
          Send Inquiry
        </button>

        <button className='text-[#0067FF] bg-white border border-[#DEE2E7] p-2 rounded-md text-sm'>
          Seller's Profile
        </button>

        <div className='flex justify-center items-center gap-2 mt-2 text-sm text-gray-600'>
          <img src={fav} alt="" className='w-4 h-4' />
          <p>Save for later</p>
        </div>
      </div>

    </section>
  )
}

export default Main4