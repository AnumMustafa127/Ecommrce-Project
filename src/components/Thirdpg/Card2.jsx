import React from 'react'

const Card2 = () => {
    return (
    <div className='flex flex-wrap gap-3 items-center m-2'>
        <span className='flex border shadow-md shadow-gray-400  rounded-md'>
            <p>Samsung</p>
            <button>❌</button>
        </span>
        <span className='flex border shadow-md shadow-gray-400  rounded-md'>
            <p>Poco</p>
            <button>❌</button>
        </span>
        <span className='flex border shadow-md shadow-gray-400  rounded-md'>
            <p>Apple</p>
            <button>❌</button>
        </span>
        <span className='flex border shadow-md shadow-gray-400  rounded-md'>
            <p>Huawei</p>
            <button>❌</button>
        </span>
        <span className='flex border shadow-md shadow-gray-400  rounded-md'>
            <p>Metalic</p>
            <button>❌</button>
        </span>
        <button className='font-thin text-blue-700'>Clear All Filters</button>
        
    </div>
)
}

export default Card2