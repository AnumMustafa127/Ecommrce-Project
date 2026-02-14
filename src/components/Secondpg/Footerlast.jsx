import React from 'react'

const Footerlast = () => {
  return (
    <div className='flex justify-end p-4 gap-2 flex-wrap'>
        <select name="" >
            <option value="">show 1</option>
            <option value="">show 2</option>
            <option value="">show 3</option>
            <option value="">show 4</option>
            <option value="">show 5</option>
            <option value="">show 6</option>
            <option value="">show 7</option>
            <option value="">show 8</option>
            <option value="">show 9</option>
            <option value="">show 10</option>
        </select>
        <div id="btn" className='flex'>
            <button className='pl-2 pr-2 rounded-sm border border-gray-300'>⬅</button>
            <button className='pl-2 pr-2 rounded-sm border border-gray-300'>1</button>
            <button className='pl-2 pr-2 rounded-sm border border-gray-300'>2</button>
            <button className='pl-2 pr-2 rounded-sm border border-gray-300'>3</button>
            <button className='pl-2 pr-2 rounded-sm border border-gray-300'>➡</button>
        </div>
    </div>
  )
}

export default Footerlast