import styled from "styled-components";

export const NavbarContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   left: 0;
   background: #fff;
   box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
   width: 100%;
   height: 2.75rem;

   button {
      position: absolute;
      left: 0;
      padding: 0.675rem;

      &:hover {
         background: #f2f2f2;
      }
   }

   p {
      position: absolute;
      left: 50;
   }
`;
