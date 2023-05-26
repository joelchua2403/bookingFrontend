'use client';
import React, {useState, useEffect } from 'react'
import { useContext } from 'react';
import BookingContext from '@/context/BookingContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const page = () => {

  const router = useRouter();
  const {booking, getBooking} = useContext(BookingContext)



  

  useEffect(() => {
    getBooking()
    console.log(booking)
  }, [])
  

  return (
    <>
    <section className="section">
  <h1 className="title">View your booking status</h1>
  <h2 className="subtitle">
    View your booking status here
  </h2>
</section>

<section className="section">
  
 {booking && booking.map(booking => (
   <div className="box" key={booking.id}>
    <h3><strong> Vessel name: </strong> {booking.vesselName}</h3>
   <h3><strong> Booking ID: </strong> {booking.id}</h3>
   <h3> <strong>Date: </strong>{booking.date}</h3>
   <h3><strong>Time: </strong> {booking.time}</h3>
   <h3> <strong>Berth: </strong> {booking.berth}</h3>
   <h3><strong>Your message: </strong>{booking.message}</h3>
  <Link href={`/update/${encodeURIComponent(booking.id)}`}><button className="button is-primary is-light" >Edit</button></Link>
  <Link href={`/delete/${encodeURIComponent(booking.id)}`}><button className="button is-danger is-light">Delete</button></Link>
  </div>
  ))}
</section> 
</>
  )

}

export default page
