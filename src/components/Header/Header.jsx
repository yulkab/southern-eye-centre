import React, { PureComponent } from 'react';
import TopNavMenu from '../TopNav';

class Header extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  componentWillMount = () => {
    console.log('Header will mount');
  }

  componentDidMount = () => {
    console.log('Header mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Header will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Header will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Header did update');
  }

  componentWillUnmount = () => {
    console.log('Header will unmount');
  }
  
  toggleMenu = () => {
    this.setState({ visible: !this.state.visible });
  }

  render () {
    //const { visible } = this.state;
    return (
      <header>
        <TopNavMenu visible={this.state.visible} handler={this.toggleMenu}/> 
        This is a Header
        <button onClick={this.toggleMenu}>Show Top Menu</button> 
      </header>
    );
  }
}

export default Header;
