'use client';
import React, {useContext} from 'react'
import AuthContext from '@/context/AuthContext'

export default function Home() {
 let {user} = useContext(AuthContext)
  return (
    
     (user) ? (
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
