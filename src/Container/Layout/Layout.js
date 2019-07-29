import React, {Component} from 'react'
import ToggleBtn from '../../Components/ToggleBtn/ToggleBtn';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Backdrop from '../../Components/Backdrop/Backdrop';

import './Layout.css';


class Layout extends Component{
  state = {
    menuIsOpen: false
  }

  toggleMenu = () => {
    this.setState ({
      menuIsOpen: !this.state.menuIsOpen
    })
  }

  closeMenu = () => {
    this.setState ({
      menuIsOpen: false
    })
  }

  render(){
    let {menuIsOpen} = this.state
    return(
      <React.Fragment>
        <SideMenu menuIsOpen = {menuIsOpen} closeMenu = {this.closeMenu} />
        <ToggleBtn menuIsOpen = {menuIsOpen} toggleMenu = {this.toggleMenu}  />
        { menuIsOpen && <Backdrop onClick={this.closeMenu} /> }
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default Layout