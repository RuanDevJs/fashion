import Image from "../../assets/ImageHome.jpg";
import * as Styled from "./styles";

export default function Content() {
  return (
    <Styled.Container>
      <Styled.Heading>
        <Styled.Title>
          Fashion Online <br /> Store
        </Styled.Title>
      </Styled.Heading>
      <Styled.Image src={Image} alt="Fashion - Image" />
      <Styled.Year>
        <span>2020</span>
      </Styled.Year>
    </Styled.Container>
  );
}
