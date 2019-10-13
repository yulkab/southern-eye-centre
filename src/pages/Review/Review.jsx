import React from 'react';
import { Link } from "react-router-dom";
import News from '../../components/News';

const Review = props => (
  <React.Fragment>
    <article>
      <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>              
        <div className="c-aside-section_content">
          <section className="wrapped">
            <small>Reviews</small>
            <h1 className="quote"><i className="icon quote"></i>
              A sentence from the review as a preview...
            </h1>              
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
 
      <div className="page-content e-tabLink">         
        <Link to="/review" className="more-info left" title="Read Previous Review">Previous Review</Link>
        <Link to="/review" className="more-info" title="Read Next Review">Next Review</Link>    
    </div>  

      {/* <div className="padding">
      <p className="text-left">
          <Link to="/gallery" className="more-info" title="Read more info about Procedures &amp; Treatments">More Info <span>Photos</span></Link>
        </p> 
        <p className="text-right">
          <Link to="/gallery" className="more-info" title="Read more info about Procedures &amp; Treatments">More Info <span>Photos</span></Link>
        </p> 
      </div> */}

    </article>    
    <aside className="page-aside">
      <div className="c-info">
        <News></News>
      </div>
    </aside>
  </React.Fragment>
);

export default Review;
