
import PropTypes from "prop-types"
import React from "react"
import Link from 'next/link'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          href="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          For booking or to rent space contact ps37durham@gmail.com or drop us a dm on the insta @ps37durham
        </Link>
      </h4>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
