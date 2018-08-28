import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Sidebar from '../components/sidebar'
// import './index.css'
import '../../../Elegant-UI/dist/elegant.css'
const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Documentation for Elegant UI' },
        { name: 'keywords', content: 'doc,elegant-doc,css-documentation, elegant-ui' },
      ]}
    />

    <div className="row">
      <div className="col-xs-12 col-md-4 col-lg-3">
        <Sidebar />
      </div>
      <div className="col-xs-12 col-md-8 col-lg-9">
        {children()}
      </div>
    </div>

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
