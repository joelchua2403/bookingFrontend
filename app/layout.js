'use client';
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar'
import { AuthProvider } from '@/context/AuthContext'
import { BookingProvider } from '@/context/BookingContext';



const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'CNB Harbour Clearance Booking',
//   description: 'CNB Harbour Clearance Booking',
// }

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
    
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        <title>Harbour Booking</title>
        </head>

        <AuthProvider>
        <BookingProvider>
      <body className={inter.className}>
      <NavBar/>
        
      {children}
    
     
      </body>
      </BookingProvider>
      </AuthProvider>
    </html>
 
    
  )
}
