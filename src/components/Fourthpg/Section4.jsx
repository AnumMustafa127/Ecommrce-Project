import React from 'react'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import c5 from '../../assets/c5.jpg'
import c7 from '../../assets/c7.jpg'
const Section4 = () => {
    const arr = [
        { head: 'Model', detail: '#8786867' },
        { head: 'Style', detail: 'Classic style' },
        { head: 'Certificate', detail: 'ISO-898921212' },
        { head: 'Default Size', detail: '127–132 cm' },
        { head: 'Available Sizes', detail: 'sm,md,lg,xl' },
    ]
    const list = [
        { img: c7, head: 'Men Blazers Sets Elegant Formal', price: '$7.00 - $99.50' },
        { img: c3, head: 'Brown denim jacket for men', price: '$7.00 - $99.50' },
        { img: c2, head: 'Men Summer T-shirts', price: '$7.00 - $99.50' },
        { img: c1, head: 'Men Shirt Sleeve Polo Contrast', price: '$7.00 - $99.50' },

        
    ]
    return (
        <section className='flex w-full flex-col md:flex-row md:text-start text-center'>
            <div className='w-full sm:w-9/12 m-3 flex flex-col gap-5 '>
                <nav className='flex text-gray-400 border justify-center border-gray-400'>
                    <ul className='flex  gap-6 p-4 justify-center'>
                        <li>Description</li>
                        <li>Reviews</li>
                        <li>Shipping</li>
                        <li>About Seller</li>
                    </ul>
                </nav>
                <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui numquam recusandae excepturi doloribus nihil neque reiciendis earum quos animi voluptatum doloremque nesciunt eos soluta temporibus, dolores quod nulla vitae et voluptates quisquam, fuga fugiat. Eum reprehenderit ipsam unde doloremque pariatur dolorum excepturi culpa quasi, veniam ipsa! Ratione quae, adipisci aperiam ex, repudiandae dolore libero, dignissimos cum voluptatibus quaerat fugiat? Reprehenderit animi inventore sint nisi magnam nostrum quam quaerat nam fugit laboriosam eius voluptates dolores, voluptatum rem temporibus facilis id ullam consectetur. Et sit repellat fugiat amet! Enim, fugiat mollitia. Nostrum consectetur doloremque ipsa illo eius, iusto aut nihil laudantium corrupti!</div>
                <div className='grid grid-cols-3 grid-row-5 '>
                    {arr.map((item) => {
                        return <>
                            <div className='bg-[#d9dadc] text-gray-700 border-gray-400 border  p-2 rouded-sm'>{item.head}</div>
                            <div className='text-gray-700 border-gray-400 border col-span-2 p-2 rouded-sm'>{item.detail}</div>
                        </>
                    })}
                </div>
                <div className='md:w-2/4 m-6 gap-2 w-full text-center md:text-start'>
                    <ol className='list-disc'>
                        <li>Some great feature name here</li>
                        <li>Lorem ipsum dolor sit amet, consectetur</li>
                        <li>Duis aute irure dolor in reprehenderit</li>
                        <li>Some great feature name here</li>
                    </ol>
                </div>
            </div>
            <div className='md:flex  md:flex-col w-full shadow-xl md:w-1/4 pt-3 border flex-row'>
            <h1 className='text-black font-bold text-xl mr-3'>You may like</h1>
                {list.map((item) => {
                    return <div className='flex gap-2 justify-center items-center'>
                        <img src={item.img} className='max-h-40 w-auto shadow-md p-4 rounded-lg border' alt="" />
                        <div className='flex flex-col gap-1 w-2/5'>
                            <div className='text-black font-bold text-lg'>{item.head}</div>
                            <div className='text-gray-500'>{item.price}</div>
                        </div>
                    </div>
                })}
            </div>

        </section>
    )
}

export default Section4