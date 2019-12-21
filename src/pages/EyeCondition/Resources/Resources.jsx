import React from 'react';
import { Link } from "react-router-dom";
import { Grid } from 'semantic-ui-react'
//import RetinaImage from "react-retina-image";

//var RetinaImage = require('react-retina-image');
const Resources = () => (
  <div>
    <div className="padding">
      <Grid relaxed>
        <Grid.Row>              
          <Grid.Column tablet={16} computer={4}>
              <h4 className="b-top">Checklist</h4>
              
                <ul className="e-bulleted">
                  <li>Checklist 1</li>
                  <li>Checklist 2</li>
                  <li>Checklist 3</li>
                  <li>Checklist 4</li>
                </ul>                       
              <p>
                <a href="tel:1234567890" className="c-button">Send a copy to my mobile</a>
              </p>
              <p>
                <a href="tel:1234567890" className="c-button">Send a copy to my email</a>  
              </p>                  
          </Grid.Column>
          <Grid.Column tablet={16} computer={7}>

              <h4 className="b-top">Brouchers</h4>
              
          </Grid.Column>
          <Grid.Column tablet={16} computer={5}>
              <h4 className="b-top">Useful Links</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
              <ul className="e-bulleted">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
              </ul>     
          </Grid.Column> 
        </Grid.Row>
      </Grid>           
    </div>
    
    <div className="c-aside-section">
      <aside className="c-aside-section_aside"></aside>
      <div className="c-aside-section_content">
      <p className="e-tabLink">
        <Link to="/cataract/faq" className="more-info" title="Read more FAQ">More Info<span>FAQ</span></Link>
      </p>      
      </div>
    </div>           
</div>
);

export default Resources;
