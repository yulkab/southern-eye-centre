import React, { Component } from 'react';
import { Route, Switch , Redirect, Link } from "react-router-dom";
import { RoutedTabs, NavTab } from "react-router-tabs";

import ConsultingAndTreatment from './ConsultingAndTreatment';
import DaySurgery from './DaySurgery';

import Stam from '../Stam';

import contImg1 from '../../assets/img/contact.jpg';

class WhatWeDo extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('WhatWeDo will mount');
  }

  componentDidMount = () => {
    console.log('WhatWeDo mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('WhatWeDo will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('WhatWeDo will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('WhatWeDo did update');
  }

  componentWillUnmount = () => {
    console.log('WhatWeDo will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Oops... Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <div className="page-content">                        
          <div className="c-tabs">
            <nav className="c-tabs__navigation">
              <RoutedTabs startPathWith={this.props.match.path} elementType="ul" className="c-tabs__list">
                <li className="c-tabs__item">               
                  <NavTab to="/what-we-do/consulting-and-treatments"> CONSULTING &amp; TREATMENTS </NavTab>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mauris sit amet metus cursus viverra. Etiam tincidunt jeraurna eu. 
                  </p>                                  
                </li>
                <li className="c-tabs__item">
                  <NavTab to="/what-we-do/day-surgery"> Day Surgery </NavTab>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mauris sit amet metus cursus viverra. Etiam tincidunt jeraurna eu. 
                  </p>
                </li>
                <li className="c-tabs__item">
                  <NavTab to="/what-we-do/laser">Llaser</NavTab>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mauris sit amet metus cursus viverra. Etiam tincidunt jeraurna eu. 
                  </p>
                </li>
                
              </RoutedTabs>
            </nav>
            <article className="c-tabs__panel">
              <Switch>
                <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/consulting-and-treatments`} />} />
                <Route path={`${this.props.match.path}/consulting-and-treatments`} component={ConsultingAndTreatment} />
                <Route path={`${this.props.match.path}/day-surgery`} component={DaySurgery} />
                <Route path={`${this.props.match.path}/laser`} component={Stam} />
              </Switch>   
            </article>
          </div>

        </div>        
        <aside className="page-aside">
          <div className="c-info">
            <section className="c-info--contact">
              <h5>CONTACT US</h5>
              <p>            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. 
              </p>
              <p>
                44 Cranbourne Rd <br/>
                Frankston VIC 3199
              </p>
              <p>
                Phone: 03 9783 5245 <br/>
                Fax: 03 9783 9882
              </p>
              <p>Email: info@southerneye.com.au</p>
              <p>
                CENTRE HOURS
                Monday – Friday
                8.30am – 5.00pm
              </p>            
            </section>   
            <hr></hr>
            <section className="c-info--news">
                <h5>News title</h5>
                <small>NAME OF PERSON POSTED / 2019 - 02-25</small>
                <img src={contImg1} alt="Contact Us section"/>
                <p>
                  <Link to="/news" className="more-info" title="Read more News">More Info<span>News</span></Link>                            
                </p>
            </section>     
            <Switch>
                <Route path={`${this.props.match.path}/laser`} component={Stam} />
              </Switch> 
          </div>  
        </aside>
      </React.Fragment>
    );
  }
}

export default WhatWeDo;
