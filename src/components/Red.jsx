import React from 'react'

export default function Red({name}) {
  return (
    <div className="flex gap-4 items-center">
    <p className="w-5 h-10 rounded-md bg-[#db4444]"></p>
    <h1 className='font-semibold text-base text-[#DB4444]'>{name}</h1>
  </div>
  )
}
