import fotoFundo from "./assets/fundo-real.png";

import styled from "styled-components";
import ImageUniq from "./components/image";
import ButtonsF from "./components/buttons";

function App() {
  return (
    <>
      <Container>
       <ImageUniq/>
       <ButtonsF/>
      </Container>
    </>
  );
}
const Container = styled.div`
  background-image: url(${fotoFundo});
  width: 100%;
  height: 667px;
`;
export default App;
