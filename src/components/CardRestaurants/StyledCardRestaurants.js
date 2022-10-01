import styled from "styled-components";

export const Card = styled.figure`
   border-radius: 8px;
   border: solid 1px #b8b8b8;
   margin-bottom: 0.5rem;
   cursor: pointer;

   img {
      object-fit: cover;
      border-radius: 8px 8px 0 0;
      width: 100vw;
   }

   figcaption {
      padding: 1rem;

      h4 {
         color: #e8222e;
         margin-bottom: 0.25rem;
         font-weight: normal;
      }

      div {
         display: flex;
         justify-content: space-between;
         color: #b8b8b8;
      }
   }
`;
