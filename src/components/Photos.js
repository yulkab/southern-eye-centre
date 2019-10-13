import React from 'react';
import { Link } from "react-router-dom";
import contImg1 from '../assets/img/contact.jpg';

const Photos = () => (
    <section className="c-info--news">
    <h5>Photos</h5>

    <img src={contImg1} alt="Contact Us section"/>
    <p>
      <Link to="/everything-about/gallery" className="more-info" title="Read more News">More Info<span>Facilities Photo</span></Link>                            
    </p>
</section> 
)

export default Photos