import styled from "styled-components";
import Uniq from "../assets/uniq.png";
export default function ImageUniq() {
  return (
    <>
      <DivUniq>
        <img src={Uniq}></img>
      </DivUniq>
    </>
  );

}
  const DivUniq = styled.div`
     display: flex;
        justify-content: center;
    img {
      width: 70%;
    }
  `;
