`embed:sample-html-file.html`

import React from 'react'
import PageHeader from '../components/page-header'

const GettingStarted = () => (
  <section>
    <div className='has-container'>
      {/* highlight-range{1-3} */}
      <PageHeader
        page={'Start'}
        title={'Getting Started'}
        description={'Lorem ipsum'}
      />
      {/* Good */}
    </div>
  </section>
)

export default GettingStarted
