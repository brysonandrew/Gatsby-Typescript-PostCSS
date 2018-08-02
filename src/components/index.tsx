import * as React from 'react'
import Link from 'gatsby-link'
import * as style from './Header.module.css';

const Index = ({ siteTitle }) => (
  <div className={style.Header}>
    <div className={style.linkWrapper}>
      <h1 className={style.header}>
        <Link to="/" className={style.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Index
