import React, { useEffect, useState } from 'react'
import AccountNav from '../AccountNav'
import axios from 'axios';
import PlaceImg from '../PlaceImg';
import { Link } from 'react-router-dom';
import BookingDates from '../BookingDates';

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        axios.get('/bookings').then(response =>{
            setBookings(response.data);
        })
    }, [bookings])
  return ( 
    <div>
      <AccountNav/>
      <div>
        {bookings?.length > 0 && bookings.map(booking =>(
            <Link to={`${booking._id}`} className='mb-4 flex gap-4 bg-gray-200 rounded-2xl overflow-hidden'>
                <div className='w-48 object-cover'>
                    <PlaceImg place={booking.place} />
                </div>
                <div className='py-3 pr-3 grow'>
                    <h2 className='text-xl'>{booking.place.title}</h2>
                    <div className='text-xl'>
                        <BookingDates booking={booking} className='mt-4 mb-2 text-sm text-gray-500'/>
                        <div className='flex gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                            </svg>
                            <span className="text-sm">
                            Total Price: ${booking.price}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default BookingsPage
