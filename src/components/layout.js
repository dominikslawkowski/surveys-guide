import React from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => {
  return (
    <div
      css={css`
        padding: 20px;
      `}
    >
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
