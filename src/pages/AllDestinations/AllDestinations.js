import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllDestinations.css'

const AllDestinations = () => {
   const [allDestinations, setAllDestinations] = useState([]);
   useEffect(() => {
      fetch('https://thawing-bayou-70947.herokuapp.com/allDestinations')
         .then(res => res.json())
         .then(data => {
            setAllDestinations(data);
         })
   }, [])
   return (
      <>
      <div className="all_destinations_banner"></div>
         <div className="destination_section">
            <div className="container">
               <div className="sec_title mt-5">
                  <h2>All Destinations</h2>
               </div>
               <div className="row mt-5">
                  {
                     allDestinations.map(desItem => {
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
            </div>
         </div>
      </>
   );
};

export default AllDestinations;