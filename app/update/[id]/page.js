'use client';
import React, {useState, useEffect} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import BookingContext from '@/context/BookingContext';
import Form from '@/components/UpdateForm';


const page = ({params}) => {
    const router = useRouter();
    const {booking, getBooking, timingsBooked, setTimingsBooked} = useContext(BookingContext)
    const [submitting, setSubmitting] = useState(false);
    const [updating, setUpdating] = useState(false);
    let {user} = useContext(AuthContext);
    const [post , setPost] = useState({
        vesselName: '',
        berth: '',
        date: '',
        time: '',
        message: ''
    }); 
   
    useEffect(() => {
        const getBookingDate = async () => {
            const response = await fetch(`http://localhost:8000/api/view/date/${post.date}/`);
            const data = await response.json();
            const timingsBooked = data.map((booking) => booking.time);
            setTimingsBooked(timingsBooked);
            console.log(timingsBooked);
        }
        getBookingDate();
    }, [post.date]);
  

  

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        console.log(params.id);
        setSubmitting(true);
        setUpdating(true);
        console.log(post);

        try {
            const response = await fetch(`http://localhost:8000/api/update/${params.id}/`, 
            {
                method: 'PUT',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json',
                }
        }
        
        );

        if (response.ok) {
            router.push('/');
        }
    } catch (error) {
            console.log(error);
        } finally {
        setSubmitting(false);
        setUpdating(false);
    }
    }   

  return (
    <div>
         <section className="section is-medium">
  <h1 className="title">Update booking</h1>
  <h2 className="subtitle">
     Update your booking here
  </h2>
</section>


<Form 
post={post}
setPost={setPost}
submitting={submitting}
handleUpdateSubmit={handleUpdateSubmit}
setSubmitting={setSubmitting}
updating={updating}
setUpdating={setUpdating}
booking={booking}
timingsBooked={timingsBooked}
/>

    </div>
  )
}

export default page
