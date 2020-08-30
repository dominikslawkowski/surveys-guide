import React from 'react'
import { css } from '@emotion/core'

const highlightCss = css`
  display: inline-block;
  margin-top: 3px;
  padding: 0 5px;
  border-radius: 5px;
  background-color: #ffe985;
`

const Highlight = ({ children }) => {
  return <span css={highlightCss}>{children}</span>
}

export default Highlight
