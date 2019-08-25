import React, { Component } from 'react';
import { Route, Switch , Redirect } from "react-router-dom";
import { RoutedTabs, NavTab } from "react-router-tabs";

import Introduction from './Introduction';
import Procerures from './Procerures';
import Resources from './Resources';
import Faq from './Faq';

import News from '../../components/News';
import Photos from '../../components/Photos';

class EyeCondition extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('EyeCondition will mount');
  }

  componentDidMount = () => {
    console.log('EyeCondition mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('EyeCondition will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('EyeCondition will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('EyeCondition did update');
  }

  componentWillUnmount = () => {
    console.log('EyeCondition will unmount');
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
                  <NavTab to="/cataract/introduction"> INTRODUCTION </NavTab>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mauris sit amet metus cursus viverra. Etiam tincidunt jeraurna eu. 
                  </p>                                  
                </li>
                <li className="c-tabs__item">
                  <NavTab to="/cataract/procerures"> PROCEDURES </NavTab>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mauris sit amet metus cursus viverra. Etiam tincidunt jeraurna eu. 
                  </p>
                </li>
                <li className="c-tabs__item">
                  <NavTab to="/cataract/resources"> RESOURCES </NavTab>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mauris sit amet metus cursus viverra. Etiam tincidunt jeraurna eu. 
                  </p>
                </li>  
                <li className="c-tabs__item">
                  <NavTab to="/cataract/faq"> FAQ </NavTab>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac mauris sit amet metus cursus viverra. Etiam tincidunt jeraurna eu. 
                  </p>
                </li>              
              </RoutedTabs>
            </nav>
            <article className="c-tabs__panel">
              <Switch>
                <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/introduction`} />} />
                <Route path={`${this.props.match.path}/introduction`} component={Introduction} />
                <Route path={`${this.props.match.path}/procerures`} component={Procerures} />
                <Route path={`${this.props.match.path}/resources`} component={Resources} />
                <Route path={`${this.props.match.path}/faq`} component={Faq} />
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
            <Switch>
                <Route path={`${this.props.match.path}/consulting-and-treatments`} component={News} />
                <Route path={`${this.props.match.path}/day-surgery`} component={Photos} />
                <Route path={`${this.props.match.path}/laser`} component={News} />
              </Switch> 
          </div>  
        </aside>
      </React.Fragment>
    );
  }
}

export default EyeCondition;
