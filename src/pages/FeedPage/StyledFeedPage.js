import styled from "styled-components";

export const ContentsHeader = styled.div``;

export const Search = styled.div`
   position: relative;
   margin-bottom: 1rem;

   img {
      position: absolute;
      top: 1rem;
      left: 1rem;
   }

   input {
      padding-left: 3rem;
   }
`;

export const SectionButtonSearch = styled.div`
   display: flex;
   align-items: center;
   padding: 1rem;
   width: 360px;
   height: 56px;

   p {
      margin-left: 0.5rem;
   }

   img {
      margin-left: 0.1063rem;
   }
`;

export const SearchButton = styled.button`
   color: grey;
   border: 1px solid grey;
   width: 100%;
   margin-top: -0.5rem;
`;

export const Categories = styled.ul`
   display: grid;
   gap: 0.5rem;
   overflow-x: scroll;
   padding-bottom: 0.5rem;
   text-align: center;
   margin: 0.5rem 0;
   cursor: pointer;

   ::-webkit-scrollbar {
      height: 5px;
      width: 5px;
   }
   ::-webkit-scrollbar-thumb {
      background: #b8b8b8;
      border-radius: 4px;
   }
   ::-webkit-scrollbar-track {
      background: #fff;
   }

   @media screen and (max-width: 800px) {
      /* grid-template-columns: repeat(4, 5.438rem); */
      padding: 0;
      width: 100vw;

      ::-webkit-scrollbar {
         height: 0px;
         width: 0px;
      }
   }

   li {
      width: 5.438rem;
      height: 2.625rem;
      grid-row: 1/-1;
   }

   button {
      color: #000;
      background: #fff;
      border-radius: 4px;
      padding: 0.75rem 0;
      width: 100%;
   }
`;

export const Cards = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const Card = styled.figure`
   border-radius: 8px;
   border: solid 1px #b8b8b8;
   margin-bottom: 0.5rem;
   cursor: pointer;
   width: 100%;

   img {
      border-radius: 8px 8px 0 0;
      object-fit: cover;
      width: 100%;
   }

   figcaption {
      padding: 1rem;

      h4 {
         color: #e8222e;
         margin-bottom: 0.25rem;
      }

      div {
         display: flex;
         justify-content: space-between;
         color: #b8b8b8;
      }
   }
`;
