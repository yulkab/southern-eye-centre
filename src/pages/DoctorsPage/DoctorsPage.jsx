import React from 'react';
import { Card, Image, CardContent, Grid } from 'semantic-ui-react';
import doctImg1m from '../../assets/img/doctor-photo@2x.png';


const DoctorsPage = () => (
  <div className="page-content e-call-button">
    <article className="padding-unset">
      <div className="c-aside-section">
        <aside className="c-aside-section_aside"></aside>
        <div className="c-aside-section_content">
          <section className="wrapped">
          <a href="tel:1234567890" className="c-button">Call for an appointment</a>
            <h1>Our Doctors</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. Maecenas vel arcu feugiat, rutrum sapien at, auctor arcu. Duis vitae pellentesque ligula. Nunc egestas velit sed lorem ultrices, imperdiet finibus leo tempor. Curabitur accumsan pellentesque placerat.
            </p>
          </section>
        </div>
      </div>
    </article>

    <Grid className="c-doctors">
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">
              <h4>Dr. Damien Louis</h4>
              <span>MBBS, FRANZCO</span>
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">               
              <h4>Dr. Damien Louis</h4>               
              <span>MBBS, FRANZCO</span>             
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">               
              <h4>Dr. Damien Louis</h4>               
              <span>MBBS, FRANZCO</span>             
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">               
              <h4>Dr. Damien Louis</h4>               
              <span>MBBS, FRANZCO</span>             
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">               
              <h4>Dr. Damien Louis</h4>               
              <span>MBBS, FRANZCO</span>             
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">               
              <h4>Dr. Damien Louis</h4>               
              <span>MBBS, FRANZCO</span>             
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">               
              <h4>Dr. Damien Louis</h4>               
              <span>MBBS, FRANZCO</span>             
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">               
              <h4>Dr. Damien Louis</h4>               
              <span>MBBS, FRANZCO</span>             
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16}>
        <Card href='/doctor' title="Read more info about Dr. Damien Louis">
          <Image src={doctImg1m} />
          <CardContent>
            <div className="doc-info">               
              <h4>Dr. Damien Louis</h4>               
              <span>MBBS, FRANZCO</span>             
            </div>
            <div className="extra content"></div>
          </CardContent>
        </Card>
      </Grid.Column>
    </Grid>
  </div>
);

// DoctorsPage.propTypes = {
//   // bla: PropTypes.string,
// };

// DoctorsPage.defaultProps = {
//   // bla: 'test',
// };

export default DoctorsPage;
