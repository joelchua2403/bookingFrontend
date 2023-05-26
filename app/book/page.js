'use client';
import React, {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@/components/CreateForm';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';


const page = () => {
    const [submitting, setSubmitting] = useState(false);
    let {user} = useContext(AuthContext);
    const [post , setPost] = useState({
        vesselName: '',
        berth: '',
        date: '',
        time: '',
        message: ''
    }); 

  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        console.log(post);

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
            router.push('/');
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
/>

    </div>
  )
}

export default page
