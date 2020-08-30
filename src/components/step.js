import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

const articleCss = reverse => css`
  display: flex;
  margin-bottom: 100px;

  ${reverse &&
  css`
    flex-direction: row-reverse;
  `}

  @media (max-width: 1400px) {
    flex-direction: column-reverse;
  }
`

const imageCss = reverse => css`
  max-width: 800px;
  border-radius: 0.5rem;
  margin-right: 20px;

  ${reverse &&
  css`
    margin-right: 0;
    margin-left: 20px;
  `}

  -webkit-box-shadow: 10px 10px 31px -4px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 10px 10px 31px -4px rgba(0, 0, 0, 0.2);
  box-shadow: 10px 10px 31px -4px rgba(0, 0, 0, 0.2);

  @media (max-width: 1400px) {
    margin: 0 auto;
  }
`

const stepsCss = reverse => css`
  max-width: 40%;
  margin-left: 20px;
  margin-top: 25px;
  font-size: 25px;

  @media (max-width: 1400px) {
    max-width: 100%;
  }

  > p {
    color: #1c1b20;
    margin-bottom: 30px;
    font-weight: 500;
  }

  ${reverse &&
  css`
    margin-left: 0;
    margin-right: 20px;
  `}
`

const elementCss = css`
  margin-bottom: 0.5em;
`

const Step = ({ image, steps, reverse }) => (
  <article css={articleCss(reverse)}>
    <Img
      fluid={image.childImageSharp.fluid}
      style={{ width: '100%', height: '100%' }}
      css={imageCss(reverse)}
    />
    <h2 css={stepsCss(reverse)}>
      {steps.map((step, index) => (
        <p key={`${image.childImageSharp.fluid.src}-${index}`} css={elementCss}>
          {step}
        </p>
      ))}
    </h2>
  </article>
)

export default Step
