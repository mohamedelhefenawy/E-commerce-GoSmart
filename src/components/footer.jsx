
export default function Footer() {
  return (
    <footer className='mt-5 bg-black w-full text-white font-poppins '>
        <div className="flex flex-wrap  gap-20 text-sm  font-medium w-[80%] mx-auto py-10">
        <div className='flex flex-col gap-4 '>
            <h1 className='font-semibold text-xl'>
                Exclusive
            </h1>
            <h2 className='text-lg text-medium'>Subscribe</h2>
            <h3 className='text-sm'>Get 10% off your first order</h3>
            <div className='flex items-center gap-3 border border-white w-fit p-2 rounded-md'>
                <input type="text" className='bg-black text-white focus:outline-none ' placeholder='Enter your email' />
                <img src="icons/icon-send.svg" alt="send" className='w-6 h-6 invert' />
            </div>
        </div>
        <div className='flex flex-col gap-4'>
        <h2 className='text-lg text-medium'>Support</h2>
        <h4 >111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h4>
        <h5>exclusive@gmail.com</h5>
        <h6>+88015-88888-9999</h6>
        </div>

        <div className='flex flex-col gap-4'>
        <h2 className='text-lg text-medium'>Account</h2>
        <h4 >My Account</h4>
        <h5>Login / Register</h5>
        <h6>Cart</h6>
        <h6>Wishlist</h6>
        <h6>Shop</h6>
        </div>

        <div className='flex flex-col gap-4'>
        <h2 className='text-lg text-medium'>Quick Link</h2>
        <h4 >Privacy Policy</h4>
        <h5>Terms Of Use</h5>
        <h6>FAQ</h6>
        <h6>Contact</h6>
        </div>

        <div className='flex flex-col gap-4'>
            <h2 className='text-lg text-medium'>Download App</h2>
            <h3 className='text-gray-400'>Save $3 with App New User Only</h3>
            <div className='flex items-center justify-between gap-2 '>
                <img src="Assets/Qrcode 1.png" alt="qr_code" className='w-20 h-20' />
                <div className='flex flex-col gap-1'>
                    <img src="Assets/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png" alt="google_play" className='h-10 w-36' />
                    <img src='Assets/download-appstore.png' alt='app_store' className='h-10 w-36'/>
                </div>

            </div>
            <div className='flex items-center justify-between '>
                <img src="icons/Icon-Facebook.svg" alt="facebook" className='w-8 h-8 '  />
                <img src="icons/Icon-Twitter.svg" alt="twitter" className='w-8 h-8 ' />
                <img src="icons/icon-instagram.svg" alt="instagram" className='w-8 h-8 ' />
                <img src="icons/Icon-Linkedin.svg" alt="linkedin" className='w-8 h-8 ' />
            </div>
        </div>
        </div>
      
    </footer>
  )
}
