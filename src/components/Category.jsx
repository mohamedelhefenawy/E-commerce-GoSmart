import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Red from "./Red";

export default function Category() {
  const sliderRef = useRef(null);

  const icons = [
    { name: "Phones", icon: "icons/Category-CellPhone.svg" },
    { name: "Computers", icon: "icons/Category-Computer.svg" },
    { name: "SmartWatch", icon: "icons/Category-SmartWatch.svg" },
    { name: "Camera", icon: "icons/Category-Camera.svg" },
    { name: "Headphones", icon: "icons/Category-Headphone.svg" },
    { name: "Gaming", icon: "icons/Category-Gamepad.svg" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 items at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Apply slider for screen widths below 768px
        settings: {
          slidesToShow: 1,
        },
        
      },
      
      
    ],
  };

  return (
    <div className="w-[80%] mx-auto flex flex-col gap-10 mt-14 font-poppins">
      <Red name={"Categories"} />
      <div className="flex md:items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
        <h1 className="font-inter text-4xl font-bold tracking-[4px]">
          Browse By Category
        </h1>
        {/* Navigation Buttons */}
        <div className="flex gap-2 items-center">
          <button
            className="bg-gray-100 p-2 rounded-full cursor-pointer"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src="icons/icons_arrow-left.svg" alt="arrow" className="w-6 h-6 " />
          </button>
          <button
            className="bg-gray-100 p-2 rounded-full cursor-pointer"
            onClick={() => sliderRef.current.slickNext()}
          >
            <img src="icons/icons_arrow-left.svg" alt="arrow" className="w-6 h-6 rotate-180 " />
          </button>
        </div>
      </div>

      {/* For Large Screens (Grid Layout) */}
      <div className="hidden md:flex items-center flex-wrap gap-2 justify-between">
        {icons.map((icon, index) => (
          <div
            className="flex flex-col items-center justify-center gap-4 border border-gray-400 rounded-md w-[170px] group hover:bg-[#DB4444] h-[145px] transition-all duration-300 cursor-pointer"
            key={index}
          >
            <img src={icon.icon} alt={icon.name} className="w-12 h-12 group-hover:invert" />
            <h1 className="group-hover:text-white">{icon.name}</h1>
          </div>
        ))}
      </div>

      {/* For Small Screens (Slider) */}
      <div className="block md:hidden w-[170px] mx-auto  ">
  <Slider ref={sliderRef} {...settings}>
    {icons.map((icon, index) => (
        <div
  className="flex flex-col items-center gap-10 justify-center border border-gray-400 rounded-md group hover:bg-[#DB4444] h-[145px] w-[170px] transition-all duration-300 cursor-pointer"
  key={index}
>
  {/* Center the icon */}
  <img src={icon.icon} alt={icon.name} className=" w-full h-12 my-5 group-hover:invert" />
  {/* Center the text */}
  <h1 className="group-hover:text-white text-center">{icon.name}</h1>
</div>

    ))}
  </Slider>
</div>



      <div className="h-[1px] w-full bg-gray-400" />
    </div>
  );
}
