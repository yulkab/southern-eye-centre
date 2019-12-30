import React, { Component } from 'react';
import { RoutedTabs, NavTab } from "react-router-tabs";
import { Route, Switch , Redirect, Link } from "react-router-dom";
import StickyBottomBox from "components/StickyBottomBox";
import Introduction from './Introduction';
import Procerures from './Procerures';
import Resources from './Resources';
import Faq from './Faq';


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
            <StickyBottomBox title="Eye Conditions" heading="Cataract" appointment="true"/>
          </div>
        </div>        
        <aside className="page-aside">
          <div className="c-info">
            <section className="c-info--doctors">
              <h5>OUR CATARACT SPECIALISTS</h5>
              <p>            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, feugiat et risus sed, ultrices faucibus augue. 
              </p>
              <ul className="c-eye-conditions">
                  <li className="c-eye-conditions--item">
                    <a href="/doctor" title="Dr. Stephen Bambery">
                      <div className="c-eye-conditions--item-img cataract" data-content="Dr. Stephen Bambery"></div>
                       Dr. Stephen Bambery
                    </a>                   
                  </li>
                  <li className="c-eye-conditions--item">
                    <a href="/doctor" title="Dr. Walter Chang">
                      <div className="c-eye-conditions--item-img macular-degeneration" data-content="Dr. Walter Chang"></div>
                      Dr. Walter Chang
                    </a>                       
                  </li>
                  <li className="c-eye-conditions--item">
                    <a href="/doctor" title="Dr. Trevor Gin">
                      <div className="c-eye-conditions--item-img dry-eye" data-content="Dr. Trevor Gin"></div>
                      Dr. Trevor Gin
                    </a>                           
                  </li>
                  <li className="c-eye-conditions--item">
                    <a href="/doctor" title="Dr. Weng Ng">
                      <div className="c-eye-conditions--item-img stam" data-content=" Dr. Weng Ng"></div>
                      Dr. Weng Ng
                    </a>                     
                  </li>
                </ul>
              <p>
                <Link to="/doctors" className="more-info" title="Read more about Our Doctors">More Info<span>Our Doctors</span></Link>                            
              </p>
            </section>   
            <hr></hr>   
            <section className="c-info--reviews">
              <p>
                <i className="icon quote"></i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper varius. Ut leo arcu, 
                feugiat et risus sed, ultrices faucibus augue. Pellentesque fermentum dui commodo lobortis suscipit. 
                Etiam sed pellentesque turpis, quis convallis neque. In eu ante in augue imperdiet suscipit vel scelerisque nisl.
                Donec vitae vehicula augue, vel efficitur augue.-- <small>Name, age</small>.
              </p>
              <p>
                <Link to="/everything-about/reviews" className="more-info" title="Read more reviews">More Info<span>Reviews</span></Link>                            
              </p>
            </section>    
          </div>  
        </aside>
      </React.Fragment>
    );
  }
}

export default EyeCondition;
