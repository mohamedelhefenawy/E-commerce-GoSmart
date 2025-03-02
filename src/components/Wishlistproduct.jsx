import { Rating } from "@mui/material";

export default function Wishlistproduct({
    has_sale,
    type,
    sale,
    photo,
    name,
    price,
    sale_price,
    number_of_stars,
    comments,}) {
 
      return (
        <div className="flex flex-col gap-2 w-full md:w-fit font-poppins ">
          <div className="bg-gray-200  rounded-md group relative flex items-center justify-center  md:w-[270px] h-[250px]   overflow-hidden">
            {/* Sale Badge */}
            {has_sale===true &&
            (<h1 className="bg-[#DB4444] absolute left-4 top-4 text-white rounded-md px-3 py-2 text-xs">
              {sale}
            </h1>)
            }
            {
              type==='new'&&(
                <h1 className="bg-[#00FF66] absolute left-4  top-4 text-white rounded-md px-3 py-2 text-sm">
                NEW
              </h1>
              )
            }
    
            {/* Centered Image */}
            <img
              src={photo}
              alt={name}
              className="w-[190px] h-[180px] object-contain absolute inset-0 m-auto"
            />
    
            {/* Icons */}
            <div className="absolute right-4 top-4 flex flex-col gap-2">
              {type ==='wishlist'&&
              (<div className="bg-white p-1 icon-group rounded-full ">
                <img src="icons/Frame 568.svg" alt="heart" className="w-6 h-6 cursor-pointer icon-group-hover:invert " />
              </div>)}
             {type==='view' &&(<div className="bg-white p-1 rounded-full icon-group hover:bg-red-400 transition-colors">
                <img src="icons/Quick View.svg" alt="view" className="w-6 h-6 cursor-pointer icon-group-hover:invert" />
              </div>)}

            </div>
    
            {/* Add To Cart Overlay */}
            <button className="bg-black absolute bottom-0 left-0 w-full py-2 text-center text-white   ">
              Add To Cart
            </button>
          </div>
    
          {/* Product Name */}
          <h1 className="font-semibold text-base">{name}</h1>
    
          {/* Price Section */}
          <div className="flex gap-3 items-center font-medium">
            <h3 className="text-[#DB4444]">${price}</h3>
            {has_sale===true &&(
              <h4 className="text-gray-400 line-through decoration-gray-400">
              ${sale_price}
            </h4>
            )
            }
          </div>
    
          {/* Rating & Comments */}
          <div className="flex gap-2 items-center font-semibold">
            <Rating name="size-small" defaultValue={number_of_stars} size="small" />
            <p className="text-gray-500 text-sm">({comments})</p>
          </div>
        </div>
      );
    }
    
