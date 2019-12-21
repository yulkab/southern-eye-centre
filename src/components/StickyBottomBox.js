import React from 'react';
//import { Link } from "react-router-dom";

const StickyBottomBox = props => (
    <div className="c-aside-section c-stickyBottomBox">
        <aside className="c-aside-section_aside"></aside>
        <div className="c-aside-section_content">
            <div className="e-titleBlock">
            <small>{props.title}</small>
            <h1>{props.heading}</h1>
            { props.appointment ? <a href="tel:1234567890" className="c-button" >Call for an appointment</a> : null }            
            </div>          
        </div>
    </div>   
)
export default StickyBottomBox


