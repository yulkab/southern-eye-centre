import React from 'react'
import { NavLink } from "react-router-dom"
import { List } from 'semantic-ui-react'

const Footer = () => (
  <footer className="footer">
    <List as='ul'>
      <List.Item as='li' className="item">
        <NavLink to="/home" activeClassName="active"> Home </NavLink>   
      </List.Item>
      <List.Item as='li' className="item">
        <NavLink to="/news" activeClassName="active"> News </NavLink>   
      </List.Item>
      <List.Item as='li' className="item">
        <NavLink to="/reviews" activeClassName="active"> Reviews </NavLink>   
      </List.Item>
      <List.Item as='li' className="item">
        <NavLink to="/privacy" activeClassName="active"> Privacy </NavLink>   
      </List.Item>
      <List.Item as='li' className="item">
        <NavLink to="/terms-of-use" activeClassName="active"> Terms of use </NavLink>   
      </List.Item>
    </List> 
    <p>Copyrights © 2019 Eye Care Center. All Rights Reserved.</p>
  </footer>                           
)

export default Footer