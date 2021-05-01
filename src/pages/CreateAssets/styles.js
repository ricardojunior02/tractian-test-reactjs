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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .create-user {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 40px;
    background: var(--color-blue);
    color: var(--color-white);
    border: 0;
    border-radius: 10px;
    font-weight: 600;
  }

  .create-user:hover {
    opacity: 0.6;
    color: #000;
    cursor: pointer;
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

    span {
      color: var(--color-red);
    }

    select {
      width: 80%;
      height: 40px;

      border: 1px solid var(--color-blue);
      border-radius: 10px;
      padding: 10px;
      margin-top: 10px;

      option {
        margin-top: 5px;
      }
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
