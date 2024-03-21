import Header from "./components/Header";
import Content from "./components/Content";

import Left from "./components/Left";
import Right from "./components/Right";

import * as Styled from "./css";

export default function App() {
  return (
    <>
      <Styled.GlobalStyle />
      <Styled.Main>
        <Left />
        <Right />
        <Styled.Container>
          <Header />
          <Content />
        </Styled.Container>
      </Styled.Main>
    </>
  );
}
