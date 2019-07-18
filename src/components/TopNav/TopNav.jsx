import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const TopNav = props => (
  <nav className={"navmenu navmenu--top " + (props.visible ? 'active' : '')}>
    <button onClick={props.handler}>Hide Top Slide Menu</button>   
    <ul>
        <li>
          <NavLink to="/" activeClassName="active" onClick={props.handler}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" onClick={props.handler}>About</NavLink>
        </li>
        <li>
          <NavLink to="/topics" activeClassName="active" onClick={props.handler}>Topics</NavLink>
        </li>
      </ul>
  
  </nav>           
 
);

TopNav.propTypes = {
  handler : PropTypes.func
};

TopNav.defaultProps = {
  visible: false
};

export default TopNav;
