import styled from "styled-components";
import { NavLink as LinkRouter } from 'react-router-dom';

import { fadeIn } from "../../styles/animation";

export const Nav = styled.nav`
  align-items: center;
  justify-content: center;
  display: flex;
  background: #fcfcfc;
  position: fixed;
  z-index: 10; 
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-top: 1px solid #e0e0e0;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  justify-content: center;
  height: 100%;
  width: 100%; 
  text-decoration: none;

  &[aria-current]{
    color: #000;

    &::after{
      ${fadeIn({time: '0.5s'})};
      content: '.';
      position: absolute;
      bottom: -5px;
      font-size: 34px;
    }
  }
`
