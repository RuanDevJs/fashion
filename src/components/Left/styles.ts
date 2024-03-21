import styled, { keyframes } from "styled-components";

const AnimationBackground = keyframes`
  from {
    width: 1%;
    background-color: white;
  }
  to {
    width: 100%;
    background-color: rgba(10, 10, 67, 1);
  }
`;

export const Container = styled.div`
  width: 53vw;

  height: 100%;
`;

export const Background = styled.div`
  background-color: rgba(10, 10, 67, 1);
  width: 100%;

  height: 100%;
  animation: ${AnimationBackground} 1s forwards;
`;
