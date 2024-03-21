import styled, { keyframes } from "styled-components";

const AnimateText = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);

  }
`;

const AnimateYear = keyframes`
  from {
    opacity: 0;
    transform: translate3d(100px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);

  }
`;

const AnimateImage = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0px, 0);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  margin-top: 1rem;
`;

export const Heading = styled.div`
  opacity: 0;
  height: 220px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;

  animation: ${AnimateText} forwards 0.72s;
  animation-delay: 0.32s;

  transition: 0.32s ease-in-out;
`;

export const Title = styled.h2`
  font-size: 60px;

  margin: auto;
  transform: rotate(-90deg);
`;

export const Year = styled.div`
  opacity: 0;
  font-size: 80px;
  font-weight: bold;

  margin: auto;
  animation: ${AnimateYear} forwards 0.72s;
  animation-delay: 0.52s;
  transition: 0.32s ease-in-out;

  span {
    transform: rotate(90deg);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 520px;

  opacity: 0;

  object-fit: contain;
  border-radius: 12px;

  animation: ${AnimateImage} forwards 0.72s;
  transition: 0.32s ease-in-out;

  animation-delay: 0.62s;
`;
