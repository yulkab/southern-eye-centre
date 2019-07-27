import React, { Component } from 'react';
import { Route, Switch , Redirect } from "react-router-dom";
import { RoutedTabs, NavTab } from "react-router-tabs";

import ConsultingAndTreatment from './ConsultingAndTreatment';
import Stam from '../Stam';

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
                  <NavTab to="/what-we-do/consulting-and-treatment"> CONSULTING &amp; TREATMENTS </NavTab>
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
                <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/consulting-and-treatment`} />} />
                <Route path={`${this.props.match.path}/consulting-and-treatment`} component={ConsultingAndTreatment} />
                <Route path={`${this.props.match.path}/day-surgery`} component={Stam} />
                <Route path={`${this.props.match.path}/laser`} component={Stam} />
              </Switch>   
            </article>
          </div>

        </div>        
        <aside className="page-aside">
          Test content for aside
        </aside>
      </React.Fragment>
    );
  }
}

export default WhatWeDo;
