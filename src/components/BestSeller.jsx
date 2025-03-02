import React from 'react'
import Red from './Red'
import Product from './product'

export default function BestSeller() {
    const products = [{
       type:'This Month',
        sale: "-30%",
        photo: "Assets/Frame 611.png",
        name: "HAVIT HV-G92 Gamepad",
        price: 120,
        sale_price: 180,
        number_of_stars:2,
        comments: 60,
      },
      {
        type:'This Month',
        sale: "-35%",
        photo:"Assets/g27cq4-500x500 1.png",
        name:'AK-900 Wired Keyboard',
        price: 960,
        sale_price: 1160,
        number_of_stars: 4,
        comments: 75
    
      },
      {
        type:'This Month',
        sale: "-30%",
        photo:"Assets/ak-900-01-500x500 1.png",
        name:'IPS LCD Gaming Monitor',
        price: 370,
        sale_price: 400,
        number_of_stars:5,
        comments: 99
    
      },
      {
        type:'This Month',
        sale: "-25%",
        photo:"Assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
        name:'S-Series Comfort Chair ',
        price: 375,
        sale_price: 400,
        number_of_stars:3,
        comments: 99
    
      },
]
  return (
     <div className='w-[80%] mx-auto flex flex-col  gap-10 mt-14 font-poppins'>
            <Red name={"This Month"}/>
            <div className='flex items-center md:justify-between '>
            <h1 className='font-inter text-4xl font-bold tracking-[4px]'>Best Selling Products</h1>
            <button className=" bg-[#DB4444] text-white py-4 px-12 rounded-sm cursor-pointer hidden md:block">
            View All
           </button>
           </div>
           <div className='flex items-center flex-wrap gap-4 justify-center sm:justify-between'>
                {products.map((product,index)=>(
                    <Product {...product} key={index}/>
                ))}  
           </div>
           <div className="h-[1px] w-full bg-gray-400" />
    
        </div>
  )
}
