import React, { createContext, useContext } from 'react'
import H1 from './ReusableComp/H1'

const cards = [
   {
      id: 1,
      title: 'Awarded Agency',
      subtitle: 'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
      className: 'bg-red-500',
      icon: 'award'
   },
   {
      id: 2,
      title: 'Free Revisions',
      subtitle: 'Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.',
      className: 'bg-blue-500',
      icon: 'award'
   },
   {
      id: 3,
      title: 'Verified Company',
      subtitle: 'Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!',
      className: 'bg-green-500',
      icon: 'fingerprint'
   }
]

const CardContext = createContext()

export default function Cards() {
   return (
      <CardContext.Provider value={cards}>
         <Card />
      </CardContext.Provider>
   )
}

export function Card() {
   const context = useContext(CardContext)
   return (
      <>
         {context.map(con => (
            <div className={`flex flex-col justify-center items-center p-4 bg-white shadow-xl text-center rounded-md`}>
               <div className={`p-4 w-12 mb-4 flex justify-center items-center ${con.className} text-gray-200  rounded-full`}>
                  <i className={`fas fa-${con.icon}`}></i>
               </div>
               <H1 title={con.title} />
               <p className='text-gray-400 text-md leading-7'>{con.subtitle}</p>
            </div>
         ))}
      </>
   )
}
