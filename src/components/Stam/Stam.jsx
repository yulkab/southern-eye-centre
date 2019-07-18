import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Stam.styles';

class Stam extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Stam will mount');
  }

  componentDidMount = () => {
    console.log('Stam mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Stam will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Stam will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Stam did update');
  }

  componentWillUnmount = () => {
    console.log('Stam will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="StamWrapper">
        Test content
      </div>
    );
  }
}

Stam.propTypes = {
  // bla: PropTypes.string,
};

Stam.defaultProps = {
  // bla: 'test',
};

export default Stam;
