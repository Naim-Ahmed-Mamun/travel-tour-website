import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './bookingRegistration.css';

const BookingRegistration = () => {
   const [bookingOrder,setOrderBooking] = useState({});
   const {user} = useAuth()
   const {id} = useParams();
   const { register, handleSubmit,reset } = useForm();

   // load dynamic data
   useEffect(() => {
      fetch(`https://thawing-bayou-70947.herokuapp.com/bookingOrder/${id}`)
      .then(res => res.json())
      .then(result => {
         setOrderBooking(result)
         // console.log(result);
      })
   },[id])

   // form submit
   const onSubmit = (data) => {
      data.bookingOrder = bookingOrder;
      data.status = 'pending';
      // console.log(data);
      fetch('https://thawing-bayou-70947.herokuapp.com/bookingOrder',{
         method:'POST',
         headers:{
            'content-type':'application/json'
         },
         body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
         if(result.acknowledged){
            alert('Booking successfully')
         }
         console.log(result);
      })
      reset();
      console.log(data);
   };
   return (
      <>
      <div className="bookingRegistration_banner"></div>
         <div className="bookingRegistration_section">
            <div className="container">
               <div className="bookingRegistration_form">
                  <h2>Register as a Travelo Tour</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <input defaultValue={user?.displayName} {...register("name")} placeholder="Name" />
                     <input defaultValue={user?.email} {...register("email")} placeholder="Email" />
                     <input {...register("address")} placeholder="Address" required />
                     <input type="date" {...register("date")} placeholder="Date" required />
                     <input type="number" {...register("phone")} placeholder="Phone" required />
                     <input defaultValue={bookingOrder?.title} {...register("bookingName")}/>
                     <input type="submit" />
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default BookingRegistration;