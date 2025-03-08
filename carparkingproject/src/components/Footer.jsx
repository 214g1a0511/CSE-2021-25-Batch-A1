import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <img
              src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
              alt="Logo"
              className="img-fluid mb-3"
              style={{ height: "32px" }}
            />
            <p className="text-white"> {/* Changed to text-white for visibility */}
              Smart parking solutions for modern cities. Making parking easier,
              safer, and more convenient.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 text-white">Quick Links</h5> {/* Changed to text-white */}
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-white text-decoration-none">About Us</span> {/* Changed to text-white */}
              </li>
              <li className="mb-2">
                <span className="text-white text-decoration-none">Services</span> {/* Changed to text-white */}
              </li>
              <li className="mb-2">
                <span className="text-white text-decoration-none">Locations</span> {/* Changed to text-white */}
              </li>
              <li className="mb-2">
                <span className="text-white text-decoration-none">Contact</span> {/* Changed to text-white */}
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 text-white">Connect With Us</h5> {/* Changed to text-white */}
            <div className="d-flex gap-3">
              <span className="text-white text-decoration-none">
                <FaFacebookF />
              </span>
              <span className="text-white text-decoration-none">
                <FaTwitter />
              </span>
              <span className="text-white text-decoration-none">
                <FaInstagram />
              </span>
              <span className="text-white text-decoration-none">
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-3">
            <h5 className="text-uppercase mb-4 text-white">Newsletter</h5> {/* Changed to text-white */}
            <p className="text-white"> {/* Changed to text-white */}
              Subscribe to our newsletter for updates and offers.
            </p>
            <form>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="btn-secondary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-5 pt-4 border-top border-secondary">
          <p className="text-white text-center mb-0"> {/* Changed to text-white */}
            &copy; 2025 Smart Parking. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;