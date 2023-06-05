'use client'
import React, { useEffect, useState, useContext} from 'react'
// import EnhancedTable from '@/components/ScheduleTable'
import EnhancedTable from '@/components/Table'
import BookingContext from '@/context/BookingContext';
import { set } from 'date-fns';


const page = () => {
    const {getAllBookings, bookings, setBookings, booking} = useContext(BookingContext);

useEffect(() => {
    getAllBookings();
}, []);

  return (
    <div>
         <section className="section is-medium">
  <h1 className="title">Schedule</h1>
  <h2 className="subtitle">
    View all bookings here
  </h2>
</section>

{/* <EnhancedTable /> */}
<EnhancedTable booking={booking}/>
    </div>
  )
}

export default page
