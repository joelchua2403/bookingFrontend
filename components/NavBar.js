'use client';
import React from 'react'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react';
import AuthContext from '@/context/AuthContext'
import { useRouter } from 'next/navigation';


const Navbar = () => {
 
  const [isActive, setisActive] = useState(false);
  let {user, setIsLoggedOut} = useContext(AuthContext);
  const [newUser, setNewUser] = useState(user);
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    setNewUser(null);
    setIsLoggedOut(true);
  }

  
  useEffect(() => {
    setNewUser(user);
  }, [user])

  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/18/Republic_of_Singapore_Navy_Crest.svg/1200px-Republic_of_Singapore_Navy_Crest.svg.png" width="42" height="42" />
    </a>

    <a onClick={() => setisActive(!isActive)} role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
    <div className="navbar-start">
    <Link className="navbar-item" href="/">Home</Link>


    {newUser ? (
      <>
     <Link className="navbar-item" href="/schedule">
        Schedule
      </Link>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Bookings
        </a>

        <div className="navbar-dropdown">
        <Link className="navbar-item" href="/book">Book a slot</Link>
    
            <Link className="navbar-item" href={`/view/${encodeURIComponent(user.username)}`}>View bookings</Link>
         
          {/* <a className="navbar-item">
            Cancel/Edit booking
          </a> */}
          {/* <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a> */}
        </div>
      </div>

      <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                <Link className="navbar-item" href="http://localhost:3000/" onClick={logout}>Logout</Link>
              
          
          
          </div>
        </div>
      </div>
  </>
    ) : (
      <>
      <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">   
        <Link className="navbar-item" href="/login">Login</Link>
         
            </div>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons"></div>
           <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          </div>
          </div>
    
    </>
    )}
    
            
        
        
          </div>
 
  </div>
</nav>
    </div>

  )
}

export default Navbar
