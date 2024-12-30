import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import '../../custom_styles/style.css'

export default function SellerProfile() {
    const [seller, setSeller] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const sellerApiUrl = "https://randomuser.me/api/";
    const commentsApiUrl = "https://jsonplaceholder.typicode.com/comments?postId=1";
  
    useEffect(() => {
      async function fetchData() {
        try {
          const [sellerRes, commentsRes] = await Promise.all([
            fetch(sellerApiUrl),
            fetch(commentsApiUrl),
          ]);
  
          if (!sellerRes.ok || !commentsRes.ok) {
            throw new Error("Failed to fetch data");
          }
  
          const sellerData = await sellerRes.json();
          const commentsData = await commentsRes.json();
  
          setSeller({
            name: `${sellerData.results[0].name.first} ${sellerData.results[0].name.last}`,
            profilePicture: sellerData.results[0].picture.large,
            email: sellerData.results[0].email,
            rating: (Math.random() * 2 + 3).toFixed(1), 
          });
  
          setComments(commentsData.slice(0, 5)); 
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      }
  
      fetchData();
    }, []);
  
    const renderStars = (rating) => {
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 !== 0;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  
      return (
        <>
          {"★".repeat(fullStars)}
          {halfStar && "½"}
          {"☆".repeat(emptyStars)}
        </>
      );
    };
  
    if (loading) {
      return (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="alert alert-danger py-5 text-center">
          <h5>Error: {error}</h5>
        </div>
      );
    }
  
    return (
      <div className="container py-5">
        <div className="card mb-4 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4 text-center">
              <img
                src={seller.profilePicture}
                alt="Seller Profile"
                className="rounded-circle my-4"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h2 className="card-title">{seller.name}</h2>
                <p className="card-text text-muted">{seller.email}</p>
                <p className="card-text text-warning fs-4">{renderStars(seller.rating)}</p>
                <p className="text-muted">Rating: {seller.rating}/5</p>
              </div>
            </div>
          </div>
        </div>
  
          <div className="card shadow-sm">
          <div className="card-header text-white">
            <h3 className="mb-0">Customer Reviews</h3>
          </div>
          <div className="card-body">
            {comments.map((comment, index) => (
              <div key={index} className="d-flex mb-4">
                <div className="me-3">
                  <div
                    className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center"
                    style={{ width: "50px", height: "50px" }}
                  >
                    {comment.email.charAt(0).toUpperCase()}
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1">{comment.name}</h5>
                  <p className="mb-0">{comment.body}</p>
                  <small className="text-muted">Email: {comment.email}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }