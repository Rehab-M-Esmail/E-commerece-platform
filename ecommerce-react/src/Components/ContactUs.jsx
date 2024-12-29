import React from "react";
import "./conta.css"
const ContactUs = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "99c43f44-cf55-4aa7-82c9-fe67d71b3ff7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        Swal.fire({
            title: "Good job!",
            text: "Your message has been successfully sent!",
            icon: "success"
          });
          event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
<section className='contact'>
   <form onSubmit={onSubmit}>
       <h2>Contact Us form</h2>
       <div className='input-box'>
            <label>Full Name</label>
            <input name="name" type="text"  className="input-field" required />
       </div>
       <div className='input-box'>
            <label>Email</label>
            <input name="email" type="email" className="input-field" required />
       </div>
       <div className='input-box'>
            <label>Type your inquiry </label>
            <textarea name="message" id="" className="input-field" required></textarea>
       </div>
       <button type='submit' className='submit-btn'>
           Send message
       </button>
   </form>
</section>
  )
}
export default ContactUs
