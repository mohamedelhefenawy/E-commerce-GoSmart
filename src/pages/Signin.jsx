import React from 'react'

export default function Signin() {
  return (
<div className='my-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-28 font-poppins'>
        <img src='Assets/Side Image.png' alt='side' className='w-[50vw] '/>
      <div className='flex flex-col  gap-12 lg:mr-36'>
        <div className='flex flex-col gap-4'>
        <h1 className='font-inter text-4xl tracking-[2px]'>Log in to Exclusive</h1>
        <h3 >Enter your details below</h3>
        </div>
        <input type='text' placeholder='Email or Phone Number' className='border-b border-gray-400  outline-none'/>
        <input type='password' placeholder='Password' className='border-b border-gray-400  outline-none'/>
        <div className='flex items-center justify-between'> 
            <button className='bg-[#DB4444] text-white py-4 px-12 rounded-sm'>Login</button>
            <h4 className='text-[#DB4444]'>Forgot Password?</h4>
            
            </div>
        
        
      </div>
    </div>
  )
}
