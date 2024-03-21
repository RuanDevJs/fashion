import styled from "styled-components";

export const Container = styled.header`
  /* margin-bottom: 1rem; */
  display: flex;

  justify-content: space-between;
  align-items: center;

  /* position: absolute;
  top: 0;
  width: 100%;
  padding: 1rem 2rem; */
`;

export const Navigation = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const List = styled.li`
  a {
    padding: 1rem;
    display: block;

    font-size: 1rem;
    color: #fff;

    font-weight: bold;
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #fff;

  font-weight: bold;
  text-decoration: none;

  letter-spacing: 2px;
  cursor: pointer;
`;

export const ShoppingCart = styled.div`
  padding: 1rem;
  display: flex;

  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
