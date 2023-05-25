'use client';
import React, {useState, useEffect } from 'react'


const page = ({params}) => {


  const [booking, setBooking] = useState([])

  useEffect(() => {
    getBooking()
  }, [])


  let getBooking = async () => {
    let res = await fetch("http://localhost:8000/api/view/")
    let data = await res.json()
    setBooking(data)
    console.log(data)
  }

  return (
    <>
    <section className="section">
  <h1 className="title">View your booking status</h1>
  <h2 className="subtitle">
    View your booking status here
  </h2>
</section>

<section className="section">
  
 {booking.filter(booking => booking.id == params.bookingId ).map(booking => (
  <>
  <h3>You have booked harbour clearance for {booking.vesselName} on {booking.date}, {booking.time} at berth: {booking.berth}.</h3>
  </>
  ))}
</section> 
</>
  )

}

export default page
