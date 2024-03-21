import styled, { keyframes } from "styled-components";

const AnimationBackground = keyframes`
  from {
    width: 1%;
    background-color: white;
  }
  to {
    width: 100%;
    background-color: rgba(251, 194, 195, 1);
  }
`;

export const Container = styled.div`
  background-color: #fff;
  width: 47vw;
`;

export const Background = styled.div`
  background-color: rgba(251, 194, 195, 1);
  width: 100%;

  height: 100vh;
  animation: ${AnimationBackground} 1s forwards;
`;
