import { ShoppingCart } from "phosphor-react";
import * as Styled from "./styles";

export default function Header() {
  return (
    <Styled.Container className="z-index">
      <Styled.Title>Fashion</Styled.Title>
      <Styled.Navigation>
        <Styled.Menu>
          <Styled.List>
            <a href="#">Home</a>
          </Styled.List>
          <Styled.List>
            <a href="#">Woman</a>
          </Styled.List>
          <Styled.List>
            <a href="#">Man</a>
          </Styled.List>
          <Styled.List>
            <a href="#">Explore</a>
          </Styled.List>
        </Styled.Menu>
      </Styled.Navigation>
      <Styled.ShoppingCart>
        <ShoppingCart size={24} color="#fff" />
      </Styled.ShoppingCart>
    </Styled.Container>
  );
}
