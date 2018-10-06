import React, { Component } from 'react';
import Link from 'gatsby-link'
import Logo from '../assets/img/logo.svg'
import '../layouts/navbar.css';


export default class Navbar extends Component {

  render() {
    return (
      <div className="navigation">
        
        <div className="navTabsBar">
            <div style={{'padding':24}}>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>
            <nav className="navTabs">
                <ul className="navTabs-list list-inline">
                    <li className="navTabs-item">
                        <Link to="/getting-started" activeClassName="is-active">
                            Getting Started
                        </Link>
                    </li>
                    <li className="navTabs-item">
                        <Link to="/colors" activeClassName="is-active">
                            Colors
                        </Link>
                    </li>
                    <li className="navTabs-item">
                    <Link to="/css/typography" activeClassName="is-active">
                        Typography
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
      </div>
    );
  }
}
