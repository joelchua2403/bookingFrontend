'use client'
import React, { useEffect, useState, useContext} from 'react'
// import EnhancedTable from '@/components/ScheduleTable'
import EnhancedTable from '@/components/Table'
import BookingContext from '@/context/BookingContext';
import { useRouter } from 'next/navigation';
import { set } from 'date-fns';


const page = () => {
    const {getAllBookings, bookings, setBookings, booking, rowsPerPage, setRowsPerPage } = useContext(BookingContext);
    const router = useRouter();
  



useEffect(() => {
    getAllBookings();
    setTimeout(() => {
      setRowsPerPage(10)
    }
    , 100);
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
