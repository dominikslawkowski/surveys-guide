import React from 'react'
import { css } from '@emotion/core'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Step from '../components/step'
import Highlight from '../components/highlight'

export const query = graphql`
  query {
    step1: file(relativePath: { eq: "step1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step2: file(relativePath: { eq: "step2.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step3: file(relativePath: { eq: "step3.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step4: file(relativePath: { eq: "step4.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step5: file(relativePath: { eq: "step5.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step6: file(relativePath: { eq: "step6.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step7: file(relativePath: { eq: "step7.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step8: file(relativePath: { eq: "step8.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step9: file(relativePath: { eq: "step9.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step10: file(relativePath: { eq: "step10.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step11: file(relativePath: { eq: "step11.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    switchRequired: file(relativePath: { eq: "switch-required.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    textAnswer: file(relativePath: { eq: "text-answer.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    singleChoice: file(relativePath: { eq: "single-choice.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    multiChoice: file(relativePath: { eq: "multi-choice.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    save: file(relativePath: { eq: "save.png" }) {
      childImageSharp {
        fixed(width: 130) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    switchInactive: file(relativePath: { eq: "switch-inactive.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    surveysIcon: file(relativePath: { eq: "surveys-logo.png" }) {
      childImageSharp {
        fixed(width: 30) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    surveyBox: file(relativePath: { eq: "survey-box.png" }) {
      childImageSharp {
        fixed(width: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    visitorResponse: file(relativePath: { eq: "visitor-response.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    selectSurvey: file(relativePath: { eq: "select-survey.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    selectType: file(relativePath: { eq: "select-type.png" }) {
      childImageSharp {
        fixed(width: 170) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const renderImage = (image, offset) => (
  <Img
    fixed={image.childImageSharp.fixed}
    style={{ marginBottom: `${offset}px` }}
    css={css`
      border-radius: 8px;
    `}
  />
)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div
      css={css`
        margin: 50px 10vw 0;
      `}
    >
      <Step
        image={data.step1}
        steps={[
          <>
            Enter the <Highlight>Sandbox section</Highlight> in Surveys and
            create your first survey.
          </>,
          <>
            You can choose between three types of questions:
            <br />
            {renderImage(data.textAnswer, -14)},{' '}
            {renderImage(data.singleChoice, -14)} and{' '}
            {renderImage(data.multiChoice, -14)}.
          </>,
          <>
            Hit the switch {renderImage(data.switchRequired, -7)}, if you want
            the question not to be required.
          </>,
        ]}
      />
      <Step
        reverse
        image={data.step2}
        steps={[
          <>
            Now set the name of survey and click {renderImage(data.save, -13)}.
          </>,
          <>
            Remember that the name will be visible for your{' '}
            <Highlight>agents</Highlight> and <Highlight>customers</Highlight>.
          </>,
        ]}
      />
      <Step
        image={data.step3}
        steps={[
          <>Great! As you can see, your survey is now inactive.</>,
          <>
            It mean that your agents <Highlight>won't be able</Highlight> to
            send that survey to the customers while chatting.
          </>,
          <>
            Click the switch {renderImage(data.switchInactive, -5)}, to start
            collecting data from your customers.
          </>,
        ]}
      />
      <Step
        reverse
        image={data.step4}
        steps={[
          <>
            Now go to the <Highlight>Chat section</Highlight>.
          </>,
          <>
            While chatting, click the small icon{' '}
            {renderImage(data.surveysIcon, -7)} in the bottom of message box.
          </>,
          <>It's a Surveys panel for agents.</>,
        ]}
      />
      <Step
        image={data.step5}
        steps={[
          <>Now you can choose the right survey.</>,
          <>
            Click on the box {renderImage(data.surveyBox, -23)}, then send it to
            the customer.
          </>,
        ]}
      />{' '}
      <Step
        reverse
        image={data.step6}
        steps={[
          <>
            The customer will now be{' '}
            <Highlight>able to complete the survey</Highlight> and send the
            response.
          </>,
        ]}
      />
      <Step
        image={data.step7}
        steps={[
          <>
            He will see this view{' '}
            <Highlight>after completing the survey</Highlight>.
          </>,
        ]}
      />
      <Step
        reverse
        image={data.step8}
        steps={[
          <>
            Agent will <Highlight>recive the message</Highlight>, after
            completing the survey.
          </>,
        ]}
      />
      <Step
        image={data.step9}
        steps={[
          <>Now you can read the customer response.</>,
          <>
            Use {renderImage(data.selectType, -10)} to choose the type of survey
            presentation.
          </>,
          <>
            Use {renderImage(data.selectSurvey, -10)} to choose the survey to
            present.
          </>,
        ]}
      />
      <Step
        reverse
        image={data.step10}
        steps={[
          <>
            Summary type lets you to see{' '}
            <Highlight>overall survey results</Highlight>.
          </>,
        ]}
      />
      <Step
        image={data.step11}
        steps={[
          <>
            Detailed type lets you to see the{' '}
            <Highlight>particular survey responses</Highlight>.
          </>,
        ]}
      />
      <h3
        css={css`
          margin: 50px 0;
          width: 100%;
          text-align: center;
        `}
      >
        <p>Do your business need any additional features in Surveys?</p>
        <p
          css={css`
            font-weight: 400;
          `}
        >
          Contact me please at{' '}
          <a
            css={css`
              color: #fecf01;
            `}
            href="mailto:dominik.slawkowski@gmail.com"
          >
            dominik.slawkowski@gmail.com
          </a>
          !
        </p>
      </h3>
    </div>
  </Layout>
)

export default IndexPage
