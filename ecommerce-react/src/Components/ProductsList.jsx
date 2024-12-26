import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useState, useEffect} from 'react';
export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
          setProducts(data);
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to fetch products');
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return (
        <div className="container text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="container py-5">
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      );
    }
  
    return (
      <div className="container py-5">
         <h2 className="mb-4">Search Results</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate" title={product.title}>
                    {product.title}
                  </h5>
                  <p className="card-text small text-truncate" title={product.description}>
                    {product.description}
                  </p>
                  <div className="mt-auto">
                    <p className="card-text fw-bold text-primary mb-2">
                      ${product.price}
                    </p>
                    <button className="btn btn-primary w-100">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }