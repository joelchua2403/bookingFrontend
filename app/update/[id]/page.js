'use client';
import React, {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import BookingContext from '@/context/BookingContext';
import Form from '@/components/UpdateForm';


const page = ({params}) => {
    const router = useRouter();
   
  

    const {booking, getBooking} = useContext(BookingContext)
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
/>

    </div>
  )
}

export default page
