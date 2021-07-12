import React from 'react'
import H1 from './ReusableComp/H1'

export default function Cards({ className, title, subtitle, unique }) {
   return (
      <div className={`flex flex-col justify-center items-center p-4 bg-white shadow-xl text-center rounded-md`}>
         <div className={`p-4 w-12 mb-4 flex justify-center items-center ${className} text-gray-200  rounded-full`}>
            <i className="fas fa-award"></i>
         </div>
         <H1 title={title} />
         <p className='text-gray-400 text-sm'>{subtitle}</p>
      </div>
   )
}
