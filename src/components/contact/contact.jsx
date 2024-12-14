import React from "react";
import "./contact.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/videos/book2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Contact Details Footer */}
      <div className="contact-footer">
        <h3>Admin Contact Details:</h3>
        <ul>
          <li>
            <strong>Email:</strong> madhumitha@bookstore.com
          </li>
          <li>
            <strong>Phone:</strong> +91 8838457901
          </li>
          <li>
            <strong>Office Address:</strong> srishakthicollege, Coimbatore, Tamilnadu, 641062

          </li>
          <li>
            <strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
