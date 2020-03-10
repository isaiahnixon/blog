/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import Social from "../components/social"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter,
            github,
            drupal,
            drupalanswers,
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong>.<br />
        <span
          style={{
            whiteSpace: `nowrap`,
          }}
        >
        <Social
          link={`https://twitter.com/${social.twitter}`}
          image='https://help.twitter.com/content/dam/help-twitter/brand/logo.png'
          alt='Twitter'
        />
        <Social
          link={`https://github.com/${social.github}`}
          image='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
          alt='GitHub'
        />
        <Social
          link={`https://drupal.stackexchange.com/users/${social.drupalanswers}`}
          image='https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/se/se-icon.svg?v=62f619494ccd'
          alt='Drupal Answers'
          offset='1px'
        />
        <Social
          link={`https://www.drupal.org/u/${social.drupal}`}
          image='https://www.drupal.org/files/druplicon-small.png'
          offset='5px'
          alt='Drupal.org'
        />
        <Social
          link={`https://www.linkedin.com/in/${social.linkedin}`}
          image='https://1000logos.net/wp-content/uploads/2017/03/LinkedIn-Logo-500x500.png'
          offset='4px'
          alt='LinkedIn'
        />
        </span>
      </p>
    </div>
  )
}

export default Bio
