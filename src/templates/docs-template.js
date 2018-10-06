import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PageHeader from '../components/page-header';
import StyleSidebar from '../components/style-sidebar';
import ComponentSidebar from '../components/component-sidebar';

class Template extends Component {

  

  render() {
    const { markdownRemark: page } = this.props.data;
    return (
      <div>
        <Helmet title={`Docs | ${page.frontmatter.pageTitle}`} />
        <section>
          <div className='has-container'>
            <PageHeader
              page={page.frontmatter.pageShortTitle}
              title={page.frontmatter.pageTitle}
              description={page.frontmatter.description}
            />
            <div>{page.frontmatter.baseline}</div>
            {page.frontmatter.docType == 'style'? <StyleSidebar/> : ''}
            {page.frontmatter.docType == 'component'? <ComponentSidebar/> : ''}
            <div dangerouslySetInnerHTML={{ __html: page.html }} /></div>
        </section>
      </div>
    );
  }
}
export default Template
export const pageQuery = graphql`
  query DocsByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        docType
        path
        pageTitle
        pageShortTitle
        description
      }
    }
  }
`
;