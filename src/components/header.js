import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const headerCss = css`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.45rem;
`

const headingCss = css`
  display: flex;
  align-items: center;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "surveys-logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  return (
    <header css={headerCss}>
      <h1 css={headingCss}>
        <Img
          fixed={data.file.childImageSharp.fixed}
          css={css`
            margin-right: 20px;

            @media (max-width: 690px) {
              margin-right: 0;
              margin-bottom: 10px;
            }
          `}
        />
        <span
          css={css`
            text-align: center;
          `}
        >
          How to use Surveys?
        </span>
      </h1>
    </header>
  )
}

export default Header
