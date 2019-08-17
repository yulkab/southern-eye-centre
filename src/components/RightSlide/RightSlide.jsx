import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import closemg from '../../assets/img/icons/close-icon@2x.png';

const RightSlide = props => (
  <div className={"navmenu navmenu--right " + (props.visible ? 'active' : '')}>
    <button onClick={props.handler} className="close-button" type="nav-button" aria-label="Open the Top Navigation">
      <Image src={closemg} className="icon-close" alt="Top Navigation button Icon" />
      <div className="screen-reader-text">Button to open the Top Navigation</div>  
    </button>
    <section>
      <h2>GPs &amp; Optoms</h2>
      <h4>Refer a patient</h4>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra non enim id facilisis. Cras posuere eget sem vitae ullamcorper. Donec efficitur purus at justo porta, ut lacinia lacus porta. Mauris sed purus quis augue sodales sagittis.
      </p>
      <p>
        Duis fringilla vulputate sem eu pellentesque. Donec nec libero ac urna consectetur finibus. Nullam nisl justo, semper at laoreet at, blandit sed neque. Fusce eleifend velit ac sodales rhoncus. Nunc diam diam, tristique id lectus quis, fringilla blandit mi. Mauris vitae placerat eros. Donec lacinia nibh sit amet varius dignissim. Curabitur vitae semper leo.
      </p>
      <p>
        <button className="c-button" type="button" aria-label="Download Registration Form">
          Download Registration Form
          <div className="screen-reader-text">Button to Download Registration Form.</div>  
        </button>
      </p>
      <p>
          44 Cranbourne Rd<br/>
          Frankston VIC 3199 <br/>
          <br/>
          Phone: 03 9783 5245<br/>
          Fax: 03 9783 9882<br/>
          <br/>
          Email: <br/>
          info@southerneye.com.au<br/>
      </p>
    </section>
    
  </div>
);

RightSlide.propTypes = {
  handler: PropTypes.func
};

RightSlide.defaultProps = {
  visible: false
};

export default RightSlide;
