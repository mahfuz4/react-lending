import React, { createContext, useContext } from 'react';

const catagory = [
   {
      id: 1,
      icon: 'fas fa-fingerprint',
      text: 'Carefully crafted components'
   },
   {
      id: 2,
      icon: 'fas fa-pager',
      text: 'Amazing page examples'
   },
   {
      id: 3,
      icon: 'fab fa-telegram-plane',
      text: 'Dynamic components'
   }
]

const CatagoryContext = createContext();

export default function Catagorys() {
   return (
      <CatagoryContext.Provider value={catagory}>
         <Catagory />
      </CatagoryContext.Provider>
   )
}

export function Catagory() {
   const context = useContext(CatagoryContext)
   return (
      <>
         {context.map(cat => (
            <p className='text-left text-gray-500 my-5 flex items-center'><span className='bg-blue-100 text-blue-400 flex justify-center items-center w-8 p-2 text-center rounded-full'><i className={cat.icon}></i></span> <span className='ml-4'>{cat.text}</span></p>
         ))}
      </>
   )
}
