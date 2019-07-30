import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './DStam.styles';

class DStam extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('DStam will mount');
  }

  componentDidMount = () => {
    console.log('DStam mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('DStam will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('DStam will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('DStam did update');
  }

  componentWillUnmount = () => {
    console.log('DStam will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="DStamWrapper">
        Test content
      </div>
    );
  }
}

DStam.propTypes = {
  // bla: PropTypes.string,
};

DStam.defaultProps = {
  // bla: 'test',
};

export default DStam;
