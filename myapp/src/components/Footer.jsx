import React from 'react';

const Footer = () => {
      return (
            <footer className="footer">
                  <div className="footer-container">
                        <div className="footer-brand">
                              <h2>MyWebsite</h2>
                              <p>© {new Date().getFullYear()} All rights reserved.</p>
                        </div>

                        <div className="footer-links">
                              <a href="/">Home</a>
                              <a href="/about">About</a>
                              <a href="/projects">Projects</a>
                              <a href="/contact">Contact</a>
                        </div>

                        <div className="footer-socials">
                              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
