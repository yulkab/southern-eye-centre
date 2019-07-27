import React, { PureComponent } from 'react';
import { Button } from 'semantic-ui-react'

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Home will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Home will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Oops... Something went wrong.</h1>;
    }
    return (
      <React.Fragment>
        <div className="page-content">
          <h2>Home</h2>          
          <Button>Click Here</Button>
          <h1 className="super-title">See More, Do More</h1>
        </div>
        <aside className="page-aside">
          Test content for aside
        </aside>
      </React.Fragment>
    );
  }
}

export default Home;
