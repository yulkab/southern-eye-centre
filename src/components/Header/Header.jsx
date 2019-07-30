import React, { PureComponent } from 'react';
import TopNavMenu from '../TopNav';
import RightSlide from '../RightSlide';
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';
import logoImg from '../../assets/img/icons/menu-icon@2x.png';

class Header extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      topVisible: false,
      sideVisible: false
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
  
  toggleTopMenu = () => {
    this.setState({ topVisible: !this.state.topVisible });
  }
  toggleSideMenu = () => {
    this.setState({ sideVisible: !this.state.sideVisible });
  }

  render () {
    //const { visible } = this.state;
    return (
      <header className="header">
        <Link to="/" className="logo" title="Southern Eye Centre">          
          <div className="screen-reader-text">Southern Eye Centre Top Header Logo</div>
        </Link>
        <TopNavMenu visible={this.state.topVisible} handler={this.toggleTopMenu}/> 

        <button onClick={this.toggleTopMenu} className="icon-button" type="nav-button" aria-label="Open the Top Navigation">
          <Image src={logoImg} className="icon-burger" alt="Top Navigation button Icon" />
          <div className="screen-reader-text">Button to open the Top Navigation</div>  
        </button>
        
        <Button onClick={this.toggleSideMenu} className="c-button" type="button" aria-label="Open the GPs &amp; Optoms">
          GPs &amp; Optoms
          <div className="screen-reader-text">Button to open the "GPs &amp; Optoms" Description of patient referral.</div>  
        </Button>

        <RightSlide visible={this.state.sideVisible} handler={this.toggleSideMenu}/>

      </header>
    );
  }
}

export default Header;
