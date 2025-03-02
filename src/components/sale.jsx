
export default function Sale() {
  return (
<div className="bg-black text-white font-poppins text-sm p-6 font-medium  ">

  {/* Left Section */}
  <div className=" flex justify-between text-center items-center flex-col md:flex-row gap-4 md:gap-0   w-[80%] mx-auto ">
  <div className="flex flex-1  justify-center flex-col md:flex-row  gap-2 md:w-full  ">
    <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
    <h2 className="font-bold underline cursor-pointer">ShopNow</h2>
  </div>


  {/* Right Section */}
  <div className="flex gap-1 cursor-pointer ">
    <h1 className="">English</h1>
    <img src="/icons/DropDown.svg" alt="arrow_down" className="w-5  filter invert" />
  </div>
  </div>
</div>

  
  )
}
