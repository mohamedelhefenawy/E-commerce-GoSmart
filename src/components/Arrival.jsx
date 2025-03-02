import Red from './Red'

export default function Arrival() {
  return (
    <div className="w-[80%] mx-auto flex flex-col  gap-10 mt-14">
        <Red name={'Featured'}/>
        <h1 className='font-inter text-4xl font-bold tracking-[4px]'>New Arrival</h1>


    <div className="flex flex-col lg:flex-row justify-between gap-8">
      {/* PlayStation 5 Section */}
      <div className="relative bg-black w-full lg:w-[50%]">
        <img
          src="Assets/ps5-slim-goedkope-playstation_large 1.png"
          alt="playstation"
          className="w-full  object-cover"
        />
        <div className="absolute bottom-8 left-8 flex flex-col gap-4 max-w-[40%]">
          <h1 className="text-white text-2xl font-semibold font-inter tracking-[2px]">
            PlayStation 5
          </h1>
          <p className="text-white text-sm">
            Black and White version of the PS5 coming out on sale.
          </p>
          <button className="text-white underline underline-offset-8 decoration-white self-start">
            Shop Now
          </button>
        </div>
      </div>
  
      {/* Right Column */}
      <div className="flex flex-col lg:w-[50%] justify-between gap-8">
        {/* Women’s Collection Section */}
        <div className="relative bg-black">
          <img
            src="Assets/attractive-woman-wearing-hat-posing-black-background 1.png"
            alt="woman"
            className="object-cover w-full h-auto"
          />
          <div className="absolute bottom-6 left-6 flex flex-col gap-1 max-w-[80%]">
            <h1 className="text-white  text-2xl font-semibold font-inter tracking-[2px]">
              Women’s Collections
            </h1>
            <p className="text-white text-sm">
              Featured woman collections.
            </p>
            <button className="text-white underline underline-offset-8 decoration-white self-start">
              Shop Now
            </button>
          </div>
        </div>
  
        {/* Perfume and Speakers Sections */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="relative bg-[radial-gradient(circle,gray,black)] min-w-[100%] lg:min-w-[45%] h-[200px] lg:h-[100%]">
            <img
              src="Assets/652e82cd70aa6522dd785109a455904c.png"
              alt="shoe"
              className="object-cover w-[150px] md:w-[20vw] mx-auto"
            />
            <div className="absolute bottom-6 left-6 flex flex-col gap-1">
              <h1 className="text-white font-bold font-inter text-xl tracking-[1px]">Perfume</h1>
              <p className="text-white text-sm">GUCCI INTENSE OUD EDP</p>
              <button className="text-white underline underline-offset-8 decoration-white self-start">
                Shop Now
              </button>
            </div>
          </div>
  
          <div className="relative bg-[radial-gradient(circle,gray,black)] min-w-[100%] lg:min-w-[45%] h-[200px] lg:h-[100%]">
            <img
              src="Assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1 (1).png"
              alt="extra item"
              className="object-cover w-[150px] md:w-[20vw] mx-auto"
            />
            <div className="absolute bottom-6 left-6 flex flex-col gap-1">
              <h1 className="text-white font-bold font-inter text-xl tracking-[1px]">Speakers</h1>
              <p className="text-white text-sm">Amazon wireless speakers</p>
              <button className="text-white underline underline-offset-8 decoration-white self-start">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
