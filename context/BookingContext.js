import { createContext, useState, useEffect  } from "react";
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';

const BookingContext = createContext();

export default BookingContext;

export const BookingProvider = ({ children }) => {

    const {user} = useContext(AuthContext)

    const [booking, setBooking] = useState([])


    const getBooking = async () => {
        let res = await fetch("http://localhost:8000/api/view/all")
        let data = await res.json()
        setBooking(data.filter(booking => booking.vesselName === user.username))
        console.log(data)
      }

      const getAllBookings = async () => {
        let res = await fetch("http://localhost:8000/api/view/all")
        let data = await res.json()
        setBooking(data)
        console.log(data)
        }

        const getBookingById = async (id) => {
            let res = await fetch(`http://localhost:8000/api/view/id/${id}/`)
            let data = await res.json()
            setBooking(data)
            console.log(data)
            }

    let contextData = {
        booking: booking,
        getBooking: getBooking,
        getAllBookings: getAllBookings,
        getBookingById: getBookingById

    }


    return(
        <BookingContext.Provider value={contextData}>
            {children}
        </BookingContext.Provider>
    )

    }