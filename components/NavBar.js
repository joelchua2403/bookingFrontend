'use client';
import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const Navbar = () => {

  const [isActive, setisActive] = useState(false);


  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Republic_of_Singapore_Navy_Crest.svg/1200px-Republic_of_Singapore_Navy_Crest.svg.png" width="42" height="42" />
    </a>

    <a onClick={() => setisActive(!isActive)} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
    <div class="navbar-start">
    <Link class="navbar-item" href="/">Home</Link>

      <a class="navbar-item">
        Schedule
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Bookings
        </a>

        <div class="navbar-dropdown">
        <Link class="navbar-item" href="/book">Book a slot</Link>
    
            <Link class="navbar-item" href="/view">View bookings</Link>
         
          <a class="navbar-item">
            Cancel/Edit booking
          </a>
          <hr class="navbar-divider" />
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
