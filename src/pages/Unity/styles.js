import styled from 'styled-components';

export const Container = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;

    animation: loadingUnity 0.9s ease-in-out;

    @keyframes loadingUnity {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0%);
            opacity: 1;
        }
    }  
`;

export const Content = styled.div`
    width: 100%;
    padding: 5px;

    h2 {
        text-align: center;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 5px;
        list-style: none;
        margin: 10px 0;
    }
`;

export const Main = styled.main`
    border: 1px solid var(--color-blue);
    border-radius: 10px;
    box-shadow:  var(--shadow);
    padding: 10px;

    h2 {
        text-align: center;
    }

    .total-assets {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .total-assets .bol {
        width: 100px;
        height: 100px;

        border: 5px solid var(--color-green);
        border-radius: 50%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .total-assets .status {
        display: flex;
        flex-direction: column;

        span {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            strong {
                margin-left: 5px;
            }
        }
    }
`;


export const Graphic = styled.div`
    margin-top: 15px;
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        margin: 0;
    }

    svg:hover {
        cursor: pointer;
    }

    button {
     width: 70px;
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
