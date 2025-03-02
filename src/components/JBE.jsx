
export default function JBE() {
  return (
    <div className='w-[80%] mx-auto bg-black text-white font-poppins text-sm p-6 font-medium'>
        <div className='flex justify-between items-center flex-col xl:flex-row gap-3'>
            <div className='flex flex-col gap-10 py-6  lg:px-8 w-full justify-center'>
            <h5 className="text-green-400">Categories</h5>
            <h1 className="font-inter text-5xl font-semibold">Enhance Your Music Experience</h1>
            <div className="flex items-center justify-center xl:justify-start flex-wrap gap-6">
                <div className="flex flex-col bg-white w-20 h-20 items-center justify-center rounded-full">
                    <p className="text-black font-semibold text-xl">23</p>
                    <h3 className="text-black  text-sm">Days</h3>
                </div>
                <div className="flex flex-col bg-white w-20 h-20 items-center justify-center rounded-full">
                    <p className="text-black font-semibold text-xl">10</p>
                    <h3 className="text-black  text-sm">Hours</h3>
                </div>
                <div className="flex flex-col bg-white w-20 h-20 items-center justify-center rounded-full">
                    <p className="text-black font-semibold text-xl">20</p>
                    <h3 className="text-black  text-sm">Minutes</h3>
                </div>
                <div className="flex flex-col bg-white w-20 h-20 items-center justify-center rounded-full">
                    <p className="text-black font-semibold text-xl">59</p>
                    <h3 className="text-black  text-sm">Seconds</h3>
                </div>

            </div>
            <button className="px-12 py-4 text-white bg-[#00ff66] self-center xl:self-start rounded-md w-fit text-xl font-medium">Buy Now</button>
            </div>
            
                <img 
                    src='/Assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png' 
                    alt='arrow_down' 
                    className='flex-1 ' 
                />
            
        </div>

      
    </div>
  )
}
