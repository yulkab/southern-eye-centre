import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";
import { Grid,Image} from 'semantic-ui-react';
import closemg from '../../assets/img/icons/close-icon@2x.png';

class TopNav extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      doctors: this.props.doctors
    };
  }

  componentWillMount = () => {
    console.log('TopNav will mount');
  }

  componentDidMount = () => {
    console.log('TopNav mounted');    
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('TopNav will receive props', nextProps);   
    this.setState({
      doctors: this.props.doctors
    }) 
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('TopNav will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('TopNav did update');
  }

  componentWillUnmount = () => {
    console.log('TopNav will unmount');
  }
  
  render () {
    const { doctors } = this.state;
    const {visible, handler} = this.props;
    return (
      <nav className={"navmenu navmenu--top " + (visible ? 'active' : '')}>
        <div className="navmenu-wrap">
        <button onClick={handler} className="close-button" type="nav-button" aria-label="Close the Top Navigation">
          <Image src={closemg} className="icon-close" alt="Close button Icon" />
          <div className="screen-reader-text">Button to close the Top Navigation menu.</div>
        </button>
        <Grid stackable columns='equal'>
          <Grid.Column mobile={16} computer={3}>
            <ul className="navmenu--list">
              <li className="navmenu--list-header">
                <NavLink to="/what-we-do" activeClassName="active" onClick={handler}> What We Do </NavLink>            
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/what-we-do/consulting-and-treatments" activeClassName="active" onClick={handler}> Consulting &amp; Treatments </NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/what-we-do/day-surgery" activeClassName="active" onClick={handler} > Day Surgery </NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/what-we-do/laser" activeClassName="active" onClick={handler}> Laser </NavLink>
              </li>
            </ul>
            
            <ul className="navmenu--list">
              <li className="navmenu--list-header">           
                <NavLink to="/visit" activeClassName="active" onClick={handler}>  When You Visit </NavLink>  
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/visit/what-to-bring" activeClassName="active" onClick={handler}>What To Bring</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/visit/getting-here" activeClassName="active" onClick={handler}>Getting Here</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/visit/faq" activeClassName="active" onClick={handler}>FAQ</NavLink>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column mobile={16} computer={3}>
            <ul className="navmenu--list">
              <li className="navmenu--list-header">
                <NavLink to="/eye-conditions" activeClassName="active" onClick={handler}> Eye Conditions </NavLink>  
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/cataract" activeClassName="active" onClick={handler}>Cataract</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/corneal-conditions" activeClassName="active" onClick={handler}>Corneal Conditions</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/diabetic-eye-diseases" activeClassName="active" onClick={handler}>Diabetic Eye Diseases</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/dry-eye" activeClassName="active" onClick={handler}>Dry Eyes</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/foreign-bodies-and-acute-injuries" activeClassName="active" onClick={handler}>Foreign Bodies &amp; Acute Injuries</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/glaucoma" activeClassName="active" onClick={handler}>Glaucoma</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/kerataconus" activeClassName="active" onClick={handler}>Kerataconus</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/kerataconus" activeClassName="active" onClick={handler}>Laser Eye Surgery</NavLink>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column mobile={16} computer={3}>
            <ul className="navmenu--list">
              <li className="navmenu--list-header"> </li>          
              <li className="navmenu--list-item">
                <NavLink to="/news" activeClassName="active" onClick={handler}>Macular Degeneration</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/reviews" activeClassName="active" onClick={handler}>Ocuplastic Issues</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/gallery" activeClassName="active" onClick={handler}>Pterygium</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/contact" activeClassName="active" onClick={handler}>Retina Conditions</NavLink>
              </li>
            </ul>
          </Grid.Column>
          
          <Grid.Column mobile={16}  computer={3} >
    

        {
        // Object.keys(doctors).map(key => {     
        //    console.log("Entered");                 
        //    // Return the element. Also pass key     
        //    return ( <NavLink to="/doctor" key={key} onClick={handler} >Dr. Douglas Reinehr {key} </NavLink>) 
        // }) 
        }
            <ul className="navmenu--list">
              <li className="navmenu--list-header">
                <NavLink to="/doctors" activeClassName="active" onClick={handler}> Doctors </NavLink>            
              </li>       
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Damien Louis</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Douglas Reinehr</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Jonathan Yeoh</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Lei Liu</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Stephen Bambery</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Trevor Gin</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Walter Chang</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Weng Ng</NavLink>
              </li>
              <li className="navmenu--list-item">
                <NavLink to="/doctor" activeClassName="active" onClick={handler}>Dr. Ye Chen</NavLink>
              </li>
            </ul>
          </Grid.Column>
          <Grid.Column  mobile={16}  computer={4}  className="navmenu--list_last">
          <ul className="navmenu--list">
              <li className="navmenu--list-header">
                <NavLink to="/about" activeClassName="active" onClick={handler}>About Us</NavLink>
              </li>
              <li className="navmenu--list-header">
                <NavLink to="/everything-about/news" activeClassName="active" onClick={handler}>News</NavLink>
              </li>
              <li className="navmenu--list-header">
                <NavLink to="/everything-about/reviews" activeClassName="active" onClick={handler}>Reviews</NavLink>
              </li>
              <li className="navmenu--list-header">
                <NavLink to="/everything-about/gallery" activeClassName="active" onClick={handler}>Gallery</NavLink>
              </li>
              <li className="navmenu--list-header">
                <NavLink to="/contact" activeClassName="active" onClick={handler}>Contact Us</NavLink>
              </li>
            </ul>
          </Grid.Column>
        </Grid>
        </div>
      </nav>
    );
  }
}
export default TopNav;
