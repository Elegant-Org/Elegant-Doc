import React from 'react'
import PageHeader from '../components/page-header'
import ColorSolid from '../components/color/color-solid'
import ColorShade from '../components/color/color-shades'

import { StyleShade } from '../styles/shade'

const Colors = () => (
  <section>
    <div className='has-container'>
      <ColorSolid/>
      <ColorShade/>
    </div>
  </section>
)

export default Colors
