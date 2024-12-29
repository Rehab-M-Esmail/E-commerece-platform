import './App.css'
import Confirmation from './Components/Confirmation' 
import Login from './Components/Login'
import Product from './Components/Product'
import ProductsList from './Components/ProductsList'
import SellerProfile from './Components/SellerProfile'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
import Signup from './components/Signup'
import Nav from './Components/Nav'
import UserProfile from './Components/UserProfile'
import { Profiler } from 'react'

function App() {
  
  return (
   <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path='/products' element={<ProductsList/>}></Route>
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='checkout' element={<Confirmation/>}></Route>
        <Route path='seller' element={<SellerProfile/>}></Route>
        <Route path='profile' element={<UserProfile/>}/>
      </Routes>
    </BrowserRouter>
  </>
    
  )
}

export default App