
import { useEffect, useState } from "react"
import { NavLink , Link, useNavigate } from "react-router-dom"
export default function Navbar() {
  const [open , setOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
setOpen(false)
  },[navigate])
  return (
    <div className="w-full">
    <nav className="w-[80%] mx-auto flex justify-between items-center mt-10 mb-4 font-poppins ">
    <NavLink to={'/'} className="font-bold text-2xl font-inter tracking-[1px]">Exclusive</NavLink>
    <div className="hidden xl:flex justify-between items-center gap-[48px] text-black">
      <NavLink to="/" className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-gray-500" : "")}>Home</NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-gray-500" : "")}>Contact</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-gray-500" : "")}>About</NavLink>
      <NavLink to="/signup" className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-gray-500" : "")}>Sign Up</NavLink>
    </div>
    <div className="flex gap-4 items-center">
      <div>
        <div className="hidden md:flex relative py-4  items-center justify-between rounded-md px-8 bg-gray-100">
          <input type="text" placeholder="What are you looking for" className="pr-10  bg-gray-100 border-none focus:outline-none" />
          <img src="icons/Vector.svg" alt="search_icon" className="cursor-pointer w-6 h-6 absolute top-[50%] translate-y-[-50%] right-4" />
        </div>
      </div>
      <div className="flex gap-6">
        {/* Wishlist Icon */}
        <div className="relative group">

          <Link to="/wishlist">
            <img src="icons/heart small.svg" alt="heart icon" className="w-8 h-8 cursor-pointer" />
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Wishlist
          </span>
        </div>
        {/* Cart Icon */}
        <div className="relative group">
          <Link to="/cart">
            <img src="icons/Cart1.svg" alt="cart icon" className="w-8 h-8 cursor-pointer" />
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 top-8 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Cart
          </span>
        </div>
          <img src="icons/list.svg" alt="list" className="w-8 h-8 cursor-pointer block lg:hidden" onClick={()=>setOpen(true)} />
      </div>
    </div>

    <div className="flex flex-col text-xl bg-white z-50 fixed top-0 right-0 h-full w-[80%] p-8 gap-8 transform translate-x-full transition-transform duration-300 ease-in-out" style={{transform: open ? "translateX(0)" : "translateX(100%)"}}>
      <img src="icons/x.svg" alt="close" className="w-8 h-8 cursor-pointer self-end" onClick={()=>setOpen(false)} />
      <NavLink to="/" className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-gray-500" : "")}>Home</NavLink>
      <NavLink to="/products" className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-gray-500" : "")}>Contact</NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-gray-500" : "")}>About</NavLink>
      <NavLink to="/signup" className={({ isActive }) => (isActive ? "underline underline-offset-4 decoration-gray-500" : "")}>Sign Up</NavLink>

    </div>
    
  </nav>
  <hr className="border-gray-400 w-full" />
  </div>
  
  )
}
