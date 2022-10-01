import React from "react";
import { HomeContainer } from "./StyledStartPage";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

export function StartPage() {
   const navigate = useNavigate();

   setTimeout(() => {
      goToLoginPage(navigate);
   }, 2500);

   return (
      <HomeContainer>
         <button
            onClick={() => {
               goToLoginPage(navigate);
            }}
         />
      </HomeContainer>
   );
}
