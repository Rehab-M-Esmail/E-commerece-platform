import { useState } from "react";
import FormInput from "./FormInput";
import user_icon from "../assets/user.png";
import mail_icon from "../assets/mail.png";
import password_icon from "../assets/locked-computer.png";
import birthday_icon from "../assets/birthday-cake.png";

const Signup = () => {
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
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            error={passwordMatchError && input.name === "confirmpassword" ? "Passwords don't match!" : input.errorMessage}
          />
        ))}
        {passwordMatchError && (
          <p style={{ color: "red" }}>Passwords do not match!</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;