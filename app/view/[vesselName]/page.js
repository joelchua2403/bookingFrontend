'use client';
import React, {useState, useEffect, use } from 'react'
import { useContext } from 'react';
import BookingContext from '@/context/BookingContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const page = () => {

  const router = useRouter();
  const {booking, getBooking, refreshNeeded, setRefreshNeeded} = useContext(BookingContext)
 


  useEffect(() => {
    getBooking();
    console.log("refreshNeeded:", refreshNeeded)
  }, [refreshNeeded])

  

  

if (booking.length === 0) {
  return(
  <section className="section">
  <h1 className="title">You have no bookings</h1>
  </section>
  )
} else {

  return (
    <>
    <section className="section">
  <h1 className="title">View your booking status</h1>
  <h2 className="subtitle">
    View your booking status here
  </h2>
</section>
  {!refreshNeeded && booking && booking.map(booking => (
    <section className="section">
       <div className="box" key={booking.id}>
        <h3><strong> Vessel name: </strong> {booking.vesselName}</h3>
       <h3><strong> Booking ID: </strong> {booking.id}</h3>
        <h3><strong> Date: </strong> {booking.date_time.date}</h3>
          <h3><strong> Time: </strong> {booking.date_time.time}</h3>
       <h3> <strong>Berth: </strong> {booking.berth}</h3>
       <h3><strong>Activity:</strong> {booking.activity.toUpperCase()} </h3>
       <h3><strong>Remarks: </strong>{(booking.message).toUpperCase()}</h3>
        <h3><strong>Pilot Required: </strong>{booking.pilot.toUpperCase()}</h3>
        <h3><strong>No of Tugs: </strong>{booking.tug}</h3>
      {/* <Link href={`/update/${encodeURIComponent(booking.id)}`}><button className="button is-primary is-light" >Edit</button></Link> */}
      <Link href={`/delete/${encodeURIComponent(booking.id)}`}><button className="button is-danger is-light">Delete</button></Link>
      </div>
      </section> 
))}
</>
)


}

}
export default page
