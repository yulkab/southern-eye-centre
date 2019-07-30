import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Grid,Image} from 'semantic-ui-react';
import closemg from '../../assets/img/icons/close-icon@2x.png';

const TopNav = props => (
  <nav className={"navmenu navmenu--top " + (props.visible ? 'active' : '')}>
    <button onClick={props.handler} className="close-button" type="nav-button" aria-label="Close the Top Navigation">
      <Image src={closemg} className="icon-close" alt="Close button Icon" />
      <div className="screen-reader-text">Button to close the Top Navigation menu.</div>
    </button>
    <Grid stackable columns='equal'>
      <Grid.Column>
        <ul className="navmenu--list">
          <li className="navmenu--list-header">
            <NavLink to="/what-we-do" activeClassName="active" onClick={props.handler}> What We Do </NavLink>            
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/consulting-and-treatments" activeClassName="active" onClick={props.handler}> Consulting &amp; Treatments </NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/day-surgery" activeClassName="active" onClick={props.handler} > Day Surgery </NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/laser" activeClassName="active" onClick={props.handler}> Laser </NavLink>
          </li>
        </ul>
        
        <ul className="navmenu--list">
          <li className="navmenu--list-header">When You Visit</li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/consulting-and-treatments" activeClassName="active" onClick={props.handler}>What To Bring</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/day-surgery" activeClassName="active" onClick={props.handler}>Getting Here</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/laser" activeClassName="active" onClick={props.handler}>FAQ</NavLink>
          </li>
        </ul>
      </Grid.Column>
      <Grid.Column>
        <ul className="navmenu--list">
          <li className="navmenu--list-header">Eye Conditions</li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/cataract" activeClassName="active" onClick={props.handler}>Cataract</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/corneal-conditions" activeClassName="active" onClick={props.handler}>Corneal Conditions</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/diabetic-eye-diseases" activeClassName="active" onClick={props.handler}>Diabetic Eye Diseases</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/dry-eyes" activeClassName="active" onClick={props.handler}>Dry Eyes</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/corneal-transplant" activeClassName="active" onClick={props.handler}>Foreign Bodies &amp; Acute Injuries</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/glaucoma" activeClassName="active" onClick={props.handler}>Glaucoma</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/kerataconus" activeClassName="active" onClick={props.handler}>Kerataconus</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/what-we-do/kerataconus" activeClassName="active" onClick={props.handler}>Laser Eye Surgery</NavLink>
          </li>
        </ul>
      </Grid.Column>
      <Grid.Column>
        <ul className="navmenu--list">
          <li className="navmenu--list-header"> </li>          
          <li className="navmenu--list-item">
            <NavLink to="/news" activeClassName="active" onClick={props.handler}>Macular Degeneration</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/reviews" activeClassName="active" onClick={props.handler}>Ocuplastic Issues</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/gallery" activeClassName="active" onClick={props.handler}>Pterygium</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/contact" activeClassName="active" onClick={props.handler}>Retina Conditions</NavLink>
          </li>
        </ul>
      </Grid.Column>
      
      <Grid.Column>
        <ul className="navmenu--list">
          <li className="navmenu--list-header">Doctors</li>          
          <li className="navmenu--list-item">
            <NavLink to="/news" activeClassName="active" onClick={props.handler}>Dr. Damien Louis</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/reviews" activeClassName="active" onClick={props.handler}>Dr. Douglas Reinehr</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/gallery" activeClassName="active" onClick={props.handler}>Dr. Jonathan Yeoh</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/contact" activeClassName="active" onClick={props.handler}>Dr. Lei Liu</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/contact" activeClassName="active" onClick={props.handler}>Dr. Stephen Bambery</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/contact" activeClassName="active" onClick={props.handler}>Dr. Trevor Gin</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/contact" activeClassName="active" onClick={props.handler}>Dr. Walter Chang</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/contact" activeClassName="active" onClick={props.handler}>Dr. Weng Ng</NavLink>
          </li>
          <li className="navmenu--list-item">
            <NavLink to="/contact" activeClassName="active" onClick={props.handler}>Dr. Ye Chen</NavLink>
          </li>
        </ul>
      </Grid.Column>
      <Grid.Column largeScreen={5} className="navmenu--list_last">
      <ul className="navmenu--list">
          <li className="navmenu--list-header">
            <NavLink to="/about" activeClassName="active" onClick={props.handler}>About Us</NavLink>
          </li>
          <li className="navmenu--list-header">
            <NavLink to="/news" activeClassName="active" onClick={props.handler}>News</NavLink>
          </li>
          <li className="navmenu--list-header">
            <NavLink to="/reviews" activeClassName="active" onClick={props.handler}>Reviews</NavLink>
          </li>
          <li className="navmenu--list-header">
            <NavLink to="/gallery" activeClassName="active" onClick={props.handler}>Gallery</NavLink>
          </li>
          <li className="navmenu--list-header">
            <NavLink to="/contact" activeClassName="active" onClick={props.handler}>Contact Us</NavLink>
          </li>
        </ul>
      </Grid.Column>
    </Grid>




  </nav>

);

TopNav.propTypes = {
  handler: PropTypes.func
};

TopNav.defaultProps = {
  visible: false
};

export default TopNav;
