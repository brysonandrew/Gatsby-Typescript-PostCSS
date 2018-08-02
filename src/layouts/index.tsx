import * as React from 'react'
import Helmet from 'react-helmet'

import Index from '../components/index'
import './index.css'
import * as style from './Layouts.module.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Index siteTitle={data.site.siteMetadata.title} />
    <div className={style.content}>
      {children()}
    </div>
  </div>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
