import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate()
  return (
    <div className='my-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-28 font-poppins'>
        <img src='Assets/Side Image.png' alt='side' className='w-[50vw] '/>
      <div className='flex flex-col  gap-12 lg:mr-36'>
        <div className='flex flex-col gap-4'>
        <h1 className='font-inter text-4xl tracking-[2px]'>Create an account</h1>
        <h3 >Enter your details below</h3>
        </div>
        <input type='text' placeholder='Name' className='border-b border-gray-400 outline-none'/>
        <input type='text' placeholder='Email or Phone Number' className='border-b border-gray-400  outline-none'/>
        <input type='password' placeholder='Password' className='border-b border-gray-400  outline-none'/>
        <button className='bg-[#DB4444] text-white py-4 rounded-sm'>Create Account</button>
        <button className='text-black rounded-sm border-2 flex items-center justify-center gap-2 border-gray-400 py-4'>
            <img src='icons/Icon-Google.svg' alt='google' className='w-6 h-6' />
            Sign Up With Google
            </button>
        <div className='flex items-center gap-4'>
            <h4 className='text-gray-400 flex items-center gap-4 justify-center w-full'>Already have an account? <span className='underline underline-offset-4 text-black cursor-pointer' onClick={()=>navigate('/signin')}>log in</span></h4>
        </div>
      </div>
    </div>
  )
}
