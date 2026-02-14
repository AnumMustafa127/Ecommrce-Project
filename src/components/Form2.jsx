import React from 'react'

const Form2 = () => {
  return (
       <form action="post" className='flex flex-col  w-full justify-center items-center bg-[#e8e6e6] p-5 gap-5 '>
            <h1 className='font-bold text-sm sm:text-2xl'>Subscribe on our newsletter</h1>
            <p className='text-base sm:text-sm'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className='flex gap-2 flex-col sm:flex-row'>
                <input type="text" placeholder='Enter Email'  className='p-1 rounded-md w-full sm:w-64'/>
                <button className='bg-blue-600 text-white p-1 rounded-md'>subscribe</button>
            </div>
        </form>
  )
}

export default Form2
