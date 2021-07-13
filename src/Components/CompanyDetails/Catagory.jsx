import React from 'react'

export default function Catagory({ text, iconClass }) {
   return (
      <p className='text-left text-gray-500 my-5 flex items-center'><span className='bg-blue-200 text-blue-400 flex justify-center items-center w-8 p-2 text-center rounded-full'><i className={iconClass}></i></span> <span className='ml-4'>{text}</span></p>
   )
}
