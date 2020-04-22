import React from "react";
import { Link } from "gatsby";
import Menu from "../components/Menu";
import styled from "styled-components";

import { rhythm, scale } from "../utils/typography";

const Contact = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  border-bottom: 1px solid;
`;

function Layout(props) {
  const { title, children } = props;

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
            marginBottom: rhythm(0.5),
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

      <Menu style={{ marginTop: "3em", marginBottom: "0 px" }} />

      <footer
        css={`
          margin: 2rem 0;
          font-weight: bold;
          font-family: "Noto Sans", sans-serif;
        `}
      >
        <Contact>
          The best way to contact me is to write me a letter to my e-mail
          address : <span style={{ color: "blue" }}>inwardlocus@gmail.com</span>
        </Contact>
        ©{new Date().getFullYear()}, Inward Locus
      </footer>
    </div>
  );
}

export default Layout;
