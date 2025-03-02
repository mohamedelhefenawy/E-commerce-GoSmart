import React from 'react'

export default function Cart() {
  return (
    <div className='flex flex-col gap-20  w-[80%] mx-auto my-10 font-poppins'>
      <div className='flex items-center gap-3'>
        <p className='text-gray-300 text-sm'>Home /</p>
        <p className='text-sm'>Cart</p>
      </div>
      <div className="overflow-x-auto w-full">
  <table className="min-w-[600px] w-full font-poppins border-collapse">
    <thead className="font-medium">
      <tr>
        <th className="text-start p-3">Product</th>
        <th className="text-center p-3">Price</th>
        <th className="text-center p-3">Quantity</th>
        <th className="text-end p-3">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-3">
          <div className="flex gap-5 flex-col md:flex-row md:items-center">
            <img src="Assets/g27cq4-500x500 1.png" alt="product" className="w-20 h-20" />
            <p>LCD Monitor</p>
          </div>
        </td>
        <td className="text-center p-3">$200</td>
        <td className="text-center p-3">
          <input type="number" className="w-[100px] p-2 border border-black" min={1} />
        </td>
        <td className="text-end p-3">$200</td>
      </tr>
      <tr>
        <td className="p-3">
          <div className="flex gap-5 flex-col md:flex-row md:items-center">
            <img src="Assets/Frame 611.png" alt="product" className="w-20 h-20" />
            <p>H1 Game Pad</p>
          </div>
        </td>
        <td className="text-center p-3">$200</td>
        <td className="text-center p-3">
          <input type="number" className="w-[100px] p-2 border border-black" min={1} />
        </td>
        <td className="text-end p-3">$400</td>
      </tr>
    </tbody>
  </table>
</div>

<div className='flex items-center sm:justify-between flex-wrap gap-10 justify-center sm:gap-0 w-full my-4'>
  <button className='py-4 px-12 border-2 rounded border-gray-300'>
  Return To Shop
  </button>
  <button className='py-4 px-12 border-2 rounded border-gray-300'>
  Update Cart
    </button>
</div>

<div className='flex justify-between items-start  flex-wrap gap-8'>
  <div className='flex items-center flex-wrap gap-4'>
    <input type="text" placeholder='Coupon Code' className='text-gray-400 border border-black rounded px-5 w-[280px] h-[56px]' />
    <button className='bg-[#DB4444] px-12 py-4 rounded text-white'>Apply Coupon</button>
  </div>

    <div className=' border-2 border-black rounded w-[470px]'>
      <div className='w-[90%] py-4 px-8 mx-auto flex flex-col gap-4'>
      <h1 className='font-bold text-lg'>Cart Total</h1>
      <div className='flex items-center justify-between border-b pb-4 border-gray-400'>
        <p>SubTotal:</p>
        <p>$200</p>
      </div>
      <div className='flex items-center justify-between border-b pb-4 border-gray-400'>
        <p>Shipping:</p>
        <p>Free</p>
      </div>
      <div className='flex items-center justify-between '>
        <p>Total:</p>
        <p>$200</p>
      </div>
      <div className='text-center '>
      <button className='bg-[#DB4444] px-12 py-4 text-white  rounded'>Procees to checkout</button>
      </div>
      </div>
     
    </div>
</div>
      
    </div>
  )
}
