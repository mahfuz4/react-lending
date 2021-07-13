import React from 'react'
import leftImg from '../../image/left.jpeg'
import H1 from '../ReusableComp/H1'
import P from '../ReusableComp/P'
import Catagory from './Catagory'

const catagory = [
   {
      id: 1,
      icon: 'fas fa-user-friends',
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

export default function CompanyDetails() {
   return (
      <div className='text-center max-w-3xl mx-auto my-20'>
         <div className="mx-3">
            <H1 className='uppercase py-1 px-2 bg-blue-200 text-blue-500 inline-block text-center text-xs' title='with burned soles' />
            <H1 className='text-3xl text-gray-700' title='You need to fight like David with Goliath' />
            <P className='text-lg' weight='400' text='Brother, life in est is not like in the west. Over the night, the black clouds appear, but at least I have my poetry for my freedom. The victory is for those that rise after they fall.' />
         </div>

         <div className='grid md:grid-cols-2 gap-4'>
            <div className="flex justify-center items-center mx-4">
               <img src={leftImg} className='max-w-full md:w-48 rounded-xl shadow-lg' alt="left" />
            </div>
            <div className='px-5 text-sm'>
               <div className="w-16 p-5 bg-gray-50 text-gray-600 text-xl flex justify-center items-center rounded-full shadow-lg mb-5">
                  <i className="fas fa-user-friends"></i>
               </div>
               <H1 className='text-gray-700 text-2xl text-left my-5' title='A growing company' />
               <P className='text-left text-gray-500' text="The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go." />
               {catagory.map(cat => (
                  <Catagory key={cat.id} iconClass={cat.icon} text={cat.text} />
               ))}
            </div>
         </div>
      </div>
   )
}
