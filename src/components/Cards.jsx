
export default function Cards() {
    const top = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
  return (
    <div className='flex flex-col gap-32 w-[80%] mx-auto'>
    <div className='flex  flex-wrap items-center  gap-8 justify-center xl:justify-between w-[80%]  mx-auto font-poppins mt-20 '>
        <div className='flex flex-col gap-4 items-center justify-center'>
            <div className='w-20 h-20 rounded-full bg-neutral-400 flex items-center justify-center '>
            <div className='w-14 h-14 rounded-full bg-black flex items-center justify-center '>
            <img src='icons/icon-delivery.svg' alt='delivery' className='invert w-10 h-10'/>
            </div>
            </div>
            <h1 className='font-semibold text-2xl text-center'>FREE AND FAST DELIVERY</h1>
            <h2 className='text-sm text-center'>Free delivery for all orders over $140</h2>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center'>
            <div className='w-20 h-20 rounded-full bg-neutral-400 flex items-center justify-center '>
            <div className='w-14 h-14 rounded-full bg-black flex items-center justify-center '>
            <img src='icons/Icon-Customer service.svg' alt='delivery' className='invert w-10 h-10'/>
            </div>
            </div>
            <h1 className='font-semibold text-2xl text-center'>24/7 CUSTOMER SERVICE</h1>
            <h2 className='text-sm text-center'>Friendly 24/7 customer support</h2>
        </div>
        <div className='flex flex-col gap-4 items-center justify-center '>
            <div className='w-20 h-20 rounded-full bg-neutral-400 flex items-center justify-center '>
            <div className='w-14 h-14 rounded-full bg-black flex items-center justify-center '>
            <img src='icons/icon-secure.svg' alt='delivery' className=' w-10 h-10'/>
            </div>
            </div>
            <h1 className='font-semibold text-2xl text-center'>MONEY BACK</h1>
            <h2 className='text-sm text-center'>We reurn money within 30 days</h2>
        </div>
        </div>

        <button className='self-end flex items-center justify-center w-10 h-10 rounded-full bg-neutral-200' onClick={()=>top()}>
            <img src="icons/icons_arrow-up.svg" alt="arrow-up" className='w-6 h-6' />
        </button>
      
    
    </div>
  )
}
