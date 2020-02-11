import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Social extends React.Component {
  render() {
    const { link, image, alt, offset } = this.props
    return (
      <a
        href={link}
        title={alt}
        style={{
          width: `30px`,
          height: `30px`,
          boxShadow: `none`,
          display: `inline-block`,
          marginBottom: `-10px`,
        }}
      >
        <img
          style={{
            height: `auto`,
            padding: `${offset}`,
          }}
          alt={alt}
          src={image}
        />
      </a>
    )
  }
}

export default Social
