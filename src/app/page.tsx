import Category from "./component/Category"
import Explore from "./component/Explore"
import Fetured from "./component/Fetured"
import Freedelvry from "./component/FreeDelivery"
import FreshSales from "./component/FreshSales"
import Hero from "./component/Hero"
import Music from "./component/Music"
import Products from "./component/Product"




const Home = ()=>{
  return(
    <div className=" bg-white">
        
  <Hero/>
  <FreshSales/>
  <Category/>
  <Products/>
  <Music/>
  <Explore/>
  <Fetured/>
  <Freedelvry/>
    </div>

  )
}

export default Home