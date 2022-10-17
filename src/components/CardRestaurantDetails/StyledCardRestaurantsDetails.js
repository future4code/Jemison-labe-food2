import styled from "styled-components";

export const MainCard = styled.figure`
   border-radius: 8px;
   margin-bottom: 1rem;

   img {
      object-fit: cover;
      border-radius: 8px 8px 0 0;
      margin-bottom: 0.75rem;
      width: 100vw;
   }

   figcaption {
      margin-bottom: 0.5rem;

      h4 {
         color: #e8222e;
         margin-bottom: 0.25rem;
         font-weight: normal;
      }

      ul {
         display: grid;
         gap: 0.5rem;
         color: #b8b8b8;

         li {
            display: flex;
            gap: 2rem;
         }
      }
   }
`;

export const SecondaryCard = styled.figure`
   display: flex;
   align-items: center;
   border-radius: 8px;
   border: solid 1px #b8b8b8;
   height: 7rem;
   width: 100%;
   position: relative;
   margin-bottom: 0.5rem;

   img {
      width: 6rem;
      height: 100%;
      object-fit: cover;
      border-radius: 8px 0 0 8px;
   }

   figcaption {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 1rem;
      border-radius: 0 8px 8px 0;
      height: 100%;
      width: 100%;

      p {
         &:nth-of-type(1) {
            letter-spacing: -0.39px;
            color: #e8222e;
            font-size: 1rem;
         }

         &:nth-of-type(2) {
            font-size: 0.75rem;
            letter-spacing: -0.29px;
            color: #b8b8b8;
         }

         &:nth-of-type(3) {
            letter-spacing: -0.39px;
            color: #000;
            font-size: 1rem;
         }

         &.null {
            display: none;
         }

         &.view {
            background: #fff;
            color: #e8222e;
            border-radius: 0 8px;
            border: solid 1px currentColor;
            width: max-content;
            padding: 0.438rem 0.75rem;
            position: absolute;
            top: -1px;
            right: -1px;
         }
      }

      button {
         position: absolute;
         right: -1px;
         bottom: -1px;
         color: #000;
         padding: 0.5rem 1.281rem 0.563rem 1.344rem;
         border-radius: 8px 0;
         border: solid 1px currentColor;
         font-size: 0.75rem;
         width: 5.625rem;

         &:hover {
            background: #f2f2f2;
         }

         &.btn-remove {
            color: #e8222e;
         }
      }
   }
`;

export const Modal = styled.div`
   background: red;
`;

export const Box = styled.form`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 20.5rem;
   background: #fff;
   padding: 2.688rem 1rem 1.313rem 1rem;

   h2 {
      font-size: 1rem;
      font-weight: normal;
      text-align: center;
      margin-bottom: 1.188rem;
   }

   select {
      width: 100%;
      padding: 1.188rem 1rem;
      border-radius: 4px;
      border: solid 1px #b8b8b8;
      margin-bottom: 1.75rem;
   }

   button {
      text-align: right;
      text-transform: uppercase;
      color: #4f81a8;
      width: 100%;
   }
`;
