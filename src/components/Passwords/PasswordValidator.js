import React from "react";
import { Highlight } from "../RegistrationPages/StyledRegistrationPages";

export const PasswordValidator = ({
   validity: { minChar, number, specialChar, samePasswords },
}) => {
   return (
      <div>
         <p>A senha deve conter:</p>
         <ul>
            <PasswordValidatorItem
               isValid={minChar}
               text="- Pelo menos 6 caracteres"
            />
            <PasswordValidatorItem
               isValid={number}
               text="- Pelo menos 1 número"
            />
            <PasswordValidatorItem
               isValid={specialChar}
               text="- Pelo menos 1 caractere especial"
            />
         </ul>
      </div>
   );
};

export const PasswordValidatorItem = ({ isValid, text }) => {
   const logicaMalucaIndicador = isValid
      ? "deu-certo"
      : isValid !== null
      ? "deu-ruim"
      : "";
   return <Highlight className={logicaMalucaIndicador}>{text}</Highlight>;
};
