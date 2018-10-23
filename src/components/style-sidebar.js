import React, { Component } from 'react';
import Link from 'gatsby-link'
import { styleMenu } from '../helpers/global-constants';

export default class StyleSidebar extends Component {
  
  componentDidMount(){
    this.generateMenu = this.generateMenu.bind(this);
  }

  generateMenu() {
    let menuDom = [];
    const currentUrl = location.pathname.split('/').filter (function(e){return e});
    styleMenu.forEach( function(menu,index){
      menuDom.push(
        <div key={index} className={[
            "item",
            currentUrl[1] == menu.link ? 'is-active' : ''
          ].join(' ')}>
          <Link to={menu.link}>
            <img src={menu.icon}/>
            <span>{menu.name}</span>
          </Link>
        </div>
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
