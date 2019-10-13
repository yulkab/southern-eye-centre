import React from 'react';
import { Link } from "react-router-dom";
import contImg1 from '../assets/img/contact.jpg';

const News = () => (
  <section className="c-info--news">
      <h5>News title</h5>
      <small>NAME OF PERSON POSTED / 2019 - 02-25</small>
      <img src={contImg1} alt="Contact Us section"/>
      <p>
        <Link to="/everything-about/news" className="more-info" title="Read more News">More Info<span>News Post</span></Link>                            
      </p>
  </section> 
)

export default News