import { Routes , Route } from "react-router-dom"
import Sale from "./components/sale"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <Sale/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>

    </div>
  )
}

export default App
