import { useEffect, useState } from 'react';
import useParams from 'react-router-dom'
function ProductDetails()
{
    const {productID} = useParams();
    console.log(productID);
    const [productData,setProductData]= useState('');
    const FetchProductData =()=>{
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data => setProductData(data))
    }
    useEffect(()=>{
            FetchProductData();
        },[productID])
    return(
  <div>
    <h1>Product Details</h1>
      <h2>{productData.name}</h2>
      <p>{productData.description}</p>
      <p>Price: ${productData.price}</p>
  </div>
    )
}
export default ProductDetails