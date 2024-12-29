import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
function ProductDetails()
{
    const {productID} = useParams();
    console.log(productID);
    const [productData,setProductData]= useState('');
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productID}`)
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


    </div>
    )
}
export default ProductDetails