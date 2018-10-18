import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/navbar';
require("prismjs/themes/prism-solarizedlight.css");
import favicon from '../assets/img/favicon.png'


import './index.css'
import './global-style.css'
import './markdown-style.css'
// import '../../../Elegant-UI/dist/elegant.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Documentation for Elegant UI' },
        { name: 'keywords', content: 'doc,elegant-doc,css-documentation, elegant-ui' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />

    <div className="is-row">
        <div className="is-col-xs-12 is-col-md-12 is-col-lg-12">
          <Navbar/>
        </div>
        <div className="is-col-xs-12 is-col-md-12 is-col-lg-12">
          <div className="doc-container">
            {children()}
          </div>
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
