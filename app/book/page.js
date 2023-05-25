'use client';
import React, {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BookingForm from '@/components/BookingForm';
import Form from '@/components/Form';
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
            const response = await fetch('localhost:8000/api/create', 
            {
                method: 'POST',
                body: JSON.stringify({
                    vesselName: post.vesselName,
                    berth: post.berth,
                    date: post.date,
                    time: post.time,
                    message: post.message
                }),
        }
        
        );
        
        if (response.ok) {
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
<form onSubmit={handleSubmit}>
<Form 
post={post}
setPost={setPost}
submitting={submitting}
handleSubmit={handleSubmit}
setSubmitting={setSubmitting}
/>
</form>
    </div>
  )
}

export default page
