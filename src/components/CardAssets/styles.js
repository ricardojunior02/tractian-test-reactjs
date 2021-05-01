import styled from 'styled-components';

export const Container = styled.li`
  width: 100%;
  height: auto;

  border: 1px solid var(--color-blue);
  box-shadow: var(--shadow);
  border-radius: 10px;
`;

export const Image = styled.div`
  width: 100%;
  height: 300px;

  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const InfoData = styled.main`
  display: flex;
  flex-direction: column;

  padding: 0 5px;

  .inAlert {
    color: #FFA500;
  }
  .inOperation {
    color: #22C55E;
  }
  .inDowntime {
    color: #FF0000;
  }
`;

export const Actions = styled.main`
  border-top: 1px solid var(--color-blue);

  display: flex;
  justify-content: space-around;

  padding: 5px;

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
  
`;

