import styled from "styled-components";

export const UserInfo = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   padding: 1rem;
   width: 100%;

   div p {
      &:nth-child(1),
      &:nth-child(2) {
         margin-bottom: 0.5rem;
      }
   }
`;

export const EditIcon = styled.button`
   img {
      min-width: 1.5rem;
      width: 1.5rem;
   }
`;

export const Address = styled(UserInfo)`
   background: #eeeeee;

   div p {
      &:nth-child(1) {
         color: #b8b8b8;
      }
      &:nth-child(2) {
         margin-bottom: 0;
      }
   }

   @media screen and (max-width: 420px) {
      position: absolute;
      left: 0;
      width: 100vw;
   }
`;

export const OrderHistory = styled.div`
   padding: 1rem 0;

   h3 {
      font-size: 1rem;
      font-weight: normal;
      margin-bottom: 0.5rem;
   }
`;

export const OrderItem = styled.div`
   border-radius: 8px;
   border: solid 1px #b8b8b8;
   margin-bottom: 0.5rem;
   padding: 1rem;
   width: 100%;

   p {
      &:nth-child(1) {
         color: #e8222e;
         margin-bottom: 0.563rem;
      }

      &:nth-child(2) {
         font-size: 0.75rem;
         margin-bottom: 0.438rem;
      }

      &:nth-child(3) {
         font-weight: bold;
      }
   }
`;

export const Menu = styled.ul`
   display: flex;
   align-items: center;
   justify-content: space-around;
   background: #fff;
   box-shadow: 0 -0.5px 0 0 rgba(0, 0, 0, 0.25);

   position: fixed;
   bottom: 0;
   width: calc(100% + 32px);
   z-index: 9999;

   button {
      padding: 0.688rem 2.875rem 0.688rem 2.938rem;

      &:hover {
         background: #f2f2f2;
      }
   }
`;
