import React from 'react'
import headImg from '../../image/hero.webp'
import H1 from '../ReusableComp/H1'
import P from '../ReusableComp/P'

export default function WorkingUs() {
   return (
      <div className='md:max-w-3xl lg:max-w-4xl mx-auto my-24'>


         <div className='grid md:grid-cols-2'>
            <div className='md:mx-10 mx-5'>
               <div className="w-16 p-5 bg-gray-50 text-gray-600 text-xl flex justify-center items-center rounded-full shadow-lg mb-5">
                  <i className="fas fa-user-friends"></i>
               </div>
               <H1 title='Working with us is a pleasure' className='text-2xl text-gray-800' />

               <P text={`Don't let your users guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript.`} weight='600' />

               <P text={`The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.`} weight='600' />
            </div>

            <div className='rounded-lg bg-blue-500 text-gray-200 m-2 md:mx-10 mx-5'>
               <img className='rounded-lg max-h-50 md:max-h-40 w-full object-cover img-clip' src={headImg} alt="top" />
               <div className='pt-2 pb-3 px-12'>
                  <H1 title='Top Notch Services' />
                  <P text='The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens.' />
               </div>
            </div>
         </div>
      </div>
   )
}
