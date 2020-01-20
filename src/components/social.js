import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Social extends React.Component {
  render() {
    const { link, image, alt } = this.props
    return (
      <a
        href={link}
        title={alt}
        style={{
          width: `30px`,
          height: `30px`,
          boxShadow: 'none',
        }}
      >
        <img
          style={{
            height: `auto`,
            width: `30px`,
            marginBottom: `-10px`,
          }}
          alt={alt}
          src={image}
        />
      </a>
    )
  }
}

export default Social
