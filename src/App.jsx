import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Women1 } from './components/Women/Files/Women-new-arrivals'
import { ProductDetails } from './components/Product_Details/ProductDetails'
import { WomenBestSellers } from './components/Women/Files/WomenBestSellers'
import { WomenTopRated } from './components/Women/Files/WomenTopRated'
import { WomenBrandWeLove } from './components/Women/Files/WomenBrandWeLove'
import { WomenReImagined } from './components/Women/Files/WomenReImagined'
import { WomenShopAll } from './components/Women/Files/WomenShopAll'
import { MenNewArrival } from './components/Men/Files/MenNewArrival'
import { MenTopRated } from './components/Men/Files/MenTopRated'
import { MenBestSellers } from './components/Men/Files/BestSellersMen'
import { MenBrandWeLove } from './components/Men/Files/MenBrandWeLove'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <Women1/> */}
     {/* <WomenBestSellers/> */}
     {/* <WomenTopRated/> */}
     {/* <WomenBrandWeLove/> */}
     {/* <WomenReImagined/> */}
     {/* <WomenShopAll/> */}
    {/* <MenNewArrival/> */}
    {/* <MenTopRated/> */}
    {/* <MenBestSellers/> */}
    <MenBrandWeLove/>
    
    </div>
  )
}

export default App
