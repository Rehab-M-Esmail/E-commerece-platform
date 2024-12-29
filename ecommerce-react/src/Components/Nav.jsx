import "./Nav.css"
const Navbar = () => {
    return (
      <nav className="nav">
        <div className="container">
          <div className="logo">MyEcommerce</div>
          <div className="nav-items">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/Profile">Profile</a></li>
              <li><a href="/Cart">Cart</a></li>
              <li><a href="/contact" className="contact-btn">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar
