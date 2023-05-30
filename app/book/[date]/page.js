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
    let {getAllBookings, booking, setBooking, timingsBooked, setTimingsBooked} = useContext(BookingContext);
    const [post , setPost] = useState({
        vesselName: '',
        berth: '',
        date: '',
        time: '',
        message: ''
    }); 

   
    const router = useRouter();


    useEffect(() => {
        const getBookingDate = async () => {
            const response = await fetch(`http://localhost:8000/api/view/date/${params.date}/`);
            const data = await response.json();
            const timingsBooked = data.map((booking) => booking.time);
            setTimingsBooked(timingsBooked);
        }
        getBookingDate();
    }, [post.date]);

    console.log([params.date]);
    console.log(timingsBooked);
    

            



  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('http://localhost:8000/api/create/', 
            {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json',
                }
        }
        
        );

        if (response.ok) {
          alert('Booking created successfully');
          router.push(`/view/${encodeURIComponent(user.username)}`);
        }
    } catch (error) {
            console.log(error);
        } finally {
        setSubmitting(false);
    }
    }   

  return (
    <div>
         <section className="section is-medium">
  <h1 className="title">Make booking</h1>
  <h2 className="subtitle">
    Book a berth and timeslot for your vessel
  </h2>
</section>
{/* <BookingForm 
type='create'
post={post}
setPost={setPost}
submitting={submitting}
handleSubmit={handleSubmit}
/> */}

<Form 
post={post}
setPost={setPost}
submitting={submitting}
handleSubmit={handleSubmit}
setSubmitting={setSubmitting}
timingsBooked={timingsBooked}
params={params}
/>

    </div>
  )
}

export default page
