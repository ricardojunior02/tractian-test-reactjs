import styled from 'styled-components';

export const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg:hover {
      cursor: pointer;
    }
  }

    
  @media (max-width: 581px){
    nav {
      h1 {
        font-size: 30px;
      }
    }
  }

  @media (max-width: 375px){
    nav {
      h1 {
         font-size: 23px;
      }
    }
  }


  @media (max-width: 510px){
    nav {
      h1 {
         font-size: 25px;
      }
    }
  }
`;
export const Content = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 800px){
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
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

  h2 {
    text-align: center;
  }

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

  @media (max-width: 800px){
    width: 100%;
    height: 60%;
    margin-top: 15px;
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

  h2 {
    text-align: center;
  }

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

  @media (max-width: 800px){
    width: 100%;
    height: 60%;
  }
`;

