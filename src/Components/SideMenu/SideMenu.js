import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './SideMenu.scss';
import Button from '../Button/Button';
import { Consumer } from '../../App';



class SideMenu extends Component{
  
  renderLinks(authorized){
    const {closeMenu} = this.props;
    const links = [
      {to: '/quiz/', label:'Список тестов', exact: true, id: 1},
    ];

    authorized
      ? links.push({to: '/quiz/quiz-creator', label:'Создать тест', exact: false, id: 3})
      : links.push({to: '/quiz/auth', label:'Авторизация', exact: false, id: 2});

    return links.map((link)=>{
      return (
        <li
          className = 'side-menu__item'
          key = {link.id}>
          <NavLink
            className = 'side-menu__link'
            to={link.to}
            exact = {link.exact}
            onClick = {closeMenu}>
            {link.label}
          </NavLink> 
        </li>
      )
    })
  }


  render(){
    const {menuIsOpen} = this.props;

    return(
      <Consumer>
        {context=>(
          <div className = {`side-menu ${menuIsOpen? '': 'side-menu_is_closed'}`}>
            <nav>
              <ul className = 'side-menu__list'>
                {this.renderLinks(context.authorized)}
              </ul>
            </nav>
            <Button 
              theme ='info'
              onClick={context.logoutHandler}>
              Выйти
            </Button>
          </div>
        )}
      </Consumer>
    )
  }
}

export default SideMenu