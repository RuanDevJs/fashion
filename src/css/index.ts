import styled, { createGlobalStyle, keyframes } from "styled-components";

const Left = keyframes`
  from {
    opacity: 0.72;
    width: 12vw;
  }
  to {
    opacity: 1;
    width: 50vw;
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Tinos', serif;
    font-size: 1rem;
    color: #fff;
  }

  h1, h2, p, li, a, span, img {
    display: block;
    max-width: 100%;
  }

  img{
    max-width: 100%;
    object-fit: cover;
  }

  .z-index {
    z-index: 10;
    position: relative;
  }
`;

export const Main = styled.main`
  padding: 1rem;
  height: 100vh;

  &::before {
    content: "";
    display: block;

    /* width: 50vw; */
    height: 100vh;

    background-color: rgba(10, 10, 67, 1);

    position: absolute;
    top: 0;
    left: 0;

    animation: ${Left} forwards 1s;
  }

  &::after {
    content: "";
    display: block;

    width: 50vw;
    height: 100%;

    background-color: rgba(251, 194, 195, 1);

    position: absolute;
    top: 0;
    left: 50vw;

    animation: ${Left} forwards 1s;
  }
`;
