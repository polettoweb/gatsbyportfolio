import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './commons/Header'
import Footer from './commons/Footer'
import '../scss/App.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title="Marco Poletto | Web Developer | Mentor"
          author="Marco Poletto Web Developer"
          charSet="UTF-8"
        >
          <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
          <html lang="en" />
        </Helmet>
        <Header siteTitle="Marco Poletto | Web Developer | Mentor" />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 1280,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
