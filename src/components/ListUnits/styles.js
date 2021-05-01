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
    padding: 10px;

    p {
      margin: 0;
    }

    a {
      display: flex;
      justify-content: space-between;
      text-decoration: none;
      color: #000;
      margin-top: 15px;
    }
  }
`;
