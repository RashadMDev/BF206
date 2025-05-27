import React from 'react'
import './Navbar.scss'

const Navbar = () => {
      return (
            <>
                  <div className='navbar-wrapper'>
                        <div className='search-logo'>
                              <div className="input">
                                    <input type="text" />
                              </div>
                              <h1 className="logo">Adalene</h1>
                        </div>
                        <div className='right-side'>
                              <div className="socials">
                                    <ul>
                                          <li>F</li>
                                          <li>I</li>
                                          <li>T</li>
                                          <li>P</li>
                                    </ul>
                              </div>
                              <div className='test'>
                                    <div className="login">
                                          <p>
                                                Log in
                                          </p>
                                    </div>
                                    <div className="cart">
                                          Cart
                                    </div>
                              </div>
                        </div>

                        <div className="hamburger">
                              <span></span>
                              <span></span>
                              <span></span>
                        </div>
                  </div>
                  <div className="mobile-logo">
                        <h1 className="logo">Adalene mob</h1>
                  </div>
            </>
      )
}

export default Navbar