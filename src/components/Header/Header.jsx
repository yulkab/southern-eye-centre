import React, { PureComponent } from 'react';
import TopNavMenu from '../TopNav';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';

// import logoS from '../../assets/img/logo.png';
// import logoM from '../../assets/img/logo@2x.png';
// import logoL from '../../assets/img/logo@3x.png';



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
//srcSet='img/logo@2x.png 2x, img/logo@3x.png 3x'
  render () {
    //const { visible } = this.state;
    return (
      <header>
        <Link to="/" className="logo">          
          {/* <Image
            alt="Southern Eye Centre logo"
            size='small'
            src={logoS}
            srcSet={`${logoS} 300w, ${logoM} 2x, ${logoL} 3x`}            
          /> */}
          <div className="screen-reader-text">Southern Eye Centre</div>
        </Link>
        <TopNavMenu visible={this.state.visible} handler={this.toggleMenu}/> 
        This is a Header
        <button onClick={this.toggleMenu}>Show Top Menu</button> 
      </header>
    );
  }
}

export default Header;
