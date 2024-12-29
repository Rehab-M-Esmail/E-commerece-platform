
import './App.css'
import Confirmation from './Components/Confirmation' 
import Login from './Components/Login'
import Product from './Components/Product'
import ProductsList from './Components/ProductsList'
import SellerProfile from './Components/SellerProfile'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path='checkout' element={<Confirmation/>}></Route>
        <Route path='seller' element={<SellerProfile/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
