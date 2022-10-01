import styled from "styled-components";
import logoBranca from "../../assets/img/startPage/logo-branca.svg";
import logoBrancaFechada from "../../assets/img/startPage/logo-branca-fechada.svg";

export const HomeContainer = styled.div`
   display: grid;
   place-items: center;
   background: #e8222e;
   width: 100vw;
   height: 100vh;

   button {
      border: none;
      background: none;
      padding: 20px;

      &::after {
         display: block;
         content: "";
         background: url(${logoBranca});
         background-size: contain;
         width: 7.875rem;
         height: 4.063rem;
         animation: zoomOut 1.3s linear;

         @keyframes zoomOut {
            0% {
               background: url(${logoBranca});
               transform: scale(1.7);
            }
            50% {
               background: url(${logoBranca});
               transform: scale(1);
            }
            75% {
               background: url(${logoBranca});
               transform: scale(1);
            }

            95% {
               transform: scale(1.1);
            }

            100% {
               background: url(${logoBrancaFechada});
               transform: scale(1);
            }
         }
      }
   }
`;
