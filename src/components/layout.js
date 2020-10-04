import React, { useState } from 'react';
import { Link } from "gatsby";
import Menu from "../components/Menu";
import styled from "styled-components";
import { bool, func } from 'prop-types';

import { rhythm, scale } from "../utils/typography";


const Contact = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  border-bottom: 1px solid;
`;
export const StyledBurger = styled.button`
position: absolute;
top: 13%;
right: 0rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
  outline: none;
}

div {
  width: 2rem;
  height: 0.25rem;
  background: black;
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  :nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
  }

  :nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
  }
}
`;
const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};


function Layout(props) {
  const { title, children } = props;

  const [open, setOpen] = useState(false);

  // let header;

  return (

    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(100),
        padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,

      }}
    >
      <header>
        <h1
          className="mysitetitle"
          style={{
            marginBottom: rhythm(0.5),
            marginTop: 0,
            fontSize: 18,
            marginLeft: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `black`,

            }}
            to={`/`}
          >
            {title}
          </Link>
          <div className='bur'>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>

        </h1>


      </header>
      <main style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>{children}</main>

      {/* <Menu style={{ marginTop: "3em", marginBottom: "0 px" }} /> */}

      <footer
        css={`
          margin: 0rem 0;
          font-weight: bold;
          font-family: 'Courier Prime', monospace;
        `}
      >
        <Contact style={{ fontFamily: 'Courier Prime' }}>
          The best way to contact me is to write me a letter to my e-mail
          address : <span style={{ color: "blue" }}>inwardlocus@gmail.com</span>
        </Contact>
        ©{new Date().getFullYear()}, Inward Locus
      </footer>
    </div>
  );
}

export default Layout;
