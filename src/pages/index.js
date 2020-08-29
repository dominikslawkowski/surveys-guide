import React from 'react'
import { css } from '@emotion/core'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Step from '../components/step'

export const query = graphql`
  query {
    step1: file(relativePath: { eq: "1.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step2: file(relativePath: { eq: "2.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step3: file(relativePath: { eq: "3.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step4: file(relativePath: { eq: "4.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step5: file(relativePath: { eq: "5.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step6: file(relativePath: { eq: "6.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step7: file(relativePath: { eq: "7.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step8: file(relativePath: { eq: "8.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step9: file(relativePath: { eq: "9.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    step10: file(relativePath: { eq: "10.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

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
          'Enter the Sandbox section in Surveys and create your first survey.',
          'You can choose between three types of questions (text answer, single choice and multi choice).',
          'Hit the switch button if you want the question not to be required.',
        ]}
      />
      <Step
        reverse
        image={data.step2}
        steps={[
          'Now set the name of your survey.',
          'Remember that the name will be visible for your agents and customers.',
        ]}
      />
      <Step
        image={data.step3}
        steps={[
          'Sed ut perspiciatis unde omnis iste natus error sit.',
          'Magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Nor again is there anyone who loves or pursues or desires.',
        ]}
      />
      <Step
        reverse
        image={data.step4}
        steps={[
          'Sed ut perspiciatis unde omnis iste natus error sit.',
          'Magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Nor again is there anyone who loves or pursues or desires.',
        ]}
      />
      <Step
        image={data.step5}
        steps={[
          'Sed ut perspiciatis unde omnis iste natus error sit.',
          'Magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Nor again is there anyone who loves or pursues or desires.',
        ]}
      />
      <Step
        reverse
        image={data.step6}
        steps={[
          'Sed ut perspiciatis unde omnis iste natus error sit.',
          'Magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Nor again is there anyone who loves or pursues or desires.',
        ]}
      />
      <Step
        image={data.step7}
        steps={[
          'Sed ut perspiciatis unde omnis iste natus error sit.',
          'Magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Nor again is there anyone who loves or pursues or desires.',
        ]}
      />
      <Step
        reverse
        image={data.step8}
        steps={[
          'Sed ut perspiciatis unde omnis iste natus error sit.',
          'Magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Nor again is there anyone who loves or pursues or desires.',
        ]}
      />
      <Step
        image={data.step9}
        steps={[
          'Sed ut perspiciatis unde omnis iste natus error sit.',
          'Magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Nor again is there anyone who loves or pursues or desires.',
        ]}
      />
      <Step
        reverse
        image={data.step10}
        steps={[
          'Sed ut perspiciatis unde omnis iste natus error sit.',
          'Magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Nor again is there anyone who loves or pursues or desires.',
        ]}
      />
    </div>
  </Layout>
)

export default IndexPage
