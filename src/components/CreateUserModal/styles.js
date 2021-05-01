import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  height: 100vh;
  background: #21212190;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  
  position: fixed;
  top: 0;	
  bottom: 0;	
  right: 0;	
  left: 0;
`;

export const Container = styled.div`
  width: 500px;
  height: 300px;
  box-shadow: var(--shadow);
  border-radius: 10px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  background: var(--color-white);

  padding: 20px 0;
  border-radius: 10px;

  h2 {
    text-align: center;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 10px;

    input {
      width: 80%;
      height: 40px;
      border: 1px solid var(--color-blue);
      border-radius: 10px;
      padding: 10px;
    }

    p {
      color: var(--color-red);
      margin-top: 10px;
      text-align: left;
    }

    button {
      width: 80%;
      height: 40px;

      border: none;
      background: var(--color-green);
      border-radius: 10px;
      color: var(--color-white);

      font-size: 15px;
      font-weight: 600;
      letter-spacing: 2px;

      transition: 0.6s;
    }

    button:hover {
      opacity: 0.6;
      color: var(--color-blue);
      cursor: pointer;
    }
  }

`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  z-index: 2;
`;
