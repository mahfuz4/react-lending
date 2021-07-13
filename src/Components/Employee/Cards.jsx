import React, { createContext, useContext } from 'react'
import Mahfuz from '../../image/mahfuz-profile.jpg'
import Najmul from '../../image/najmul-profile.jpg'
import Rasel from '../../image/rasel-profile.jpg'
import Zubayer from '../../image/zubayer-profile.jpg'

const cardDetails = [
   {
      id: 1,
      src: Zubayer,
      name: 'A B M Zubayer',
      title: 'Web developer',
      twitter: '',
      facebook: '',
      github: ''
   },
   {
      id: 2,
      src: Mahfuz,
      name: 'Mahfuz Anam',
      title: 'Web developer',
      twitter: '',
      facebook: '',
      github: ''
   },
   {
      id: 3,
      src: Najmul,
      name: 'najmul islam',
      title: 'Web developer',
      twitter: '',
      facebook: '',
      github: ''
   },
   {
      id: 4,
      src: Rasel,
      name: 'Rasel Ahmed',
      title: 'programmer',
      twitter: '',
      facebook: '',
      github: ''
   }
]

const CardContext = createContext()


export default function Cards() {
   return (
      <CardContext.Provider value={cardDetails}>
         <div className='grid grid-row-1 grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 my-20 md:max-w-2xl lg:max-w-4xl mx-auto'>
            <Card />
         </div>
      </CardContext.Provider>
   )
}

export function Card() {
   const context = useContext(CardContext);
   return (
      <>
         {context.map(card => (
            <div className='text-center flex flex-col items-center mb-5' key={card.id}>
               <img className='w-28 max-h-28 object-cover rounded-full' src={card.src} alt="card profile" />
               < h1 className='text-gray-700 text-lg font-bold mt-5 uppercase' > {card.name}</h1 >
               <h2 className='text-md text-gray-400 capitalize'>{card.title}</h2>

               <p className='grid grid-cols-3 gap-4 my-4'>
                  <A social='facebook' userName={card.twitter} icon='twitter' />
                  <A social='facebook' userName={card.facebook} icon='facebook' />
                  <A social='facebook' userName={card.github} icon='github' color='text-gray-700' />
               </p >
            </div >
         ))}
      </>
   )
}


const A = ({ social, userName, icon, color }) => (
   <a
      href={`https://${social}.com/${userName}`}
      target='_blank'
      rel="noreferrer"
      className={`p-2 text-md ${color || 'text-blue-500'} flex justify-center items-center rounded-full bg-blue-50 shadow-md cursor-pointer hover:bg-gray-300 transition`}>
      <i className={`fab fa-${icon} `}></i>
   </a>
)