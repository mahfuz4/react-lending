import React from 'react'
import H1 from '../ReusableComp/H1'
import P from '../ReusableComp/P'
import Cards from './Cards'


export default function Employe() {
   return (
      <section className='max-w-4xl text-center mx-auto my-32'>

         <div className="mx-4">
            <H1 title='THE ENTOURAGE' className='text-yellow-500' />
            <H1 title="It is everything, and it won't change" className='text-3xl text-gray-700' />
            <P text='It depends on your friends and companions, it depends on who goes out with you, if they have money, if you have mone' className='text-gray-400 text-lg' />
         </div>
         <Cards />
      </section>
   )
}
