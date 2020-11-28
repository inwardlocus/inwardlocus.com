import React from 'react';
import styled from "styled-components";
import { DEVICES } from "../constants";
import { bool } from 'prop-types';


const Wrapper = styled.div`
  margin: 1rem 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${DEVICES.large} {
    margin: 1rem auto;
    max-width: 75%;
  }
`

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  text-align: left;
  padding: 3rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom:0;
  // width: 100%;
  
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

      
    
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: left;
    }

    &:hover {
      color: #2c99d1;
    }
  }
`;
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        Home
      </a>
      <a href="/allposts">
        Posts
        </a>
      <a href="/tags">
        Tags
        </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;