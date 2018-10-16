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

            <div style={style.container}> 
            { 
              page.frontmatter.docType == 'style' ? 
              <div className={'has-gap--normal'} style={style.containerSidebar}>
                <StyleSidebar/>
              </div>
               : ''
            }

            {
              page.frontmatter.docType == 'component' ? 
              <div className={'has-gap--normal'} style={style.containerSidebar}>
                <ComponentSidebar/>
              </div>
               : ''
            } 
              <div style={style.containerBody} dangerouslySetInnerHTML={{ __html: page.html }}></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  containerSidebar: {
    flex: 0,
    paddingLeft: 0
  },
  containerBody: {
    flex: 1
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