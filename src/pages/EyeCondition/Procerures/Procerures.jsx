import React from 'react';
import { Link } from "react-router-dom";
import contImg1 from '../../../assets/img/stam.jpg';
import contImg2 from '../../../assets/img/eye-conditions/cataract/surgery@2x.png';

const Procerures = props => (
        <article>
        <div className="c-aside-section">
        <div className="c-aside-section">
            <aside className="c-aside-section_aside d-fx-bottom">
              <p className="more-info" title="Read more about Treatments  &amp; Surgery ">
                More Info<span>Treatments  &amp; Surgery </span>
              </p>
            </aside>
            <div className="c-aside-section_content">            
              <section className="c-staff">
                <div className="c-img-content_left">
                  <img src={contImg1} alt="Staff section"/>
                </div>            
                <div>
                  <h4>Diagnosing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis nisi. Donec mollis tristique maximus. Pellentesque suscipit velit eu cursus commodo. Phasellus vulputate sem vitae mollis vulputate. Quisque vulputate turpis quis orci cursus varius. Vestibulum a semper mi, vitae blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus faucibus pellentesque. Vivamus vel dui ultrices, bibendum dolor eu, luctus lorem. Nam id molestie tortor.
                  </p>
                  <p>
                    Morbi vestibulum odio elementum, commodo magna non, ornare ante. Donec iaculis diam convallis placerat vulputate. Suspendisse maximus, elit id efficitur elementum, quam risus viverra eros, eu consectetur magna nulla ac arcu. Fusce consequat maximus magna a fermentum. Proin viverra vel ipsum vitae consequat. Quisque euismod augue nunc, ut molestie leo molestie sed. Mauris pharetra, velit sed vestibulum venenatis, dolor enim molestie mauris, eget lacinia sem sapien in est. Curabitur venenatis elementum magna, sed mattis ante fermentum non. 
                  </p>                            
                </div>            
              </section>
            </div>
        </div> 
        </div> 
        <div className="c-aside-section">
          <aside className="c-aside-section_aside"> </aside>
          <div className="c-aside-section_content">
            <section className="wrapped top-line">
              <h4>Treating</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
              <p>
                Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
              <p>
                In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
            </section>     
          </div>        
       </div>               
       <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">
          
            <section className="c-left-113">            
              <div>
              <hr/>
                <h4>Surgery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget iaculis nisi. Donec mollis tristique maximus. Pellentesque suscipit velit eu cursus commodo. Phasellus vulputate sem vitae mollis vulputate. Quisque vulputate turpis quis orci cursus varius. Vestibulum a semper mi, vitae blandit dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc cursus faucibus pellentesque. Vivamus vel dui ultrices, bibendum dolor eu, luctus lorem. Nam id molestie tortor.
                </p>
                <p>
                  Phasellus fringilla sagittis vulputate. Donec ornare, ex eget scelerisque sagittis, dolor quam elementum justo, in lobortis ligula mi sed diam. Fusce enim lectus, facilisis in eleifend vel, ornare sed lacus. 
                </p>                   
              </div>   
              <img src={contImg2} floated='right' alt="Cataract surgery section"/>                   
            </section>   

          </div>
        </div>        

        <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">
          <p className="e-tabLink">
            <Link to="/cataract/resources" className="more-info" title="Read more info about Procedures &amp; Treatments"> RESOURCES </Link>
          </p>      
          </div>
        </div>     
        <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">
              <div className="e-titleBlock">
                <small>Eye Conditions</small>
                <h1>Cataract</h1>
                <a href="tel:1234567890" className="c-button">Call for an appointment</a>
              </div>          
          </div>
        </div>        
    </article>
);

Procerures.propTypes = {
  // bla: PropTypes.string,
};

Procerures.defaultProps = {
  // bla: 'test',
};

export default Procerures;
