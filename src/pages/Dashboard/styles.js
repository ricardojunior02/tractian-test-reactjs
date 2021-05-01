import styled from 'styled-components';

export const Container = styled.div`
    max-width: var(--max-width); 
    margin: 0 auto;

    display: flex;
    justify-content: center;
    flex-direction: column;

    position: relative;

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
        margin: 10px 0;

      li {
        width: 100%;
        height: auto;
        border: 1px solid var(--color-blue);
        box-shadow:  var(--shadow);
        border-radius: 10px;

        margin-left: 5px;
        margin-top: 5px;

        .content {
          height: 150px;
          padding: 10px;
          
          h2 {
            text-align: start;
          }

          a {
            display: flex;
            justify-content: space-between;
            text-align: center;
            text-decoration: none;
            color: #000;
            

            p {
              margin: 0;
            }
          }
        }

          nav {
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-around;
            align-items: center;  
            border-top: 1px solid var(--color-blue);
            padding: 10px;
          
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
