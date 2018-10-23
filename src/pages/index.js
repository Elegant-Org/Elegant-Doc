import React from 'react'
import Link from 'gatsby-link'
import BrandImage from '../assets/img/brand-splash.svg'

const IndexPage = () => (
  <section>
    <div className='has-container'>
      <h1 style={style.brandTitle}>Elegant UI</h1>
      <h2>Guidlines</h2>
      <h3 style={{marginTop: 0, zIndex:1}}>
      Modern CSS framework based on flexbox & grid.
      </h3>
    </div>
    <img src={BrandImage} style={{ 
      position: 'fixed',
      right: 0,
      bottom: 0,
      maxWidth: 500,
      zIndex: -1
    }}/>
  </section>
)

const style = {
  sectionBackground: {
    backgroundImage: `url(${BrandImage})`,
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '400px 400px',
    height: '100vh',
  },
  brandTitle: {
    marginBottom: 0,
    fontSize: 60,
    fontWeight: 'bold',
    width: '60%',
    zIndex:1
  }
}

export default IndexPage
