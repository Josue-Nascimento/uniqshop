import styled from "styled-components";
import Wpp from '../assets/whatsapp.png' 
import Email from '../assets/email.png' 

export default function ButtonsF() {
  return (
    <ButtonsDiv>
      <a href="https://seusite.com" target="_blank" rel="noopener noreferrer">
        <button>Site</button>
      </a>
      <a
        href="https://wa.me/+573165846155?text=¡Hola,%20equipo%20de%20UniqShop!%0ATengo%20una%20duda%20y%20me%20gustaría%20obtener%20más%20información.%20¿Podrían%20ayudarme?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button><img src={Wpp}/>WhatsApp</button>
      </a>
      <a href="contactouniqshop@gmail.com">
        <button><img src={Email}/>E-mail</button>
      </a>
    </ButtonsDiv>
  );
}

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: #FF7D2D;
    font-size: 20px;
    color: white;
    margin-top: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 30px;
        margin-right: 10px;
    }
  }
`;
