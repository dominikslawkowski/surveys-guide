import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "surveys-logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
        `}
      >
        <h1
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <Img
            fixed={data.file.childImageSharp.fixed}
            css={css`
              margin-right: 20px;
            `}
          />
          How to use Surveys?
        </h1>
      </div>
    </header>
  )
}

export default Header
