import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #F4F4F4;
  }

  :root {
    --color-white: #FFFFFF;
    --color-blue: #1972F5;
    --color-green: #22C55E;
    --color-red: #FF0000;
    --max-width: 1280px;
    --shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);
  }

  a, p, button, input, span, strong, h1, h2, h3 {
    font-family: 'Poppins', sans-serif;
  }

  a, p, span {
    font-weight: 400;
  }

  h1, h2, h3, strong {
    font-weight: 600;
  }

  h1 {
    font-size: 40px;
    margin: 0;
  }

  h2 {
    font-size: 30px;
    margin: 0;
  }

  select {
    background: var(--color-white);
  }

  div.ant-popover.ant-popconfirm.ant-popover-placement-top, div.ant-popover.ant-popconfirm.ant-popover-placement-leftBottom {
      div.ant-popover-arrow {
        background: #F4F4F4;
        border-bottom: 1px solid var(--color-blue);
        border-right: 1px solid var(--color-blue);
      }

      div.ant-popover-inner {
        background: #F4F4F4;
        border: 1px solid var(--color-blue);
        border-radius: 10px;
      }

      button {
        border-radius: 10px;
        border: none;
      }

      button.ant-btn.ant-btn-sm {
        background: var(--color-green);

        span {
          font-weight: 600;
          color: var(--color-white);
        }
      }

      button.ant-btn.ant-btn-primary.ant-btn-sm {
        background: var(--color-red);
        span {
          font-weight: 600;
        }
      }
    }

    div.ant-popover.ant-popconfirm.ant-popover-placement-leftBottom {
      div.ant-popover-arrow {
        background: #F4F4F4;
        border-top: 1px solid var(--color-blue);
        border-left: 0px;
        border-bottom:  0px;
        border-right: 1px solid var(--color-blue);
      }
    }

    

  

  div.ant-message-notice-content {
    border-radius: 10px;
    border: 1px solid var(--color-blue);
    background: #F4F4F4;
  }
`;