
import hero from '../../public/Assets/hero_endframe__cvklg0xk3w6e_large 2.png'
export default function Hero() {
  return (
    <header className="w-[80%] mx-auto flex relative flex-col xl:flex-row  gap-11 ">
    <div className="border-gray-400 pr-4 border-r  w-full xl:w-fit flex flex-col items-start gap-4 font-poppins">
      
      <div className="flex w-full text-base justify-between gap-12 mt-10">
        <h1>Woman’s Fashion</h1>
        <img src="icons/DropDown.svg" alt="drop_right" className="w-6 h-6 rotate-[270deg]" />
      </div>
      <div className="flex text-base justify-between gap-12 w-full">
        <h1>Men’s Fashion</h1>
        <img src="icons/DropDown.svg" alt="drop_right" className="w-6 h-6 rotate-[270deg]" />
      </div>
      <h4>Electronics</h4>
      <h4>Home & Lifestyle</h4>
      <h4>Medicine</h4>
      <h4>Sports & Outdoor</h4>
      <h4>Baby’s & Toys</h4>
      <h4>Groceries & Pets</h4>
      <h4>Health & Beauty</h4>
      
      </div>
      <div className="bg-black w-[80vw] mt-10 min-h-full flex flex-col lg:flex-row gap-3 lg:gap-0 py-4 xl:py-0 items-center relative   ">
        <div className='flex flex-col gap-4 ml-12 text-white w-full my-6 '>
        <div className='flex items-center gap-4'>      
            <img src='Assets/1200px-Apple_gray_logo 1@2x.png' alt='apple logo'/>
            <h3 >iPhone 14 Series</h3>
        </div>
        <h1 className=' text-[48px] tracking-[4px] font-medium font-inter w-full md:w-[52%]'>Up to 10% off Voucher</h1>
        <div className='flex items-center text-white gap-2'>
        <button className="underline underline-offset-8 decoration-white">Shop Now</button>
        <img src="icons/icons_arrow-left.svg" alt="drop_right" className="w-6 h-6 rotate-180 filter invert" />
        </div>
        </div>
        <img src={hero} alt="hero" className=' w-fit h-[30vh]' />


      </div>
      <div className='absolute bottom-4 right-[50%] translate-x-[50%] lg:left-1/2 w-fit lg:translate-x-1/2 flex gap-3 items-center'>
        <p className='w-3 h-3 rounded-full  bg-gray-400'></p>
        <p className='w-3 h-3 rounded-full  bg-gray-400'></p>
        <p className='w-3 h-3 rounded-full border-white border bg-red-500'></p>
        <p className='w-3 h-3 rounded-full  bg-gray-400'></p>
        <p className='w-3 h-3 rounded-full  bg-gray-400'></p>
      </div>
    </header>
  )
}
