import styled from 'styled-components';

export const Container = styled.div`
  max-width: var(--max-width); 
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-direction: column;

  animation: loadingDashboard 0.6s ease-in-out;

  @keyframes loadingDashboard {
    from {
      opacity: 0.5;
    }
    to {
       opacity: 1;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    list-style: none;
    padding: 10px 5px;

    li {
      width: 100%;
      height: auto;
      border: 1px solid var(--color-blue);
      box-shadow:  var(--shadow);
      border-radius: 10px;

      .content {
        padding: 10px;

        a {
          display: flex;
          justify-content: space-between;
          text-decoration: none;
          color: #000;
          margin-top: 15px;
        }
      }

      nav.buttons {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        border-top: 1px solid var(--color-blue);

              
        .att {
          width: 40%;
          height: 25px;
          background: var(--color-green);
          text-decoration: none;
          color: var(--color-white);
          font-weight: 600;

          text-align: center;
          border-radius: 10px;

          transition: 0.5s;      
        }
            
        .att:hover {
          opacity: 0.6;
        }

        button {
          width: 40%;
          height: 25px;
          background: var(--color-red);
          color: var(--color-white);
          font-weight: 600;
          text-align: center;
          border-radius: 10px;

          border: none;
          transition: 0.5s;
        }

        button:hover {
          opacity: 0.6;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 981px){
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (max-width: 737px){
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 500px){
    ul {
      grid-template-columns: 1fr;
    }
  }
`;


export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  
  form {
    input {
      width: 250px;
      height: 30px;
      border: 1px solid var(--color-blue);
      box-shadow: var(--shadow);
      border-radius: 10px;
      padding: 15px;

      font-size: 12px;
      font-weight: 400;

    }

    &::placeholder {
      padding: 5px;
    }

    button {
      width: 55px;
      height: 30px;
      background: var(--color-green);
      border-radius: 10px;
      border: none;
      color: var(--color-white);

      margin-left: 15px;
    }

    button:hover {
      opacity: 0.5;
      cursor: pointer;
      color: #000;
    }

  }
`;
