import React from 'react'

export default function P({ className, text, weight, }) {
   return (
      <p className={`${className} text-gray-${weight} my-3`}>{text}</p>
   )
}
