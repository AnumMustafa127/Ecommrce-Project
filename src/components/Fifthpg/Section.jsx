import React from 'react'
import img from '../../assets/Icon Color.png'
import img1 from '../../assets/Icon Color1.png'
import cmnt from '../../assets/iconmsg.png'

const Section = () => {
    const list = [
        {img: img, head: 'Secure Payment', detail: 'Have you ever finally just'},
        {img: img1, head: 'Customer Support', detail: 'Have you ever finally just'},
        {img: cmnt, head: 'Free Deleivery', detail: 'Have you ever finally just'}
    ]
  return (
    <nav className='flex justify-evenly mt-4 '>
        {list.map((item)=>{
            return<>
                <div className='flex items-center justify-center gap-3'>
                    <div>
                        <img className='border rounded-full bg-gray-300 p-2 ' src={item.img} alt="" />
                    </div>
                    <div>
                        <h1 className='font-bold text-gray-700'>{item.head}</h1>
                        <h1 className='text-gray-600'>{item.detail}</h1>
                    </div>
                </div>
            </>
        })}
    </nav>
  )
}

export default Section