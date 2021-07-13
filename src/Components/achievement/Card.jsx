import React, { createContext, useContext } from "react";

const cardDetails = [
  {
    id: 1,
    profile: "medal",
    title: "Excelent Services",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    profile: "poll",
    title: "Excelent Services",
    subTitle: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    profile: "lightbulb",
    title: "Excelent Services",
    subTitle: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const CardContext = createContext()

export default function Cards() {
  return (
     <CardContext.Provider value={cardDetails}>
         <Card />
      </CardContext.Provider>
  )
}

const Card = () => {
   const context = useContext(CardContext)
   return (
      <>
         {context.map(detail => (
            <div className=' text-center flex flex-col justify-center items-center' key={detail.id}>
               <div className='mb-6 text-blueGray-900 bg-white p-3 w-12 h-12 shadow-lg rounded-full inline-flex items-center justify-center'><i className={`fas fa-${detail.profile} text-xl`}></i></div>
               <h1 className='text-xl leading-relaxed pb-2 text-gray-200 font-bold'>{detail.title}</h1>
               <p className="text-gray-500">{detail.subTitle}</p>
            </div>
         ))}
      </>
   )
}
