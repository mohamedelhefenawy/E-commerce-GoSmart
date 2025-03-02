import { useState, useEffect, useRef } from "react";
import Product from "./product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Red from "./Red";
export default function Flash() {
  const getTargetDate = () => {
    const savedTarget = localStorage.getItem("flashSaleEndTime");
    if (savedTarget) return new Date(savedTarget);

    const newTarget = new Date();
    newTarget.setDate(newTarget.getDate() + 3); // 3 days from now
    localStorage.setItem("flashSaleEndTime", newTarget); // Store in localStorage
    return newTarget;
  };

  const [targetDate] = useState(getTargetDate());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const sliderRef = useRef(null);

  function calculateTimeLeft(target) {
    const now = new Date();
    const difference = target - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);


  const products = [{
    sale: "-30%",
    photo: "Assets/Frame 611.png",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    sale_price: 180,
    number_of_stars:2,
    comments: 60,
  },
  {
    sale: "-35%",
    photo:"Assets/g27cq4-500x500 1.png",
    name:'AK-900 Wired Keyboard',
    price: 960,
    sale_price: 1160,
    number_of_stars: 4,
    comments: 75

  },
  {
    sale: "-30%",
    photo:"Assets/ak-900-01-500x500 1.png",
    name:'IPS LCD Gaming Monitor',
    price: 370,
    sale_price: 400,
    number_of_stars:5,
    comments: 99

  },
  {
    sale: "-25%",
    photo:"Assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    name:'S-Series Comfort Chair ',
    price: 375,
    sale_price: 400,
    number_of_stars:3,
    comments: 99

  },
  {
    sale: "-25%",
    photo:"Assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    name:'S-Series Comfort Chair ',
    price: 375,
    sale_price: 400,
    number_of_stars:3,
    comments: 99

  },
  {
    sale: "-25%",
    photo:"Assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    name:'S-Series Comfort Chair ',
    price: 375,
    sale_price: 400,
    number_of_stars:3,
    comments: 99

  },
  {
    sale: "-25%",
    photo:"Assets/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.png",
    name:'S-Series Comfort Chair ',
    price: 375,
    sale_price: 400,
    number_of_stars:3,
    comments: 99

  },]

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
        <Red name={"Today's"}/>
      <div className="flex md:items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
      <div className="flex gap-10 md:gap-20 md:items-center flex-col md:flex-row ">
        <h1 className="font-inter text-4xl font-bold tracking-[4px]">Flash Sales</h1>
       <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
            <h4 className="text-xs">Days</h4>
            <h3 className="font-bold text-4xl tracking-[4px]">0{timeLeft.days}</h3>
        </div>
        <p className="text-[#E07575] self:center text-2xl font-bold">:</p>
        <div className="flex flex-col gap-1">
            <h4 className="text-xs">Hours</h4>
            <h3 className="font-bold text-4xl tracking-[4px]">{timeLeft.hours}</h3>
        </div>
        <p className="text-[#E07575] self:center text-2xl font-bold">:</p>

        <div className="flex flex-col gap-1">
            <h4 className="text-xs">Minutes</h4>
            <h3 className="font-bold text-4xl tracking-[4px]">{timeLeft.minutes}</h3>
        </div>
        <p className="text-[#E07575] self:center text-2xl font-bold">:</p>
        <div className="flex flex-col gap-1">
            <h4 className="text-xs">Seconds</h4>
            <h3 className="font-bold text-4xl text-center self-center tracking-[4px]">{timeLeft.seconds}</h3>
        </div>
        </div>
       </div>
       <div className="flex gap-2 items-center ">
        <button className="bg-gray-100 p-2 rounded-full cursor-pointer" onClick={() => sliderRef.current.slickPrev()}>
        <img src="icons/icons_arrow-left.svg" alt="arrow" className="w-6 h-6 "/>
        </button>
        <button className="bg-gray-100 p-2 rounded-full cursor-pointer" onClick={() => sliderRef.current.slickNext()}>
        <img src="icons/icons_arrow-left.svg" alt="arrow" className="w-6 h-6 rotate-180 "/>
        </button>
       </div>
      </div>
     <div className="min-w-full ">
      <Slider {...settings} ref={sliderRef}     >
      {products.map((product, index) => (
          <Product {...product} key={index}  />
      ))}
    </Slider>
    </div>
    <button className="px-12 py-4 bg-red-500 text-white w-fit self-center rounded-sm my-5">View All Products</button>

    <div className="h-[1px] w-full bg-gray-400" />
   
    </div>
  );
}
