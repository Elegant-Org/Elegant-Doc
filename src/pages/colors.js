import React from 'react'
import PageHeader from '../components/page-header'
import { hexToRgb } from '../helpers/color'
const Colors = () => (
  <section>
    <div className='has-container'>
      <PageHeader
        page={'Color'}
        title={'Solid Color'}
        description={'We love color. Mostly we use our three main color, but we also have a wide variety of secondary color as well'}
      />
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-4">
          <h3>Primary Color</h3>
          <div style={Style.container}>

            <div style={{...Style.primary.container}}>
              <div style={{...Style.primary.colorBox,...Style.primary.colors.purple}} className="has-depth-1"></div>
              <span>{Style.primary.colors.purple.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.primary.colors.purple.backgroundColor)}</span>
            </div>

            <div style={{...Style.primary.container}}>
              <div style={{...Style.primary.colorBox,...Style.primary.colors.blue}} className="has-depth-1"></div>
              <span>{Style.primary.colors.blue.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.primary.colors.blue.backgroundColor)}</span>
            </div>

            <div style={{...Style.primary.container}}>
              <div style={{...Style.primary.colorBox,...Style.primary.colors.black}} className="has-depth-1"></div>
              <span>{Style.primary.colors.black.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.primary.colors.black.backgroundColor)}</span>
            </div>

          </div>
        </div>
        <div className="col-xs-12 col-md-6 col-lg-4">
          <h3>Secondary Color</h3>
          <div style={Style.container}>

            <div style={{...Style.secondary.container}}>
              <div style={{...Style.secondary.colorBox,...Style.secondary.colors.silver}} className="has-depth-1"></div>
              <span>{Style.secondary.colors.silver.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.secondary.colors.silver.backgroundColor)}</span>
            </div>

            <div style={{...Style.secondary.container}}>
              <div style={{...Style.secondary.colorBox,...Style.secondary.colors.red}} className="has-depth-1"></div>
              <span>{Style.secondary.colors.red.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.secondary.colors.red.backgroundColor)}</span>
            </div>

            <div style={{...Style.secondary.container}}>
              <div style={{...Style.secondary.colorBox,...Style.secondary.colors.green}} className="has-depth-1"></div>
              <span>{Style.secondary.colors.green.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.secondary.colors.green.backgroundColor)}</span>
            </div>

            <div style={{...Style.secondary.container}}>
              <div style={{...Style.secondary.colorBox,...Style.secondary.colors.gray}} className="has-depth-1"></div>
              <span>{Style.secondary.colors.gray.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.secondary.colors.gray.backgroundColor)}</span>
            </div>

            <div style={{...Style.secondary.container}}>
              <div style={{...Style.secondary.colorBox,...Style.secondary.colors.yellow}} className="has-depth-1"></div>
              <span>{Style.secondary.colors.yellow.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.secondary.colors.yellow.backgroundColor)}</span>
            </div>

            <div style={{...Style.secondary.container}}>
              <div style={{...Style.secondary.colorBox,...Style.secondary.colors.white}} className="has-depth-1"></div>
              <span>{Style.secondary.colors.white.backgroundColor}</span>
              <span style={Style.rgb}>{hexToRgb(Style.secondary.colors.white.backgroundColor)}</span>
            </div>


          </div>
        </div>
        </div>
    </div>
  </section>
)

const Style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rgb: {
    fontSize: '12px'
  },
  primary: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '1.5em',
      paddingBottom: '1.5em',
    },
    colorBox: {
        height: '180px',
        width: '180px',
        borderRadius: '20px',
        marginBottom:'5px'
    },
    colors: {
      purple: {
        backgroundColor: '#79589E'
      },
      blue: {
        backgroundColor: '#3268B9'
      },
      black: {
        backgroundColor: '#4E535A'
      }
    }
  },
  secondary: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: '1.5em',
      paddingBottom: '1.5em',
    },
    colorBox: {
        height: '120px',
        width: '120px',
        borderRadius: '20px',
        marginBottom:'5px'
    },
    colors: {
      silver: {
        backgroundColor: '#E3E7EF'
      },
      red: {
        backgroundColor: '#FD7272'
      },
      yellow: {
        backgroundColor: '#FFB944'
      },
      white: {
        backgroundColor: '#FFFFFF'
      },
      green: {
        backgroundColor: '#1ABC9C'
      },
      gray: {
        backgroundColor: '#96A3B5'
      }
    }
  },
};

export default Colors
