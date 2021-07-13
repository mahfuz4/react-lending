import React from 'react'
import Img from '../../image/left.jpeg'
import H1 from '../ReusableComp/H1'
import P from '../ReusableComp/P'
import Card from './Card'

const cardDetails = [
   {
      id: 1,
      src: Img,
      name: 'A B M Zubayer',
      title: 'web developer',
      twitter: 'zubayer-dev',
      facebook: 'zubayer-dev',
      github: 'zubayer-47'
   },
   {
      id: 2,
      src: Img,
      name: 'A B M Zubayer',
      title: 'web developer',
      twitter: 'zubayer-dev',
      facebook: 'zubayer-dev',
      github: 'zubayer-47'
   },
   {
      id: 3,
      src: Img,
      name: 'A B M Zubayer',
      title: 'web developer',
      twitter: 'zubayer-dev',
      facebook: 'zubayer-dev',
      github: 'zubayer-47'
   },
   {
      id: 4,
      src: Img,
      name: 'A B M Zubayer',
      title: 'web developer',
      twitter: 'zubayer-dev',
      facebook: 'zubayer-dev',
      github: 'zubayer-47'
   }
]

export default function Employe() {
   return (
      <section className='max-w-4xl text-center mx-auto my-32'>

         <div className="mx-4">
            <H1 title='THE ENTOURAGE' className='text-yellow-500' />
            <H1 title="It is everything, and it won't change" className='text-3xl text-gray-700' />
            <P text='It depends on your friends and companions, it depends on who goes out with you, if they have money, if you have mone' className='text-gray-400 text-lg' />
         </div>

         <div className='grid grid-row-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4'>
            {cardDetails.map(detail => (
               <Card key={detail.id} src={detail.src} name={detail.name} title={detail.title} />
            ))}
         </div>
      </section>
   )
}
