import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";
import sitelogo from "../../content/assets/inward-locus.png";

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;

    // let header;

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(32),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {/* <img src={sitelogo} alt="inward locus logo" className="mysitelogo" /> */}
          <h1
            className="mysitetitle"
            style={{
              ...scale(1.5),
              marginBottom: rhythm(0),
              marginTop: 0,
              // borderBottom: `1mm ridge #fd3516`,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Inward Locus
          {` `}
        </footer>
      </div>
    );
  }
}

export default Layout;
