import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Grid } from 'semantic-ui-react';
import contImg1 from 'assets/img/referral-image@2x.png';
import contImg2 from 'assets/img/registration-image@2x.png';
import contImg3 from 'assets/img/personal-image2.png';
import contImg4 from 'assets/img/family-image@2x.png';
import contImg5 from 'assets/img/referral-image@2x.png';
import contImg6 from 'assets/img/allergies-image2.png';

const WhatToBring = props => (
  <article>
    <div className="page-content">
      <Grid stackable columns={3} className="c-cards-list col-3">
        <Grid.Column mobile={16}>
          <Card>
            <CardContent>
              <div>
                <h4>Referrals</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
                </p>
              </div>
            </CardContent>
            <img src={contImg1} alt="Referrals" />
          </Card>
        </Grid.Column>

        <Grid.Column mobile={16}>
          <Card>
            <CardContent>
              <div>
                <h4>Dry Eye</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
                </p>
              </div>
            </CardContent>
            <img src={contImg2} alt="Registration Form" />
          </Card>
        </Grid.Column>

        <Grid.Column mobile={16}>
          <Card>
            <CardContent>
              <div>
                <h4>Personal History</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
                </p>
              </div>
            </CardContent>
            <img src={contImg3} alt="Personal History" />
          </Card>
        </Grid.Column>

        <Grid.Column mobile={16}>
          <Card>
            <CardContent>
              <div>
                <h4>Family History</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
                </p>
              </div>
            </CardContent>
            <img src={contImg4} alt="Family History" />
          </Card>
        </Grid.Column>

        <Grid.Column mobile={16}>
          <Card>
            <CardContent>
              <div>
                <h4>Medication List</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
                </p>
              </div>
            </CardContent>
            <img src={contImg5} alt="Medication List" />
          </Card>
        </Grid.Column>

        <Grid.Column mobile={16}>
          <Card>
            <CardContent>
              <div>
                <h4>Allergies</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed.
                </p>
              </div>
            </CardContent>
            <img src={contImg6} alt="Allergies" />
          </Card>
        </Grid.Column>
      </Grid>
    </div>
    <div className="c-aside-section">
      <aside className="c-aside-section_aside"></aside>
      <div className="c-aside-section_content">
        <p className="e-tabLink">
          <Link to="/visit/getting-here" className="more-info" title="Read more info about getting here">GETTING HERE</Link>
        </p>
      </div>
    </div>
  </article>
);

// WhatToBring.propTypes = {
//   // bla: PropTypes.string,
// };

// WhatToBring.defaultProps = {
//   // bla: 'test',
// };

export default WhatToBring;
