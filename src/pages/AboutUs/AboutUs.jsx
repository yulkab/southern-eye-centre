import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Image } from 'semantic-ui-react'
import News from '../../components/News';


import contImg12 from '../../assets/img/photos/centre-1.jpg';
import contImg2 from '../../assets/img/photos/centre-1.jpg';
import contImg3 from '../../assets/img/photos/centre-1.jpg';
import contImg4 from '../../assets/img/photos/centre-1.jpg';
import staffImg from '../../assets/img/staff.jpg';

const AboutUs = props => (
  <React.Fragment>
    <article>
      <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>              
        <div className="c-aside-section_content">
          <section className="wrapped">
            <small>About Us</small>
            <h1>Introduction</h1>              
              <hr></hr>  
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, 
                feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
              <p>
                Morbi vestibulum odio elementum, commodo magna non, ornare ante. Donec iaculis diam convallis placerat vulputate. Suspendisse maximus, elit id efficitur elementum, quam risus viverra eros, eu consectetur magna nulla ac arcu. Fusce consequat maximus magna a fermentum. Proin viverra vel ipsum vitae consequat. Quisque euismod augue nunc, ut molestie leo molestie sed. Mauris pharetra, velit sed vestibulum venenatis, dolor enim molestie mauris, eget lacinia sem sapien in est. Curabitur venenatis elementum magna, sed mattis ante fermentum non.       
              </p>                                
          </section>                                                              
        </div>
      </div> 
      <div className="c-gallery">
        <Image src={contImg12} alt="Cataract Photo"/>
        <Image src={contImg12} alt="Cataract Photo"/>
        <Image src={contImg12} alt="Cataract Photo"/>
      </div> 
      <div className="padding">
        <p className="text-right">
          <Link to="/gallery" className="more-info" title="Read more info about Procedures &amp; Treatments">More Info <span>Photos</span></Link>
        </p> 
      </div>

      <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>
        <div className="c-aside-section_content">
          <section className="wrapped">
          <hr></hr> 
            <h4>Our Values</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
            </p>
            <ul className="e-bulleted">
                <li>Achievement 1</li>
                <li>Achievement 2</li>
                <li>Achievement 3</li>
                <li>Achievement 4</li>
              </ul>  
          </section>     
        </div>
      </div> 
      
      <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>
        <div className="c-aside-section_content">
          <section className="wrapped top-line"> 
            <h4>Quality &amp; Safety</h4>
            <ul className="e-bulleted">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
              </ul>  
          </section>     
        </div>
      </div> 

      <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>
        <div className="c-aside-section_content">
          <section className="wrapped top-line"> 
            <h4>Equipments</h4>
            <ul className="e-bulleted">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
              </ul>  
          </section>     
        </div>
      </div> 

      <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">            
            <section className="c-staff">
              <div className="c-img-content_left">
                <img src={staffImg} alt="Staff section"/>
              </div>            
              <div>
                <h4>Staff</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis nisi. Donec mollis tristique maximus. Pellentesque suscipit velit eu cursus commodo. Phasellus vulputate sem vitae mollis vulputate. Quisque vulputate turpis quis orci cursus varius. Vestibulum a semper mi, vitae blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus faucibus pellentesque. Vivamus vel dui ultrices, bibendum dolor eu, luctus lorem. Nam id molestie tortor.
                </p>
                <p>
                  Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
                </p>
                <p>
                  Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
                </p>             
              </div>            
            </section>
          </div>
       </div>  

       <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>
        <div className="c-aside-section_content">
          <section className="wrapped top-line"> 
            <h4>Policy</h4>
            <ul className="e-bulleted">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
              </ul>  
          </section>     
        </div>
      </div> 
      
      <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>
        <div className="c-aside-section_content">
          <section className="wrapped top-line"> 
            <h4>Education</h4>
            <ul className="e-bulleted">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue.</li>
              </ul>  
          </section>    

          <p className="e-tabLink">
            <Link to="/facilities" className="more-info" title="Read more info about Our Facilities">Our Facilities</Link>
          </p>   

        </div>
      </div> 
      
    </article>    
    <aside className="page-aside">
      <div className="c-info">
        <News></News>
      </div>
    </aside>
  </React.Fragment>
);

AboutUs.propTypes = {
  // bla: PropTypes.string,
};

AboutUs.defaultProps = {
  // bla: 'test',
};

export default AboutUs;
