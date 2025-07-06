import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

export const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Your Web3Forms access key
    formData.append("access_key", "be2933c5-964f-42cf-a40a-04dc67805c90");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Your message was sent successfully!");
        event.target.reset(); // clear the form
      } else {
        alert("❌ Something went wrong. Please try again.");
        console.error("Web3Forms Error:", data);
      }
    } catch (error) {
      alert("⚠️ Error submitting form. Check your internet connection or access key.");
      console.error("Network Error:", error);
    }
  };

  return (
    <div className='contact'>
      <div id='contact' className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="contact-section">
        {/* Left Side */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I’m open to professional opportunities, collaborations, and meaningful conversations in the tech space. If you have a project in mind or simply want to connect, feel free to reach out.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>ramvarsha2710@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="phone" />
              <p>+91 63811 95644</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>Dharapuram, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />

          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />

          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>

          <button className="contact-submit" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
