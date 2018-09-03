import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
require("prismjs/themes/prism-solarizedlight.css");


import Sidebar from '../components/sidebar'
import './index.css'
import './global-style.css'
// import '../../../Elegant-UI/dist/elegant.css'


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
      <div className="col-xs-12 col-md-3 col-lg-2">
        <Sidebar />
      </div>
      <div className="col-xs-12 col-md-9 col-lg-10">
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
