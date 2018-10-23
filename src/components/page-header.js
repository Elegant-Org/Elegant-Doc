import React from 'react'

const PageHeader = ({ page, title, description }) => (
  <div className={'is-row'}>
    <div className={'is-col-sm-12 is-col-md-12 is-col-lg-12'}>
      <h5 style={ style.page } className={'is-text--uppercase'}>
        { page }
      </h5>

      <h1 style={ style.title } className={'is-text--bold'}>
        { title }
      </h1>

      <h3 style={ style.desc }>
        { description }
      </h3>
    </div>
  </div>
)

const style = {
  page: {
    marginBottom: 0,
  },
  title: {
    marginBottom:0,
    marginTop: 0
  },
  desc: {
    width: '60%',
    lineHeight: '1.2em'
  }

}

export default PageHeader
