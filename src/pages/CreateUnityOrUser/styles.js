import styled from 'styled-components';

export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
   nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 40px;
        }

        svg:hover {
            cursor: pointer;
        }
    } 
`;
export const Content = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CreateUserForm = styled.div`
  width: 45%;
  height: 60%;

  border: 1px solid var(--color-blue);
  border-radius: 10px;
  box-shadow: var(--shadow);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 80%;
      height: 40px;

      border: 1px solid var(--color-blue);
      border-radius: 10px;
      padding: 10px;
    }
    input + input {
      margin-top: 10px;
    }

    p {
      color: var(--color-red);
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

      margin-top: 10px;
      transition: 0.6s;
    }

    button:hover {
      opacity: 0.6;
      color: var(--color-blue);
      cursor: pointer;
    }
  }

  
`;

export const CreateUnityForm = styled.div`
  width: 45%;
  height: 60%;

  border: 1px solid var(--color-blue);
  border-radius: 10px;
  box-shadow: var(--shadow);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 80%;
      height: 40px;

      border: 1px solid var(--color-blue);
      border-radius: 10px;
      padding: 10px;
    }

    p {
      color: var(--color-red);
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

      margin-top: 10px;

      transition: 0.6s;
    }

    button:hover {
      opacity: 0.6;
      color: var(--color-blue);
      cursor: pointer;
    }
  }
`;

