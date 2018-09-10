import React, { Component } from 'react';
import Link from 'gatsby-link'
import Logo from '../assets/img/logo.svg'

export default class Sidebar extends Component {

  componentDidMount(){
    this.toggle = this.toggle.bind(this);
  }

  toggle(element) {
    const list = document.querySelectorAll('#' + element + ' ul');
    list.forEach((e) => {
      if (e.classList.contains('is-hidden')) {
        e.classList.remove('is-hidden');
        e.classList.add('is-shown');
      } else {
        e.classList.add('is-hidden');
        e.classList.remove('is-shown');
      }
    });
  }

  render() {
    return (
      <div className="">
        <div className="sidebar-brand">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <ul className="sidebar-menu">

          <li className="sidebar-menu-item">
            <Link to="/getting-started" activeClassName="is-active">Getting Started</Link>
          </li>

          <li className="sidebar-menu-item">
            <Link to="/colors" activeClassName="is-active">Colors</Link>
          </li>

          <li className="sidebar-menu-item" >
            <a onClick={() => this.toggle('css')} id='css' className="has-collapse">
              CSS
              <ul className="is-hidden">
                <li className="sidebar-menu-item">
                  <Link to="/css/typography" activeClassName="is-active">Typography</Link>
                </li>
              </ul>
            </a>
          </li>

          <li className="sidebar-menu-item" >
            <a onClick={() => this.toggle('components')} id='components' className="has-collapse">
              Components
              <ul className="is-hidden">
                <li className="sidebar-menu-item">
                  <Link to="/components/button" activeClassName="is-active">Buttons</Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link to="/components/card" activeClassName="is-active">Cards</Link>
                </li>
              </ul>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
