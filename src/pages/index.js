import React from 'react'
import Link from 'gatsby-link'
import BrandImage from '../assets/img/brand-splash.svg'

const IndexPage = () => (
  <section style={style.sectionBackground}>
    <div className='has-container'>
      <h1 style={style.brandTitle}>
        Elegant UI
        Guidlines
      </h1>
      <h2 style={{marginTop: 0}}>
        Modern CSS framework based on flexbox & grid.
      </h2>
    </div>
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
    width: '60%'
  }
}

export default IndexPage
