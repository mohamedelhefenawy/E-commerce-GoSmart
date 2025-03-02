import Product from "./product";
import Red from "./Red";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
export default function Explore() {
    const sliderRef = useRef(null);

    const products_1 = [{
        type:'explore',
          sale:'-30%',
        name:'Breed Dry Dog Food',
        photo:'Assets/Frame 604.png',
        price: 100,
        sale_price: 400,
        number_of_stars:3,
        comments: 35
    },
    {
        type:'explore',
          sale:'-30%',
        name:'Breed Dry Dog Food',
        photo:'Assets/Frame 604.png',
        price: 100,
        sale_price: 400,
        number_of_stars:3,
        comments: 35
    },
    {
        type:'explore',
          sale:'-30%',
        name:'Breed Dry Dog Food',
        photo:'Assets/Frame 604.png',
        price: 100,
        sale_price: 400,
        number_of_stars:3,
        comments: 35
    },
    {   type:'explore',
        sale:'-30%',
        name:'Breed Dry Dog Food',
        photo:'Assets/Frame 604.png',
        price: 100,
        sale_price: 400,
        number_of_stars:3,
        comments: 35
    },
]
const products_2 = [
    {
        type:'explore',
          sale:'-30%',
        name:'Breed Dry Dog Food',
        photo:'Assets/Frame 604.png',
        price: 100,
        sale_price: 400,
        number_of_stars:3,
        comments: 35
    },
    {
        type:'new',
          sale:'-30%',
        name:'Breed Dry Dog Food',
        photo:'Assets/Frame 604.png',
        price: 100,
        sale_price: 400,
        number_of_stars:3,
        comments: 35
    },
    {
        type:'explore',
          sale:'-30%',
        name:'Breed Dry Dog Food',
        photo:'Assets/Frame 604.png',
        price: 100,
        sale_price: 400,
        number_of_stars:3,
        comments: 35
    },
    {   type:'new',
        sale:'-30%',
        name:'Breed Dry Dog Food',
        photo:'Assets/Frame 604.png',
        price: 100,
        sale_price: 400,
        number_of_stars:3,
        comments: 35
    },
]

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows as we are using custom arrows
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[80%] mx-auto flex flex-col gap-10 mt-14 font-poppins">
        <Red name ={'Our Products'}/>
        <div className="flex md:items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
        <h1 className="font-inter text-4xl font-bold tracking-[4px]">
             Explore Our Products
        </h1>
        {/* Navigation Buttons */}
        <div className="flex gap-2 items-center">
          <button
            className="bg-gray-100 p-2 rounded-full cursor-pointer" onClick={() => sliderRef.current.slickPrev()}>
            <img src="icons/icons_arrow-left.svg" alt="arrow" className="w-6 h-6 " />
          </button>
          <button
            className="bg-gray-100 p-2 rounded-full cursor-pointer" onClick={() => sliderRef.current.slickNext()}>
            <img src="icons/icons_arrow-left.svg" alt="arrow" className="w-6 h-6 rotate-180 " />
          </button>
        </div>
      </div>
     
      <div className="min-w-full">
      <Slider {...settings} ref={sliderRef}     >
      {products_1.map((product, index) => (
          <Product {...product} key={index}  />
      ))}
    </Slider>
    
    </div>
    <div className="flex items-center flex-wrap gap-4 justify-center sm:justify-between">
      
      {products_2.map((product, index) => (
          <Product {...product} key={index}  />
      ))}
    
    </div>
    <button className="px-12 py-4 bg-red-500 text-white w-fit self-center rounded-sm my-5">View All Products</button>

    <div className="h-[1px] w-full bg-gray-400" />

    </div>
  )
}
