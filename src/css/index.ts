import styled, { createGlobalStyle } from "styled-components";

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
    /* max-width: 100%; */
    /* object-fit: cover; */
  }

  .z-index {
    z-index: 10;
    position: relative;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  position: relative;

  /* overflow: hidden; */
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: 10;
  padding: 1rem;
`;

export const Wrap = styled.div`
  /* position: absolute;
  width: 100%;
  height: 100%;

  z-index: 10;
  padding: 1rem; */
`;
