import { useEffect, useState } from 'react';
//import useParams from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom';
import '/Users/rehabmahmoud/E-commerece-platform/ecommerce-react/src/ProductDetails.css'
function ProductDetails()
{
    //const {productID} = useParams();
    //console.log(productID);
    const [productData,setProductData]= useState('');
    const navigate = useNavigate();
    const goToSellerProfile = () => {
    navigate('/SellerProfile');
  };
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/1`)
            .then(res=>res.json())
            .then(data => setProductData(data))
    }, []); 
    return(
    <div>
    <h1>Product Details</h1>
    <img src={productData.image}/>
    <h4>{productData.category}</h4>
    <h2>{productData.title}</h2>
    <p>{productData.description}</p>
    <p>Price: ${productData.price}</p>
    <button onClick={goToSellerProfile}>Go to Seller Profile</button>
    </div>
    )
}
export default ProductDetails