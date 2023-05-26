'use client';
import React, {useContext, useState, useEffect} from 'react'
import AuthContext from '@/context/AuthContext'

export default function Home() {
 let {user, isLoggedOut} = useContext(AuthContext)
 const [newUser, setNewUser] = useState(null);


  return (
    
     (user && !isLoggedOut) ? (
      <section className="section is-medium">
        
  <h1 className="title">Welcome {user.username}</h1>
  <h1 className="title">Berth and timeslot booking</h1>
  <h2 className="subtitle">
    Book a berth and timeslot for your vessel
  </h2>
</section>
      ) : (
          <section className="section is-medium">
  <h1 className="title">Welcome</h1>
  <h1 className="title">Berth and timeslot booking</h1>
  <h2 className="subtitle">
    Book a berth and timeslot for your vessel
  </h2>
</section>
      )
  
  )
}
