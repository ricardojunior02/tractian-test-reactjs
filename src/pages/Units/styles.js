import styled from 'styled-components';

export const Container = styled.div`
    max-width: var(--max-width);
    margin: 0 auto;

    animation: loadingUnits 0.9s ease-in-out;

    z-index: 1;

    @keyframes loadingUnits {
        from {
            transform: translateX(+100%);
            opacity: 0;
            }
        to {
            transform: translateY(0%);
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
`;

export const Main = styled.main`
    border: 1px solid var(--color-blue);
    border-radius: 10px;
    box-shadow:  var(--shadow);;
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

    @media (max-width: 581px){
        h1 {
            font-size: 30px;
        }
    }

    @media (max-width: 375px){
        h1 {
            font-size: 23px;
        }
    }


    @media (max-width: 510px){
        h1 {
            font-size: 25px;
        }
    }
`;

