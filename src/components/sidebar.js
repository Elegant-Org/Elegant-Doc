import React from 'react'
import Link from 'gatsby-link'

const Sidebar = ({ siteTitle }) => (
  <div className="sidebar">
    <div className="sidebar-brand">
    </div>
    <ul className="sidebar-menu">
      <li className="sidebar-menu-item">
        <Link to="/page-2/" className="is-active">Introduction</Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="/page-2/">Colors</Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="/page-2/">Typography</Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="/page-2/">Cards</Link>
      </li>
      <li className="sidebar-menu-item">
        <Link to="/page-2/">Buttons & Inputs</Link>
      </li>
    </ul>
  </div>
)

export default Sidebar
