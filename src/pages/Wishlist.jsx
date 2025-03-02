import Red from '../components/Red'
import Wishlistproduct from '../components/Wishlistproduct'

export default function Wishlist() {
  const products = [{
    has_sale: true,
    type: 'wishlist',
    sale: '-35%',
    photo: 'Assets/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png',
    name: 'Product Name',
    price: 100,
    sale_price: 90,
    number_of_stars: 4,
    comments: 100
  },
  {
    has_sale: false,
    type: 'wishlist',
    sale: 'Sale',
    photo: 'Assets/gammaxx-l240-argb-1-500x500 1.png',
    name: 'Product Name',
    price: 100,
    sale_price: 90,
    number_of_stars: 4,
    comments: 100
  },
  {
    has_sale: true,
    type: 'wishlist',
    sale: '-50%',
    photo: 'Assets/GP11_PRD3 1.png',
    name: 'Product Name',
    price: 100,
    sale_price: 90,
    number_of_stars: 4,
    comments: 100
  },
  {
    has_sale: false,
    type: 'wishlist',
    sale: 'Sale',
    photo: 'Assets/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png',
    name: 'Product Name',
    price: 100,
    sale_price: 90,
    number_of_stars: 4,
    comments: 100
  }]

  const products_2 = [{
    has_sale: false,
    type: 'view',
    sale: '-35%',
    photo: 'Assets/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png',
    name: 'Product Name',
    price: 100,
    sale_price: 90,
    number_of_stars: 4,
    comments: 100
  },
  {
    has_sale: false,
    type: 'view',
    sale: 'Sale',
    photo: 'Assets/gammaxx-l240-argb-1-500x500 1.png',
    name: 'Product Name',
    price: 100,
    sale_price: 90,
    number_of_stars: 4,
    comments: 100
  },
  {
    has_sale: false,
    type: 'view',
    sale: 'Sale',
    photo: 'Assets/GP11_PRD3 1.png',
    name: 'Product Name',
    price: 100,
    sale_price: 90,
    number_of_stars: 4,
    comments: 100
  },
  {
    has_sale: false,
    type: 'view',
    sale: 'Sale',
    photo: 'Assets/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png',
    name: 'Product Name',
    price: 100,
    sale_price: 90,
    number_of_stars: 4,
    comments: 100
  }]
  return (
    <div className='flex flex-col gap-20 w-[80%] mx-auto my-10 font-poppins'>
      
      <div className='flex flex-col gap-5'>
        <div className='flex items-center  justify-between'>
          <p >Wishlist (4)</p>
          <button className=' px-6 py-4 md:px-12  border border-black'>Move All To Bag</button>
        </div>
        <div className=' flex flex-wrap items-center justify-between  gap-5'>
          {products.map((product,index)=>(
            <Wishlistproduct {...product} key={index}/>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-5'>
        <div className='flex items-center  justify-between'>
          <Red name={'Just For You'}/>
          <button className='px-6 py-4 md:px-12 border border-black'>See ALL</button>
        </div>
        <div className=' flex flex-wrap items-center justify-between  gap-5'>
          {products_2.map((product,index)=>(
            <Wishlistproduct {...product} key={index}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}
