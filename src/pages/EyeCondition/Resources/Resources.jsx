import React from 'react';
import { Link } from "react-router-dom";
import RetinaImage from "react-retina-image";

//var RetinaImage = require('react-retina-image');
const Resources = () => (
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
        <p className="more-info">More Info<span>Pre-assessment</span></p>
      </aside>
      <div className="c-aside-section_content">
        <section className="wrapped top-line">
          <h4>Pre-assessment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat. Quisque gravida tortor ipsum. Suspendisse non turpis in ipsum accumsan scelerisque. In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
          </p>
          <p>
            Morbi vestibulum odio elementum, commodo magna non, ornare ante. Donec iaculis diam convallis placerat vulputate. Suspendisse maximus, elit id efficitur elementum, quam risus viverra eros, eu consectetur magna nulla ac arcu. Fusce consequat maximus magna a fermentum. Proin viverra vel ipsum vitae consequat. Quisque euismod augue nunc, ut molestie leo molestie sed. Mauris pharetra, velit sed vestibulum venenatis, dolor enim molestie mauris, eget lacinia sem sapien in est. Curabitur venenatis elementum magna, sed mattis ante fermentum non.       
          </p>
          <p>
            In vulputate tellus vel quam tincidunt, sed placerat nibh pulvinar. Vivamus a viverra erat. Curabitur velit libero, maximus vel tellus in, molestie fermentum nisi. Fusce vitae nunc in tortor dictum commodo. Sed sagittis vestibulum elit, eu mattis quam tempus vitae. Quisque ultrices magna eu iaculis accumsan. Vivamus dictum a urna at luctus.
          </p>
          <p className="m32">
            <RetinaImage src={['../img/laser-logo2.png', '../img/laser-logo3.png']}/>
          </p>                    
            <Link to="#" className="c-button" title="Go to Laser Sight">
              Go to Laser Sight
              <div className="screen-reader-text">Link to Go to Laser Sight</div>  
            </Link>        
        </section>     
      </div>        
    </div>  
    <div className="c-aside-section">
      <aside className="c-aside-section_aside"></aside>
      <div className="c-aside-section_content">
      <p className="e-tabLink">
        <Link to="/laser" className="more-info" title="Read more info about Procedures &amp; Treatments">More Info<span>Laser Eye Surgery</span></Link>
      </p>      
      </div>
    </div>     
    <div className="c-aside-section">
      <aside className="c-aside-section_aside"></aside>
      <div className="c-aside-section_content">
          <div className="e-titleBlock">
            <small>What We Do</small>
            <h1>Laser Treatments</h1>
          </div>
      </div>
    </div>     
</article>
);

export default Resources;
