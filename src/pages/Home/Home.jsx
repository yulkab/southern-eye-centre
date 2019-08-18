import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, CardContent, Grid} from 'semantic-ui-react';
import asideimg from '../../assets/img/home-side.jpg';
import contImg1 from '../../assets/img/illustration-home-1m.png';
import contImg2 from '../../assets/img/illustration-home-2m.png';
import contImg3 from '../../assets/img/illustration-home-3m.png';
import doctImg1m from '../../assets/img/doctor-photo@2x.png';
import photos1 from '../../assets/img/photos/centre-1.jpg';

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Home will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Home will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Oops... Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <div className="page-content">
          <section className="c-centred c-centred--632">
            <h1 className="super-title">See More, Do More</h1>
            <p>
              Southern Eye Centre has been providing quality eye care for adults and children in the Frankston, Mornington Peninsula and South Gipplsand areas since 1997.      
            </p>
            <p>
              With a fully accredited surgical theatre, state of the art diagnostic tools and a diverse range of eye specialists, all your eye care needs can be addressed at our centre.
            </p>
            <p>
              <a href="tel:1234567890" className="c-button">Call For An Appointment</a>
            </p>            
          </section>      
          
          <section className="c-centred">
          <hr></hr>
            <h4>What We Do</h4>
                <p>
                  Our team of Ophthalmologists and doctors have been hand picked from amongst the best in Australia to provide you with a comprehensive and professional eye care service. With many of our specialists providing services across Melbourne’s public hospitals and participating in third world eye care. 
                </p>
                <p>
                When making a booking at Southern Eye Centre, our support staff will be able to arrange an appointment with the Ophthalmologist who will best suit your eye care needs.
                </p>
          </section>

          <section className="c-centred c-centred--img">
            <div className="c-centred--img_left">
              <img src={contImg1} alt="Consulting &amp; Treatment section"/>
            </div>            
            <div>
              <h6>Consulting &amp; Treatment</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis nisi. Donec mollis tristique maximus. Pellentesque suscipit velit eu cursus commodo. Phasellus vulputate sem vitae mollis vulputate. Quisque vulputate turpis quis orci cursus varius. Vestibulum a semper mi, vitae blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus faucibus pellentesque. Vivamus vel dui ultrices, bibendum dolor eu, luctus lorem. Nam id molestie tortor.
              </p>
              <p>
                Phasellus fringilla sagittis vulputate. Donec ornare, ex eget scelerisque sagittis, dolor quam elementum justo, in lobortis ligula mi sed diam. Fusce enim lectus, facilisis in eleifend vel, ornare sed lacus. Phasellus rhoncus, sapien eget tempor luctus, lectus diam ultricies augue, ut tempus lectus mi ac diam. Nullam felis leo, egestas at pulvinar sed, ullamcorper vel augue.
              </p>
              <Link to="/what-we-do/consulting-and-treatments" className="more-info" title="Read more info about Consulting &amp; Treatment">More Info<span>Consulting &amp; Treatment</span></Link>
            </div>            
          </section>

          <section className="c-centred  c-centred--img">    
            <div className="c-centred--img_right">
              <img src={contImg2} alt="Day Surgery section"/>
            </div>            
            <div>
              <h6>Day Surgery</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis nisi. Donec mollis tristique maximus. Pellentesque suscipit velit eu cursus commodo. Phasellus vulputate sem vitae mollis vulputate. Quisque vulputate turpis quis orci cursus varius. Vestibulum a semper mi, vitae blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus faucibus pellentesque. Vivamus vel dui ultrices, bibendum dolor eu, luctus lorem. Nam id molestie tortor.
              </p>
              <p>
                Phasellus fringilla sagittis vulputate. Donec ornare, ex eget scelerisque sagittis, dolor quam elementum justo, in lobortis ligula mi sed diam. Fusce enim lectus, facilisis in eleifend vel, ornare sed lacus. 
              </p>
              <Link to="/what-we-do/day-surgery" className="more-info" title="Read more info about Day Surgery">More Info<span>Day Surgery</span></Link>              
            </div>                    
          </section>
           
          <section className="c-centred c-centred--img">
            <div className="c-centred--img_left">
              <img src={contImg3} alt="Laser section"/>
            </div>            
            <div>
              <h6>Laser</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis nisi. Donec mollis tristique maximus. Pellentesque suscipit velit eu cursus commodo. Phasellus vulputate sem vitae mollis vulputate. Quisque vulputate turpis quis orci cursus varius. Vestibulum a semper mi, vitae blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus faucibus pellentesque. Vivamus vel dui ultrices, bibendum dolor eu, luctus lorem. Nam id molestie tortor.
                Phasellus fringilla sagittis vulputate. Donec ornare, ex eget scelerisque sagittis, dolor quam elementum justo, in lobortis ligula mi sed diam. Fusce enim lectus, facilisis in eleifend vel, ornare sed lacus. 
              </p>
              <Link to="/what-we-do/laser" className="more-info" title="Read more info about Laser Eye Surgery">More Info<span>Laser Eye Surgery</span></Link>                            
            </div>            
          </section>          

          <section className="c-centred">
          <hr></hr>
            <h4>Our Doctors</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
                </p>               
          </section>

          <Card.Group className="s-cards s-cards--doctors">  

            <Card href='/doctor'  title="Read more info about Dr. Damien Louis">
              <Image src={doctImg1m}/>  
              <CardContent>
                <div className="doc-info">Dr. Damien Louis<span>MBBS, FRANZCO</span></div>
                <div className="extra content"></div>
              </CardContent>
             
            </Card>

            <Card  href='/doctor' >
              <Image src={doctImg1m}/>  
              <CardContent>
                <div className="doc-info">Dr. Douglas Reinehr<span>MBBS, FRANZCO</span></div>
                <div className="extra content"></div>
              </CardContent>              
            </Card>

            <Card  href='/doctor' >
              <Image src={contImg3} />
              <CardContent>
                <div className="doc-info">Dr. Jonathan Yeoh<span>MBBS, FRANZCO</span></div>
                <div className="extra content"></div>
              </CardContent>
            </Card>

          </Card.Group>
            <p className="text-right">
              <Link to="/doctors" className="more-info" title="Read more info about Our Doctors">More Info<span>Our Doctors</span></Link>                            
            </p>

            <section className="c-centred">
            <hr></hr>
              <h4>PHOTOS</h4>                           
            </section>

            <Grid columns='equal' className="s-photos">
              <Grid.Row stretched>
                <Grid.Column width={8}>
                  <Image src={photos1}/>
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                  <br/>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                <Grid.Column>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <p className="text-right">
              <Link to="/photo" className="more-info" title="See more Facilities’ Photo">More Info<span>Facilities’ Photo</span></Link>                            
            </p>

            <div className="s-reviews">
              <div className="c-centred">                           
                <p>        
                <i className="icon quote"></i>       
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Pellentesque fermentum dui commodo lobortis suscipit. Etiam sed pellentesque turpis, quis convallis neque. In eu ante in augue imperdiet suscipit vel scelerisque nisl. Donec vitae vehicula augue, vel efficitur augue.-- Name, age.
                </p>
                <p className="text-right">
                  <Link to="/photo" className="more-info" title="Read more Reviews">More Info<span>Reviews</span></Link>                            
                </p>
              </div>              
            </div>

        </div>
        <aside className="page-aside">
          <img src={asideimg} alt="aside background"/>
        </aside>
      </React.Fragment>
    );
  }
}

export default Home;
