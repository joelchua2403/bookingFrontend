'use client';
import React, {useState, useEffect, use} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@/components/CreateForm';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import BookingContext from '@/context/BookingContext';


const page = ({params}) => {
    const [submitting, setSubmitting] = useState(false);
    let {user} = useContext(AuthContext);
    // let {getAllBookings, booking, setBooking} = useContext(BookingContext);
   

    // const [timingsBooked, setTimingsBooked] = useState([]);

    let router = useRouter();

    


    // useEffect(() => {
    //     const getBookingDate = async () => {
    //         const response = await fetch(`http://localhost:8000/api/view/date/${params.date}/`);
    //         const data = await response.json();
    //         const timingsBooked = data.map((booking) => booking.time);
    //         setTimingsBooked(timingsBooked);
    //     }
    //     getBookingDate();
    // }, [post.date]);

    // console.log([params.date]);
    // console.log(timingsBooked);

    // useEffect(() => {
    //     getAllBookings();
    //     console.log(booking);
    // }, []);
            

  

  return (
    <div>
         <section className="section is-medium">
  <h1 className="title">Make booking</h1>
  <h2 className="subtitle">
    Book a berth and timeslot for your vessel
  </h2>
</section>

 <div className="field">
<label className="label">Vessel Name</label>
<div className="control">
<input disabled className="input" value={user.username} placeholder={user.username} />
</div>
</div>


<div className="field">
<label className="label">Select Date</label>
<input className="input" type="date" placeholder="Input Date" onChange={(e) => {
  router.push(`/book/${e.target.value}`);
}}
  ></input>
</div>
</div>


  )
}

export default page
