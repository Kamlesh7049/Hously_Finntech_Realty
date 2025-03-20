import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser, FaMobileAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <>
      {/* Contact Header Section */}
      <div className="text-light text-center py-5 header-section">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="lead text-warning">We would love to hear from you!</p>
      </div>

      {/* Contact Form & Info */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="card p-4 shadow-lg border-0 form-box">
              <h4 className="fw-bold text-primary">Get in Touch</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label"><FaUser /> Name</label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label"><FaEnvelope /> Email</label>
                  <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label"><FaMobileAlt /> Mobile</label>
                  <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                  <label className="form-label"><FaEnvelope /> Message</label>
                  <textarea className="form-control" name="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-gradient w-100">Submit</button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-6">
            <div className="card p-4 shadow-lg border-0 text-light contact-info">
              <h4 className="fw-bold text-warning">Contact Details</h4>
              <p><FaPhone /> Toll-Free: <a href="tel:00000000000" className="contact-link">00000000000</a></p>
              <p><FaEnvelope /> Email: <a href="mailto:support@example.com" className="contact-link">support@example.com</a></p>
              <p><FaMapMarkerAlt /> Address: <strong>Rahatani Rd, Pune, India</strong></p>
              <div className="container my-5">
  <h4 className="fw-bold text-center mb-4" style={{ color: "#0074D9" }}>Our Location</h4>
  <div className="d-flex justify-content-center">
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.4554618292426!2d73.789973!3d18.603582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b84c4cf1ff3f%3A0xf6d8d8e3d5f5f8a9!2sRahatani%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411017!5e0!3m2!1sen!2sin!4v1646038235637!5m2!1sen!2sin"
      width="100%"
      height="200"
      style={{ border: "0", borderRadius: "10px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
            </div>
           </div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <a href="tel:00000000000" className="floating-btn"><FaPhone /></a>

      {/* Styles */}
      <style jsx>{`
        .header-section {
          background: linear-gradient(45deg, #0074D9, #0056b3);
        }
        .form-box {
          border-radius: 10px;
        }
        .contact-info {
          background: #222;
          border-radius: 10px;
        }
    
  .btn-gradient {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    border: none;
    padding: 10px;
    font-weight: bold;
    border-radius: 8px;
    transition: 0.3s;
  }
  .btn-gradient:hover {
    opacity: 0.8;  }


        .contact-link {
          color: #FFD700;
          font-weight: bold;
          text-decoration: none;
        }
        .floating-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #0074D9;
          color: white;
          padding: 15px;
          border-radius: 50%;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
          text-align: center;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ContactUs;   