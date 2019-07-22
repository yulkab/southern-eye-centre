import React, { PureComponent } from 'react';
import TopNavMenu from '../TopNav';
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';

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
          <Image src='img/icons/menu-icon@2x.jpg' className="icon-burger" alt="Top Navigation button Icon" />
          <div className="screen-reader-text">Button to open the Top Navigation</div>  
        </button>
        <Button icon onClick={this.toggleSideMenu}>
          side menu
        </Button>
        {/* <div className={"navmenu navmenu--right " + (props.sideVisible ? 'active' : '')}> */}
        <div className={"navmenu navmenu--right " + (this.state.sideVisible ? 'active' : '')}>
          {/* <button onClick={props.handler}>Hide Top Slide Menu</button>  */}
          <button onClick={this.toggleSideMenu}>Hide Side Menu</button> 
          <h1>sidebar goes here</h1>
        </div>
        

         
        {/* <button onClick={this.toggleMenu}><Icon name='home' /></button>  */}
      </header>
    );
  }
}

export default Header;
