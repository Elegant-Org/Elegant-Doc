import React from 'react'
import './styles/page-header.css';
var classNames = require('classnames');

const PageHeader = ({ page, title, description, isDocs }) => (
  
  <div className={'is-row'}>
    <div className={'is-col-sm-12 is-col-md-12 is-col-lg-12'}>
      <h5 className={classNames('page-header__page', {
          ['is-text--uppercase']: true,
          ['page-header__page--top--marginless']: isDocs,
        })}>
        { page }
      </h5>

      <h1 className={'page-header__title is-text--bold'}>
        { title }
      </h1>

      <h3 className={classNames('page-header__desc', {
          ['page-header__desc--fullwidth']: isDocs,
        })}>
        { description }
      </h3>
    </div>
  </div>
)

export default PageHeader
