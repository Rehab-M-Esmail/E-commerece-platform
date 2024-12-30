import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="nav-custom">
      <div className="nav-container">
        <div className="nav-logo">MyEcommerce</div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="/products">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
            <li>
              <a href="/contact" className="contact-btn">
                Contact Us
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
