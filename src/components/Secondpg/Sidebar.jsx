import React from 'react'
import rating from '../../assets/rating.png'
import rating2 from '../../assets/rating2.png'
import rating3 from '../../assets/rating3.png'
import rating5 from '../../assets/rating5.png'
const Sidebar = () => {
    return (
        <nav className='md:flex md:flex-col md:gap-9 w-3/6 p-4 border bg-gray-100 hidden '>

            <div className='flex flex-col gap-5 max-w-fit '>
                <h1 className='font-bold'>category</h1>
                <div className='text-gray-500 gap-5'>
                    <p>Mobile Accesories</p>
                    <p>Electronics</p>
                    <p>Smart Phones</p>
                    <p>Smart Watches</p>
                    <p className='text-blue-500'>See All</p>
                </div>
            </div>
            <hr />
            {/* number2 */}
            <div className='flex flex-col gap-5 max-w-fit'>
                <h1 className='font-bold'>Brands</h1>
                <div className='gap-1 flex flex-col'>
                    <div className='flex justify-between'>
                        <label htmlFor="inp1">Samsung</label>
                        <input type='checkbox' id='inp1' />
                    </div>
                    <div className='flex justify-between'>
                        <label htmlFor="inp1">Apple</label>
                        <input type='checkbox' id='inp1' />
                    </div>
                    <div className='flex justify-between'>
                        <label htmlFor="inp1">Huawei</label>
                        <input type='checkbox' id='inp1' />
                    </div>
                    <div className='flex justify-between'>
                        <label htmlFor="inp1">Pocco</label>
                        <input type='checkbox' id='inp1' />
                    </div>
                    <div className='flex justify-between'>
                        <label htmlFor="inp1">Lenovo</label>
                        <input type='checkbox' id='inp1' />
                    </div>

                </div>
            </div>
            <hr />
            {/* number3 */}

            <div className='flex flex-col justify-center max-w-fit gap-5'>
                <h1 className='font-bold'>Pricing</h1>
                <input type="range" />
                <div className='flex justify-center'>
                    <div>
                        <h1>min</h1>
                        <input type="text" placeholder='0' className='border border-gray-400 rounded-lg w-2/4' />
                    </div>
                    <div>
                        <h1>max</h1>
                        <input type="text" placeholder='999999' className='border border-gray-400 rounded-lg w-2/4' />
                    </div>
                </div>
                <button className='bg-blue-500 text-white p-2 rounded-lg'>Apply</button>
            </div>

            <hr />
               {/* number4 */}
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold'>Condition</h1>
                <div className='text-gray-800 gap-1'>
                   <div className='flex gap-2'>
                     <input type="radio" id='rad1' />
                    <label htmlFor="rad1">All</label>
                   </div>
                   <div className='flex gap-2'>
                     <input type="radio" id='rad1' />
                    <label htmlFor="rad1">Refurbished</label>
                   </div>
                   <div className='flex gap-2'>
                     <input type="radio" id='rad1' />
                    <label htmlFor="rad1">Brand New</label>
                   </div>
                   <div className='flex gap-2'>
                     <input type="radio" id='rad1' />
                    <label htmlFor="rad1">Old items</label>
                   </div>
                </div>
            </div>
            <hr />
            {/* number5 */}
            <div className='flex flex-col gap-5'>
                <h1 className='font-bold'>Brands</h1>
                <div className='gap-1 flex flex-col'>
                    <div className='flex gap-2'>
                        <label htmlFor="inp1"><img src={rating} alt="" /></label>
                        <input type='checkbox' id='inp1' />
                    </div>
                    <div className='flex gap-2'>
                        <label htmlFor="inp1"><img src={rating2} alt="" /></label>
                        <input type='checkbox' id='inp1' />
                    </div>
                    <div className='flex gap-2'>
                        <label htmlFor="inp1"><img src={rating3} alt="" /></label>
                        <input type='checkbox' id='inp1' />
                    </div>
                    <div className='flex gap-2'>
                        <label htmlFor="inp1"><img src={rating5} alt="" /></label>
                        <input type='checkbox' id='inp1' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Sidebar