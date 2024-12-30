import { useEffect, useState } from 'react';
import '../../custom_styles/ProductDetails.css';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetails() {
    const { productID } = useParams();
    const [productData, setProductData] = useState('');
    const navigate = useNavigate();

    const goToSellerProfile = () => {
        navigate('/SellerProfile');
    };

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then((res) => res.json())
            .then((data) => setProductData(data));
    }, [productID]);

    return (
        <div className="product-container">
            <div className="profile-img-container">
                <img src={productData.image} alt={productData.title} />
            </div>
            <div className="product-info">
                <h1>Product Details</h1>
                <h4>{productData.category}</h4>
                <h2>{productData.title}</h2>
                <p>{productData.description}</p>
                <p className="price">Price: ${productData.price}</p>
                <button onClick={goToSellerProfile}>Go to Seller Profile</button>
            </div>
        </div>
    );
}

export default ProductDetails;
