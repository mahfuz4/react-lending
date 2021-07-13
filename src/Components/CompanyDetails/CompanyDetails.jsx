import React from 'react'
import leftImg from '../../image/left.jpeg'
import H1 from '../ReusableComp/H1'
import P from '../ReusableComp/P'
import Catagorys from './Catagorys'

export default function CompanyDetails() {
   return (
      <div className='text-center md:max-w-3xl lg:max-w-4xl mx-auto my-20'>
         <div className="mx-3 mb-10">
            <H1 className='uppercase py-1 px-2 bg-blue-200 text-blue-500 inline-block text-center text-xs' title='with burned soles' />
            <H1 className='text-3xl text-gray-700' title='You need to fight like David with Goliath' />
            <P className='text-lg' weight='400' text='Brother, life in est is not like in the west. Over the night, the black clouds appear, but at least I have my poetry for my freedom. The victory is for those that rise after they fall.' />
         </div>

         <div className='grid gap-8 md:gap-0 md:grid-cols-2'>
            <div className="flex justify-center items-center mx-4">
               <img src={leftImg} className='max-w-full md:max-w-xs rounded-xl shadow-lg' alt="left" />
            </div>
            <div className='px-5 text-sm'>
               <div className="w-16 p-5 bg-blue-100 text-blue-400 text-xl flex justify-center items-center rounded-full shadow-lg mb-5">
                  <i className="fas fa-rocket"></i>
               </div>
               <H1 className='text-gray-700 text-2xl text-left my-5' title='A growing company' />
               <P className='text-left text-gray-500' text="The extension comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go." />
               <Catagorys />
            </div>
         </div>
      </div>
   )
}
