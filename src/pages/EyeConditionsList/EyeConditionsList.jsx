import React from 'react';
import { Card, CardContent, Grid } from 'semantic-ui-react';

const EyeConditionsList = () => (
  <div className="page-content e-call-button">
    <article className="padding-unset">
      <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>
        <div className="c-aside-section_content">
          <section className="wrapped">
          <a href="tel:1234567890" className="c-button">Call for an appointment</a>
            <h1>Eye Conditions</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, 
              feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat.
            </p>
          </section>
        </div>
      </div>
    </article>

    <Grid className="c-cards-list">

      <Grid.Column mobile={16}>
        <Card href='/cataract' title="Read more info Cataract">

          <CardContent>
            <div>
              <h4>Cataract</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>           
          </CardContent>
          <div className="condition-img cataract">
            <div className="screen-reader-text">Cataract image.</div>
          </div>
        </Card>
      </Grid.Column>
     
      <Grid.Column mobile={16}>
        <Card href='/macular-degeneration' title="Read more Macular Degeneration">

          <CardContent>
            <div>
              <h4>Macular Degeneration</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>            
          </CardContent>
          <div className="condition-img macular-degeneration">
            <div className="screen-reader-text">Macular Degeneration image.</div>
          </div>
        </Card>
      </Grid.Column>

      <Grid.Column mobile={16}>
        <Card href='/dry-eye' title="Read more Dry Eye">

          <CardContent>
            <div>
              <h4>Dry Eye</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>            
          </CardContent>
          <div className="condition-img dry-eye">
            <div className="screen-reader-text">Dry Eye image.</div>
          </div>
        </Card>
      </Grid.Column>

      <Grid.Column mobile={16}>
        <Card href='/diabetic-eye-diseases' title="Read more Diabetic Eye Diseases">
          <CardContent>
            <div>
              <h4>Diabetic Eye Diseases</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>            
          </CardContent>
          <div className="condition-img diabetic-eye-diseases">
            <div className="screen-reader-text">Diabetic Eye Diseases image.</div>
          </div>
        </Card>
      </Grid.Column>
      
      <Grid.Column mobile={16}>
        <Card href='/glaucoma' title="Read more about Glaucoma">
          <CardContent>
            <div>
              <h4>Glaucoma</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>            
          </CardContent>
          <div className="condition-img glaucoma">
            <div className="screen-reader-text">Glaucoma image.</div>
          </div>
        </Card>
      </Grid.Column>
      
      <Grid.Column mobile={16}>
        <Card href='/kerataconus' title="Read more about Kerataconus">
          <CardContent>
            <div>
              <h4>Kerataconus</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>           
          </CardContent>
          <div className="condition-img kerataconus">
            <div className="screen-reader-text">Kerataconus icon image.</div>
          </div>
        </Card>
      </Grid.Column>
      
      <Grid.Column mobile={16}>
        <Card href='/ocuplastic-issues' title="Read more about Ocuplastic issues">
          <CardContent>
            <div>
              <h4>Ocuplastic issues (Eyelids, tear ducts &amp; skin conditions)</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>            
          </CardContent>
          <div className="condition-img ocuplastic-issues">
            <div className="screen-reader-text">Ocuplastic issues icon image.</div>
          </div>
        </Card>
      </Grid.Column>
      
      <Grid.Column mobile={16}>
        <Card href='/pterygium' title="Read more about Pterygium">
          <CardContent>
            <div>
              <h4>Pterygium</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>           
          </CardContent>
          <div className="condition-img pterygium">
            <div className="screen-reader-text">Pterygium icon image.</div>
          </div>
        </Card>
      </Grid.Column>
      
      <Grid.Column mobile={16}>
        <Card href='/foreign-bodies-and-acute-injuries' title="Read more about Foreign Bodies &amp; Acute Injuries">
          <CardContent>
            <div>
              <h4>Foreign Bodies &amp; Acute Injuries</h4>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
              </p>
            </div>          
          </CardContent>
          <div className="condition-img foreign-bodies-and-acute-injuries">
            <div className="screen-reader-text">Foreign Bodies &amp; Acute Injuries icon image.</div>
          </div>
        </Card>
      </Grid.Column>

    </Grid>
  </div>
);

export default EyeConditionsList;


