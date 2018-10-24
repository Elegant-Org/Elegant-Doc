import React, { Component } from 'react';
import Link from 'gatsby-link'
import { componentMenu } from '../helpers/global-constants';

export default class ComponentSidebar extends Component {
  
  componentDidMount(){
    this.generateMenu = this.generateMenu.bind(this);
  }

  generateMenu() {
    let componentDom = [];
    componentMenu.forEach( function(menu,index){
      componentDom.push(
        <Link key={index} to={menu.link} activeClassName="is-active" className={["item",].join(' ')}>
            <img src={menu.icon}/>
            <span>{menu.name}</span>
        </Link>
      );
    });
    return componentDom;
  }

  render() {
    return (
      <div className="sidemenu">
        {this.generateMenu()}        
      </div>
    );
  }

}
