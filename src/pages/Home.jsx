import Sale from '../components/sale'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Flash from '../components/Flash'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import JBE from '../components/JBE'
import Explore from '../components/Explore'
import Arrival from '../components/Arrival'
import Cards from '../components/Cards'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>

      <Hero/>
      <Flash/>
      <Category/>
      <BestSeller/>
      <JBE/>
      <Explore/>
      <Arrival/>
      <Cards/>
      
    </div>
  )
}
