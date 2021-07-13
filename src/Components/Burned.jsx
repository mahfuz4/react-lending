import React from 'react'
import Cards from './Cards'
import H1 from './ReusableComp/H1'
export default function Burned() {
   return (
      <>
         <div className='text-center my-14 mx-5 max-w-xl md:mx-auto'>
            <H1 title='With burned soles' className='uppercase text-blue-500' />
            <H1 title={`I've risen with the soles burned`} className='text-2xl text-gray-700' />
            <p className='text-gray-400 text-lg'>I've fought hard to get out of the hole I was in. I've dusted myself, and exactly like dancer, I have danced with the fear, you should have filmed me.</p>
         </div>

         <div className='grid md:grid-cols-3 gap-8 md:max-w-3xl lg:max-w-5xl mx-auto px-5'>
            <Cards />
         </div>
      </>
   )
}
