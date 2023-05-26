'use client'
import React from 'react'
import { useContext, useEffect } from 'react'
import BookingContext from '@/context/BookingContext'
import { useRouter } from 'next/navigation'
import AuthContext from '@/context/AuthContext'

const page = ({params}) => {

 const {user} = useContext(AuthContext)
 const {booking, getBookingById, setRefreshNeeded} = useContext(BookingContext)

const router = useRouter();
useEffect(() => {
    getBookingById(params.id)
    console.log(booking)
}, [])

const deleteBooking = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/api/delete/${params.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            router.push(`/view/${user.username}`)
        }
    } catch (error) {
        console.log(error)
    }
}


  return (
    <section className="section is-medium">
    <div>
        <h1>Are you sure you want to delete this booking?</h1>
        <div className="box" key={booking.id}>
  <h3><strong> Booking ID: </strong> {booking.id}</h3>
  <h3> <strong>Date: </strong>{booking.date}</h3>
  <h3><strong>Time: </strong> {booking.time}</h3>
  <h3> <strong>Berth: </strong> {booking.berth}.</h3>
  <h3><strong>Your message: </strong>{booking.message}</h3>
    </div>
        
        <button className="button is-info is-light" 
        onClick={() => {
            deleteBooking(booking.id)
            setRefreshNeeded(true)
        }}>Yes</button>
        <button  className="button is-danger is-light" 
        onClick={() => {
            setRefreshNeeded(true)
            router.push(`/view/${user.username}}`)
        }}>No</button>
    </div>
    </section>
  )
}

export default page
