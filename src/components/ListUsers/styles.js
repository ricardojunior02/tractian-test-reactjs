import styled from 'styled-components';

export const Container = styled.ul`
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

    .infos {
      padding: 10px;
    }

    nav.buttons {
      display: flex;
      justify-content: space-around;
      align-items: center;
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
`;
