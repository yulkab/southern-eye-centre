import React from 'react';
import { Link } from "react-router-dom";
import { Image } from 'semantic-ui-react';
import contImg1 from '../../../assets/img/stam.jpg';
import doctImg1m from '../../../assets/img/doctor-photo@2x.png';

const Procerures = props => (
        <article>
        <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">
            <section className="wrapped top-line">
              <h4>Introduction</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
              <p>
                Morbi vestibulum odio elementum, commodo magna non, ornare ante. Donec iaculis diam convallis placerat vulputate. Suspendisse maximus, elit id efficitur elementum, quam risus viverra eros, eu consectetur magna nulla ac arcu. Fusce consequat maximus magna a fermentum. Proin viverra vel ipsum vitae consequat. Quisque euismod augue nunc, ut molestie leo molestie sed. Mauris pharetra, velit sed vestibulum venenatis, dolor enim molestie mauris, eget lacinia sem sapien in est. Curabitur venenatis elementum magna, sed mattis ante fermentum non.       
              </p>
            </section>     
          </div>
        </div> 
        <div className="c-aside-section">
          <aside className="c-aside-section_aside">
            <Link to="/what-we-do/rocedures-and-reatments" className="more-info" title="Read more about Equipments. Staff &amp; Procedures">More Info<span>Equipments. Staff &amp; Procedures</span></Link>
          </aside>
          <div className="c-aside-section_content">
            <section className="wrapped top-line">
              <h4>Equipments</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
              <p>
                Morbi vestibulum odio elementum, commodo magna non, ornare ante. Donec iaculis diam convallis placerat vulputate. Suspendisse maximus, elit id efficitur elementum, quam risus viverra eros, eu consectetur magna nulla ac arcu. Fusce consequat maximus magna a fermentum. Proin viverra vel ipsum vitae consequat. Quisque euismod augue nunc, ut molestie leo molestie sed. Mauris pharetra, velit sed vestibulum venenatis, dolor enim molestie mauris, eget lacinia sem sapien in est. Curabitur venenatis elementum magna, sed mattis ante fermentum non.       
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
            </section>     
          </div>        
       </div> 
       <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">            
            <section className="c-staff">
              <div className="c-img-content_left">
                <img src={contImg1} alt="Staff section"/>
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
       <div className="c-staff--list">
              <div>
                <Image src={doctImg1m}/>  
                <h4>Name</h4>
                <small>Position</small>
              </div>
              <div>
                <Image src={doctImg1m}/>  
                <h4>Name</h4>
                <small>Position</small>
              </div>
              <div>
                <Image src={doctImg1m}/>  
                <h4>Name</h4>
                <small>Position</small>
              </div>
              <div>
                <Image src={doctImg1m}/>  
                <h4>Name</h4>
                <small>Position</small>
              </div>
            </div>      
       <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">
            <section className="wrapped top-line">
              <h4>Procedures</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
              <p>
              Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
              </p>
            </section>     
          </div>
        </div>        
        <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">
          <p className="e-tabLink">
            <Link to="/what-we-do/laser" className="more-info" title="Read more info about Laser Treatments">Laser Treatments</Link>
          </p>      
          </div>
        </div>     
        <div className="c-aside-section">
          <aside className="c-aside-section_aside"></aside>
          <div className="c-aside-section_content">
              <div className="e-titleBlock">
                <small>What We Do</small>
                <h1>Day Surgery</h1>
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
