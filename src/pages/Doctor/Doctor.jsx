import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import doctImg1m from '../../assets/img/doctor-photo@2x.png';


class Doctor extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Doctor will mount');
  }

  componentDidMount = () => {
    console.log('Doctor mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Doctor will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Doctor will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Doctor did update');
  }

  componentWillUnmount = () => {
    console.log('Doctor will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Oops... Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <div className="page-content">
          <section className="c-doctor">
            <div className="c-img-content_left">
              <img src={doctImg1m} alt="Consulting &amp; Treatment section"/>
            </div>            
            <div>
              <small>Our Doctors</small>
              <h1>Dr.Stephen Bambery</h1>
              <span>fracs,franzco</span>
              <hr></hr>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis nisi. Donec mollis tristique maximus. Pellentesque suscipit velit eu cursus commodo. Phasellus vulputate sem vitae mollis vulputate. Quisque vulputate turpis quis orci cursus varius. Vestibulum a semper mi, vitae blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus faucibus pellentesque. Vivamus vel dui ultrices, bibendum dolor eu, luctus lorem. Nam id molestie tortor.
              </p>
              <p>
                Phasellus fringilla sagittis vulputate. Donec ornare, ex eget scelerisque sagittis, dolor quam elementum justo, in lobortis ligula mi sed diam. Fusce enim lectus, facilisis in eleifend vel, ornare sed lacus. Phasellus rhoncus, sapien eget tempor luctus, lectus diam ultricies augue, ut tempus lectus mi ac diam. Nullam felis leo, egestas at pulvinar sed, ullamcorper vel augue.
              </p>              
            </div>     
          </section>
          <p className="e-tabLink">
            <Link to="/doctor" className="more-info" title="Read about Dr.Trevor Gin">Dr.Trevor Gin</Link>
          </p>       
        </div>
        <aside className="page-aside">
            <section className="c-info">
              <h5>SPECIALTIES</h5>
              <ul className="c-eye-conditions">
                <li className="c-eye-conditions--item">
                  <div className="c-eye-conditions--item-img cataract" data-content="cataract"></div>
                  Cataract
                </li>
                <li className="c-eye-conditions--item">
                  <div className="c-eye-conditions--item-img macular-degeneration" data-content="macular degenerationn"></div>
                  Macular Degeneration
                </li>
                <li className="c-eye-conditions--item">
                  <div className="c-eye-conditions--item-img dry-eye" data-content="dry eye"></div>
                  Dry Eye
                </li>
                <li className="c-eye-conditions--item">
                  <div className="c-eye-conditions--item-img stam" data-content="dry eye"></div>
                  Stam
                </li>
              </ul>
              <p>
                <Link to="/eye-conditions" className="more-info" title="Read more Eye Conditions">More Info<span>Eye Conditions</span></Link>                            
              </p>
            </section>        
        </aside>
      </React.Fragment>
    );
  }
}

export default Doctor;