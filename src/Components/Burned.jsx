import React from 'react'
import Cards from './Cards'
import H1 from './ReusableComp/H1'

const cards = [
   {
      id: 1,
      title: 'Awarded Agency',
      subtitle: 'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
      className: 'bg-red-500'
   },
   {
      id: 2,
      title: 'Free Revisions',
      subtitle: 'Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.',
      className: 'bg-blue-500'
   },
   {
      id: 3,
      title: 'Verified Company',
      subtitle: 'Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!',
      className: 'bg-green-500'
   }
]

export default function Burned() {
   return (
      <>
         <div className='text-center my-14 mx-5 max-w-xl md:mx-auto'>
            <H1 title='With burned soles' className='uppercase text-blue-500' />
            <H1 title={`I've risen with the soles burned`} className='text-2xl text-gray-700' />
            <p className='text-gray-400 text-lg'>I've fought hard to get out of the hole I was in. I've dusted myself, and exactly like dancer, I have danced with the fear, you should have filmed me.</p>
         </div>

         <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-5'>
            {cards.map(({ id, className, title, subtitle }) => (
               <Cards key={id} unique={id} className={className} title={title} subtitle={subtitle} />
            ))}
         </div>
      </>
   )
}
