import styled from "styled-components";
import {
   MainCard,
   SecondaryCard,
} from "../../components/CardRestaurantDetails/StyledCardRestaurantsDetails";
import { Address } from "../ProfilePage/StyledProfilePage";

export const Address2 = styled(Address)``;

export const MainCard2 = styled(MainCard)`
   margin-top: 1rem;

   figcaption {
      h4 {
         margin-bottom: 0.5rem;
      }
   }

   @media screen and (max-width: 420px) {
      margin-top: 6rem;
   }
`;

export const SecondaryCard2 = styled(SecondaryCard)`
   &:last-of-type {
      margin-bottom: 0.95rem;
   }
`;

export const Shipping = styled.p`
   text-align: right;
   margin-bottom: 0.813rem;
`;

export const Subtotal = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 1.5rem;
   p {
      text-transform: uppercase;
      &:last-child {
         color: #e8222e;
         font-size: 1.125rem;
         font-weight: bold;
      }
   }
`;

export const Form = styled.form`
   div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      &:first-of-type {
         margin-bottom: 0.5rem;
      }

      &:last-of-type {
         margin-bottom: 0.3rem;
      }

      input {
         width: 1.25rem;
         height: 1.25rem;
      }
   }
`;
