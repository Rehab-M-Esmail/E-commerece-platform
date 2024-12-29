
import './App.css'
import Confirmation from './Components/Confirmation' 
import Login from './Components/Login'
import Product from './Components/Product'
import ProductsList from './Components/ProductsList'
import SellerProfile from './Components/SellerProfile'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    birthday: "",
  });
  
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
      icon: user_icon,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true,
      icon: mail_icon,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      icon: password_icon,
      pattern: "^[A-Za-z0-9]{4,}$",
    },
    {
      id: 4,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      required: true,
      icon: password_icon,
    },
    {
      id: 5,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      required: true,
      icon: birthday_icon,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmpassword) {
      setPasswordMatchError(true);
    } else {
      setPasswordMatchError(false);
      console.log(values);
      alert("Form submitted successfully!");
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    if (e.target.name === "password" || e.target.name === "confirmpassword") {
      if (values.password !== values.confirmpassword) {
        setPasswordMatchError(true);
      } else {
        setPasswordMatchError(false);
      }
    }
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="/login" element={<Login/>}></Route>
        <Route path='checkout' element={<Confirmation/>}></Route>
        <Route path='seller' element={<SellerProfile/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App