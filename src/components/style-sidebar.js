import React, { Component } from 'react';
import Link from 'gatsby-link'
import { styleMenu } from '../helpers/global-constants';

export default class StyleSidebar extends Component {
  
  componentDidMount(){
    this.generateMenu = this.generateMenu.bind(this);
  }

  generateMenu() {
    let menuDom = [];
    styleMenu.forEach( function(menu,index){
      menuDom.push(
        <Link key={index} to={menu.link} activeClassName="is-active" className={["item",].join(' ')}>
            <img src={menu.icon}/>
            <span>{menu.name}</span>
        </Link>
      );
    });
    return menuDom;
  }

  render() {
    return (
      <div className="sidemenu">
        {this.generateMenu()}        
      </div>
    );
  }

}
