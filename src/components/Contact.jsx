import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "../components/contact.css";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <main>
        <Navbar />
        <div className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="contact-title">
              Get in <span className="highlight">Touch</span>
            </h1>
            <p className="contact-subtitle">
              Have a question or want to work together? We'd love to hear from
              you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-wrapper">
            <div className="contact-info-section">
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={28} />
                </div>
                <h3>Email Us</h3>
                <p>info@mercer.com</p>
                <p>support@mercer.com</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Phone size={28} />
                </div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={28} />
                </div>
                <h3>Visit Us</h3>
                <p>93 Sapphire Avenue</p>
                <p>Lahore, Gulberg</p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Clock size={28} />
                </div>
                <h3>Business Hours</h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="contact-form-section">
              <div className="form-card">
                <div className="form-header">
                  <MessageCircle size={32} />
                  <h2>Send us a Message</h2>
                  <p>
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows="6"
                      required
                    ></textarea>
                  </div>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="Dark"
                  />

                  <button onClick={<handleSubmit />} type="submit" className="submit-btn">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Contact;
