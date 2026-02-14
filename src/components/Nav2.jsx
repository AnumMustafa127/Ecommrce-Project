import React from 'react'
import china from '../assets/china/icon.png'
import russia from '../assets/russia/icon.png'
import italy from '../assets/italy/icon.png'
import france from '../assets/france/FR@2x.png'
import australia from '../assets/britain/icon.png'
import usa from '../assets/usa/icon.png'
import dubai from '../assets/dubai/icon.png'
import great from '../assets/great britain/icon.png'
import denmark from '../assets/denmark/DK@2x.png'


const Nav2 = () => {
    return (
        <nav className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-2 m-4 gap-0 md:gap-6'>
            <div className='bg-green flex items-center  gap-3'>
                <img src={dubai} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>Arab Emirates</h1>
                    <p>Shopname.ae</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={australia} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>Australia</h1>
                    <p>Shopname.ae</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={usa} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>United States</h1>
                    <p>Shopname.ae</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={denmark} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>Denmark</h1>
                    <p>denmark.com.dk</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={france} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>France</h1>
                    <p>Shopname.com.fr</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={russia} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>Russia</h1>
                    <p>Shopname.ae</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={china} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>China</h1>
                    <p>Shopname.ae</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={italy} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>Italy</h1>
                    <p>Shopname.ae</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={great} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>Great Britain</h1>
                    <p>Shopname.ae</p>
                </div>
            </div>
            <div className='bg-green flex items-center  gap-3'>
                <img src={dubai} alt="" className='w-8 h-6' />
                <div>
                    <h1 className='font-bold'>Arab Emirates</h1>
                    <p>Shopname.ae</p>
                </div>
            </div>

        </nav>
    )
}

export default Nav2