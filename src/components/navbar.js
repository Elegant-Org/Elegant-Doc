import React, { Component } from 'react';
import Link from 'gatsby-link'
import Logo from '../assets/img/logo-box.png'
import '../layouts/navbar.css';


export default class Navbar extends Component {

  render() {
    const currentUrl = this.props.location.pathname.split('/').filter (function(e){return e});
    return (
      <div className="navigation">
        
        <div className="navTabsBar">
            <div style={{'padding': '24px 24px 0px 24px'}}>
                <Link to="/">
                    <img src={Logo} alt="Logo" style={{height:80,width:80}} />
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
                        <Link to="/style/typography" className={"is-" + (currentUrl[0] == 'style' ? 'active' : '')}>
                            Style
                        </Link>
                    </li>
                    <li className="navTabs-item">
                        <Link to="/components/card" className={"is-" + (currentUrl[0] == 'components' ? 'active' : '')}>
                            Components
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
      </div>
    );
  }
}
