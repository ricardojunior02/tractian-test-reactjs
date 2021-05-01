import styled from 'styled-components';

export const Container = styled.div`
  background: #0000FF;
`;

export const Content = styled.div`
  max-width: 1280px;
  height: 70px;
  margin: 0 auto;

  padding: 5px;

  background: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    background: transparent;
  }
  
`;
export const Logo = styled.img`
  width: 300px;
  background: transparent;
`;

export const Navigation = styled.div`
  ul, li, button {
    background: transparent;
  }

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;

    list-style: none;
    li {
      button {
        color: #FFF;
        text-decoration: none;
        transition: 0.6s;
        font-weight: 600;
        margin-left: 5px;
        border: none;

        font-size: 20px;
        font-weight: 600;
      }

      button:hover {
        color: var(--color-green);
        cursor: pointer;
      }

      a {
        color: #FFF;
        text-decoration: none;
        transition: 0.6s;
        font-weight: 600;
        margin-left: 5px;
        border: none;

        font-size: 20px;
        font-weight: 600;
      }

      a:hover {
        color: var(--color-green);
        cursor: pointer;
      }
    } 
  }
`;
