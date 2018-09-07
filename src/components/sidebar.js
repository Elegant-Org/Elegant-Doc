import React from 'react'
import Link from 'gatsby-link'
import Logo from '../assets/img/logo.svg'

const Sidebar = ({ siteTitle }) => (
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
      <li className="sidebar-menu-item">
        <Link to="/css/typography" activeClassName="is-active">Typography</Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="/components/card" activeClassName="is-active">Cards</Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="/components/button" activeClassName="is-active">Buttons</Link>
      </li>
    </ul>
  </div>
)

export default Sidebar
