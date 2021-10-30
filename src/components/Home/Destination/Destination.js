import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css';

const Destination = () => {
   const [destinations, setDestinations] = useState([]);
   const [isLoading,setIsLoading] = useState(true);
   if(isLoading){
      <Spinner animation="border" />
   }
   useEffect(() => {
      fetch('https://thawing-bayou-70947.herokuapp.com/destinations')
         .then(res => res.json())
         .then(data => {
            setDestinations(data);
            setIsLoading(false)
         })
   }, [])
   return (
      <>
         <div className="destination_section">
            <div className="container">
               <div className="sec_title">
                  <h2>Our Destinations</h2>
               </div>
               <div className="row mt-5">
                  {
                     destinations.map(desItem => {
                        return (
                           <div key={desItem._id} className="col-lg-4 mb-4">
                              <Card>
                                 <div className="destination_img">
                                    <img src={desItem?.imgUrl} alt="" />
                                    <div className="price">
                                       <p>$ {desItem?.price}</p>
                                    </div>
                                 </div>
                                 <Card.Body>
                                    <Card.Title>{desItem?.title}</Card.Title>
                                    <Card.Text className="card_desc">
                                       {desItem?.description}
                                    </Card.Text>
                                    <Link to={`bookingRegistration/${desItem._id}`}>
                                       <button className="regular_btn">Book Now</button></Link>
                                 </Card.Body>
                              </Card>
                           </div>
                        )
                     })
                  }
               </div>
               <div className="text-center mt-5">
                  <Link to="/allDestinations"><button className="regular_btn">More Destinations</button></Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Destination;