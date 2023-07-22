import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
<div>
  <div>
    <footer className="pt-100">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-logo">
                <Link to='/'>
                  <img src="assets/img/logo.png" alt="Logo" />
                </Link>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has
                  survived not only five centuries, but also the leap into electronic.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-company">
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link to='/about' >About</Link>
                  </li>
                  <li>
                    <Link to='/services' >Services</Link>
                  </li>
                  <li>
                    <Link to='/projects'>Projects</Link>
                  </li>
                  <li>
                    <Link to='/team' >Team</Link>
                  </li>
                  <li>
                    <Link to='/blog' >Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-company">
                <h3>Support</h3>
                <ul>
                  <li>
                    <Link to='/faq' >FAQ</Link>
                  </li>
                  <li>
                    <Link to='/privacypolicy'>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to='/terms'>Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link to='/community'>Community</Link>
                  </li>
                  <li>
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="footer-item">
              <div className="footer-contact">
                <h3>Contact Info</h3>
                <ul>
                  <li>
                    <span>Location: 6th Floor, Barbosa, Sidney</span>
                  </li>
                  <li>
                    <span>Email:</span>
                    <a href="cdn-cgi/l/email-protection#a9c0c7cfc6e9c5c0d1c087cac6c4" target="_blank"><span className="__cf_email__" data-cfemail="640d0a020b24080d1c0d4a070b09">[email&nbsp;protected]</span></a>
                  </li>
                  <li>
                    <span>Phone:</span>
                    <a href="tel:+0123456789" target="_blank" rel='noreferrer'>+0123 456 789</a>
                  </li>
                </ul>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#abc" target="_blank">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#abc" target="_blank">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#abc" target="_blank">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#abc" target="_blank">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <p>Copyright @
            Lixi. Designed By <a href="https://github.com/rahul25062002" target="_blank" rel='noreferrer'>Rahul Kumar</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</div>

  );
}
