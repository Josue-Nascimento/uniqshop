import fotoFundo from "./assets/foto-fundo2.png";

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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export default App;
