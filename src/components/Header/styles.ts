import styled, { keyframes } from "styled-components";

const FromUpToDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
`;

export const Container = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
`;

export const Title = styled.h1`
  opacity: 0;

  font-size: 2rem;
  color: #fff !important;

  font-weight: bold;
  text-decoration: none;

  letter-spacing: 2px;
  cursor: pointer;

  animation: ${FromUpToDown} 0.72s forwards;
  animation-delay: 0.32s;
`;

export const Navigation = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const List = styled.li`
  opacity: 0;
  a {
    padding: 1rem;
    display: block;

    font-size: 1rem;
    color: #fff;

    font-weight: bold;
    text-decoration: none;
  }

  &:nth-child(1) {
    animation: ${FromUpToDown} 0.72s forwards;
    animation-delay: 0.42s;
  }

  &:nth-child(2) {
    animation: ${FromUpToDown} 0.72s forwards;
    animation-delay: 0.52s;
  }

  &:nth-child(3) {
    animation: ${FromUpToDown} 0.72s forwards;
    animation-delay: 0.62s;
  }

  &:nth-child(4) {
    animation: ${FromUpToDown} 0.72s forwards;
    animation-delay: 0.72s;
  }
`;

export const ShoppingCart = styled.div`
  opacity: 0;

  padding: 1rem;
  display: flex;

  justify-content: center;
  align-items: center;

  cursor: pointer;

  animation: ${FromUpToDown} 0.72s forwards;
  animation-delay: 0.82s;
`;
