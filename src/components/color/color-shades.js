import React from 'react'
import Link from 'gatsby-link'
import PageHeader from '../page-header';
import { hexToRgb } from '../../helpers/color'

const ColorShade = ({ siteTitle }) => (
  <div>
    <PageHeader
      page={'Shades'}
      title={'Complementary Shades'}
      description={'Our passion for colors doesn’t stop at solid colors. We also collected are our favorite shades.'}
    />
    <div className="row">
      <div className="col-xs-12 col-md-12 col-lg-12">
        <div className="row">
          <Shade shades = {shadesGroup.purple} />
          <Shade shades = {shadesGroup.green} />
          <Shade shades = {shadesGroup.red} />
          <Shade shades = {shadesGroup.blue} />
          <Shade shades = {shadesGroup.yellow} />
          <Shade shades = {shadesGroup.gray} />

        </div>
      </div>
      </div>
  </div>
);

const shadesGroup = {
  purple: [
    {
      name: 'Purple Dark',
      hex: '#4B2E6F'
    },
    {
      name: 'Purple',
      hex: '#79589F'
    },
    {
      name: 'Purple Light',
      hex: '#A985CF'
    }
  ],
  green: [
    {
      name: 'Green Dark',
      hex: '#428F54'
    },
    {
      name: 'Green',
      hex: '#72C081'
    },
    {
      name: 'Green Light',
      hex: '#A3F3B1'
    }
  ],
  red: [
    {
      name: 'Red Dark',
      hex: '#C54047'
    },
    {
      name: 'Red',
      hex: '#FD7272'
    },
    {
      name: 'Red Light',
      hex: '#FFA4A1'
    }
  ],
  blue: [
    {
      name: 'Blue Dark',
      hex: '#003E88'
    },
    {
      name: 'Blue',
      hex: '#3268B9'
    },
    {
      name: 'Blue Light',
      hex: '#6B95EC'
    }
  ],
  yellow: [
    {
      name: 'Yellow Dark',
      hex: '#C88906'
    },
    {
      name: 'Yellow',
      hex: '#FFB844'
    },
    {
      name: 'Yellow Light',
      hex: '#FFEB75'
    }
  ],
  gray: [
    {
      name: 'Gray Dark',
      hex: '#687485'
    },
    {
      name: 'Gray',
      hex: '#96A3B5'
    },
    {
      name: 'Gray Light',
      hex: '#C7D4E7'
    }
  ],
}

function generateShades(shades) {
  let shadesArray = [];
  shades.map((item,key) => {
    shadesArray.push(
      <div key={key} style={{
        ...Style.shadeOuterContainer,
        'backgroundColor': item.hex,
      }}
      className={'has-gap--small container-top-bottom--radius'}>
        <div style={{...Style.shadesItem}}>{ item.name }</div>
        <div style={{...Style.shadesItemColorCode}}>
          <div style={{...Style.shadesItemColorCodeItem}}>{ item.hex }</div>
          <div style={{...Style.shadesItemColorCodeItemHex}}>{ hexToRgb(item.hex) }</div>
        </div>
      </div>
    );
  });
  return shadesArray;
}

const Shade = ({ shades }) => (
  <div className="col-xs-12 col-md-6 col-lg-4" style={{'marginBottom': '1.5em'}}>
    <div className="has-depth-bottom has-radius--large">
      { generateShades(shades) }
    </div>
  </div>
);

const Style = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  shadeOuterContainer: {
    display: 'flex',
    height: '70px',
    justifyContent: 'space-between',
  },
  shadesItem: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: '14px'
  },
  shadesItemColorCode: {
    display: 'flex',
    color: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  shadesItemColorCodeItem: {
    fontSize: '12px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
  },
  shadesItemColorCodeItemHex: {
    fontSize: '10px',
    fontWeight: 'bold',
  },
  shadesTopRadius: {
    borderTopLeftRadius: '4px',
    borderTopRightRadius: '4px',
  },
  shadesBottomRadius: {
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
  }
};

export default ColorShade
