import React from 'react'

export default function H1({ className, title }) {
   return (
      <h1 className={`${className} font-bold my-3 select-none`}>{title}</h1>
   )
}
