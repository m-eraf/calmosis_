import React from "react";
import styled from "styled-components";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(70, 111, 68, 0.75);
  backdrop-filter: blur(10px);
  backdrop-filter: blur(20px); 
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 60vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 50%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }

`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
       Home
      </a>
      <a href="/shop">
        
        Shop
      </a>
      <a href="/about">
        
        About Us
      </a>
      <a  href="/lagal/faq">FAQ</a>
      <a href="/contact">
        
Contact      </a>
    </StyledMenu>
  );
};

export default Menu;
