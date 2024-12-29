
import  { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/UserProfile.css'; 
import { FaEdit } from 'react-icons/fa'; 

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/1')
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (!user) {
    return <div className="text-center mt-5">Error loading user profile.</div>;
  }

  return (
  <div className="container mt-5">
      <div className="profile-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="profile-header d-flex align-items-center justify-content-between bg-light p-3">
          <h4 className="mb-0">Profile Settings</h4>
          <FaEdit className="text-primary" style={{ cursor: 'pointer' }} title="Edit" />
        </div>
        <div className="profile-body d-flex p-4">
          <div className="profile-avatar me-4">
            <img 
              src="/ecommerce-react/public/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" 
              alt="User Avatar" 
              className="rounded-circle" 
              style={{ width: '150px', height: '150px' }} 
            />
          </div>
          <div className="profile-info w-100">
            <h5>{`${user.name.firstname} ${user.name.lastname}`}</h5>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {`${user.address.number} ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
          </div>
        </div>
        <div className="profile-footer bg-light p-3 d-flex justify-content-end">
          <button className="btn btn-primary me-2">Save Changes</button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
