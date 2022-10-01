import styled from "styled-components";
import { Container, Contents } from "../../Styled";

export const Container2 = styled(Container)`
   place-items: center;
`;

export const Contents2 = styled(Contents)`
   text-align: center;

   div {
      display: grid;
      gap: 1rem;
      margin-bottom: 2rem;

      p {
         color: #b8b8b8;

         &:nth-child(1) {
            font-size: 5rem;
            font-weight: bold;
         }

         &:nth-child(2) {
            font-size: 2rem;
         }

         &:nth-child(3) {
            font-size: 1rem;
         }
      }
   }
`;
