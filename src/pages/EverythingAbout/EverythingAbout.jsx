import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";
import { Dropdown, Card, CardContent, Image } from 'semantic-ui-react'

const topicsOptions = [
  { key: 'all', value: 'all', text: 'Everything' },
  { key: 'news', value: 'news', text: 'News' },
  { key: 'reviews', value: 'reviews', text: 'Reviews' },
  { key: 'gallery', value: 'gallery', text: 'Photos' }
]


class EverythingAbout extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      selected: 'all'
    };
  }

  componentWillMount = () => {
    console.log('EverythingAbout will mount');
  }

  componentDidMount = () => {
    console.log('EverythingAbout mounted');

   this.setState({ selected: this.props.match.params.topic });
    console.log('EverythingAbout mounted this.state.selected',  this.state.selected );
    
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('EverythingAbout will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('EverythingAbout will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('EverythingAbout did update',  this.state);
  }

  componentWillUnmount = () => {
    console.log('EverythingAbout will unmount');
  }

  handleChange = (e, { value }) => {
     this.setState({ selected: value });
    //   console.log('handleChange this.state.selected',  this.state.selected );
       this.props.history.push('/everything-about/' + value);
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="page-content">
        <article className="padding-unset">
          <div className="c-aside-section">
            <aside className="c-aside-section_aside"></aside>
            <section className="c-aside-section_content">
              
                <h1> 
                  <Dropdown inline 
                  options={topicsOptions} 
                  value={this.props.match.params.topic}
                  onChange={this.handleChange}
                  /> {' '} about Southern Eye Centre.</h1>
            
            </section>
          </div>
        </article>
        EverythingAbout Switch: 
        
        <article className="">{this.props.match.path} 
        <h3>{this.props.match.params.topic}</h3>
              {/* <Switch>
                <Route exact path={`${this.props.match.path}`} render={() => <Redirect replace to={`${this.props.match.path}/what-to-bring`} />} />
                <Route path={`${this.props.match.path}/news`} component={WhatToBring} />
                <Route path={`${this.props.match.path}/getting-here`} component={GettingHere} />
                <Route path={`${this.props.match.path}/faq`} component={Faq} />
              </Switch>    */}
            </article>
            <section id="topics" className="c-topics-grid">
            New title that might go over 2 lines or more

            <Card href='/cataract' className="news" title="Read more">
              <CardContent>
                <div>
                  <h4>New title that might go over 2 lines or more</h4>
                  <p>
                    NAME OF PERSON POSTING / 25 - 02 - 2019
                  </p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </div>           
              </CardContent>
              <div className="condition-img cataract">
                <div className="screen-reader-text">Cataract image.</div>
              </div>
            </Card>

            <img src="https://placekitten.com/370/300" alt="pretty kitty"/>
            <img src="https://placekitten.com/389/251" alt="pretty kitty"/>
            <img src="https://placekitten.com/371/321" alt="pretty kitty"/>
            <img src="https://placekitten.com/343/371" alt="pretty kitty"/>
            <img src="https://placekitten.com/372/287" alt="pretty kitty"/>
            <img src="https://placekitten.com/275/390" alt="pretty kitty"/>
            <img src="https://placekitten.com/292/361" alt="pretty kitty"/>
            <img src="https://placekitten.com/256/228" alt="pretty kitty"/>
            <img src="https://placekitten.com/278/308" alt="pretty kitty"/>
            <img src="https://placekitten.com/283/205" alt="pretty kitty"/>
            <img src="https://placekitten.com/207/364" alt="pretty kitty"/>
            <img src="https://placekitten.com/397/220" alt="pretty kitty"/>
            <img src="https://placekitten.com/348/325" alt="pretty kitty"/>
            <img src="https://placekitten.com/282/397" alt="pretty kitty"/>
            <img src="https://placekitten.com/344/250" alt="pretty kitty"/>
            <img src="https://placekitten.com/371/328" alt="pretty kitty"/>
            <img src="https://placekitten.com/248/214" alt="pretty kitty"/>
            
                
              </section>      
            
      </div>
    );
  }
}

EverythingAbout.propTypes = {
  // bla: PropTypes.string,
};

EverythingAbout.defaultProps = {
  // bla: 'test',
};

export default withRouter(EverythingAbout);
