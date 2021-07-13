import React from 'react'

export default function Card({ src, name, title, twitter, facebook, github }) {
   return (
      <div className='text-center flex flex-col items-center'>
         <img className='w-28 max-h-28 object-cover rounded-full' src={src} alt="card profile" />
         < h1 className='text-gray-700 text-lg font-bold mt-5 uppercase' > {name}</h1 >
         <h2 className='text-md text-gray-400 capitalize'>{title}</h2>

         <p className='grid grid-cols-3 gap-4 my-4'>
            <a href={`https://twitter.com/${twitter}`} target='_blank' rel="noreferrer" className='w-6 p-1 text-md text-blue-500 flex justify-center items-center rounded-full ring-2 cursor-pointer hover:bg-blue-500 hover:text-blue-50 transition'><i className="fab fa-twitter"></i></a>
            <a href={`https://facebook.com/${facebook}`} target='_blank' rel="noreferrer" className='w-6 p-1 text-md text-blue-500 flex justify-center items-center rounded-full ring-2 cursor-pointer hover:bg-blue-500 hover:text-blue-50 transition'><i className="fab fa-facebook"></i></a>
            <a href={`https://github.com/${github}`} target='_blank' rel="noreferrer" className='w-6 p-1 text-md text-gray-700 flex justify-center items-center rounded-full ring-2 ring-gray-500 cursor-pointer hover:bg-gray-700 hover:text-blue-50 transition'><i className="fab fa-github"></i></a>
         </p>
      </div >
   )
}
