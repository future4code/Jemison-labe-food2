import React from "react";
import voltar from "../../assets/img/navbar/back.svg";
import { useNavigate } from "react-router-dom";
import { goToBackPage } from "../../routes/coordinator";
import { NavbarContainer } from "./StyledNavbar";

export const Navbar = (props) => {
   const navigate = useNavigate();

   return (
      <NavbarContainer>
         <button
            onClick={() => {
               goToBackPage(navigate);
            }}>
            <img src={voltar} width="23.04" height="24" />
         </button>

         <p>{props.text}</p>
      </NavbarContainer>
   );
};
