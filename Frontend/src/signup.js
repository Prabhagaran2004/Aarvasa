import React from "react";
import "./signup.css";

const SignUp = () => {
  return (
    <div className="containerl">
      {/* Sign-Up Section */}
      <main className="main-content">
        <div className="signupwith-block">
          <div className="signup-container">
            <div className="social-signup">
              <button className="facebook">Sign up using Facebook</button>
              <button className="google">Sign up using Google</button>
              <button className="apple">Sign up with Apple</button>
            </div>
            <p>or sign up with your details</p>
            <form>
              <input type="text" placeholder="Full Name" required />
              <div className="contact-input">
                <input
                  type="text"
                  placeholder="+Country Code"
                  required
                  className="country-code"
                />
                <input
                  type="text"
                  placeholder="Contact No."
                  required
                  className="contact-number"
                />
              </div>
              <input type="email" placeholder="Your Email" required />
              <input type="password" placeholder="Password" required />
              <input type="number" placeholder="Age" required />
              <input type="text" placeholder="Area" required />
              <input type="text" placeholder="Pincode" required />
              <input type="text" placeholder="State" required />
              <input type="text" placeholder="District" required />
              <input type="text" placeholder="Road No." required />
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </form>
            <p>
              Already have an account? <a href="#">Log in</a>
            </p>
          </div>
          <strong className="view-policy1">
            By signing up for Aarvasa, you agree to the Terms of Service.
            <br />
          </strong>
          <strong className="view-policy">View our Privacy Policy</strong>
        </div>

        {/* Logo and Tagline */}
        <div className="logo-section">
          <img src="/ARVA-removebg-preview 2.png" alt="Aarvasa Logo" />
          <h1>AARVASA</h1>
          <p className="for-mob">
            BUILDING DREAMS,
            <div>SECURING FUTURES.</div>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="footerapp">
        <div className="footerapp-section">
          <div className="logon">
            <div className="oval-bg">
              <img
                src="/AarvasaL.png"
                alt="Aarvasa Logo 1"
                className="logon-image"
              />
            </div>
          </div>
          <p>Building Dreams, Securing Futures</p>
          <div className="appsocial-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="footerapp-section">
          <h3 className="underlinedapp">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Team</li>
          </ul>
        </div>
        <div className="footerapp-section">
          <h3 className="underlinedapp">Privacy & Terms</h3>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund and Cancellation Policy</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="footerapp-section">
          <h3 className="underlinedapp">Contact Us</h3>
          <p>Technology Tower, VIT Vellore</p>
          <p>Room No. 004, Ground Floor</p>
          <p>Vellore, Tamil Nadu, 632014</p>
          <p>Email: theaarvasa@gmail.com</p>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
