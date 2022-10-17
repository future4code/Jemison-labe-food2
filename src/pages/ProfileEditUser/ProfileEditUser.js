import React, { useState } from "react";
import { Container } from "../../Styled";
import {
   RegistrationContainer,
   Form,
   Label,
   Input,
   Button,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Navbar } from "../../components/Navbar/Navbar";
import { CircularProgress } from "@mui/material";
import { putUpdateProfile } from "../../services/User";
import { UseForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export function ProfileEditUser() {
   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const [form, handleInputChange, clear] = UseForm({
      name: "",
      email: "",
      cpf: "",
   });
   const onSubmitForm = (e) => {
      e.preventDefault();
      putUpdateProfile(form, clear, navigate, setIsLoading);
   };

   return (
      <Container>
         <Navbar text="Editar" />
         <RegistrationContainer>
            <Form onSubmit={onSubmitForm}>
               <div>
                  <Label>Nome*</Label>
                  <Input
                     type="text"
                     name="name"
                     id="name"
                     placeholder="Nome e sobrenome"
                     onChange={handleInputChange}
                  />
               </div>
               <div>
                  <Label>E-mail*</Label>
                  <Input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="e-mail"
                     onChange={handleInputChange}
                  />
               </div>
               <div>
                  <Label>CPF*</Label>
                  <Input
                     type="text"
                     name="cpf"
                     id="cpf"
                     placeholder="000.000.000-00"
                     onChange={handleInputChange}
                  />
               </div>

               <Button type="submit">
                  {isLoading ? (
                     <CircularProgress size={16} color={"inherit"} />
                  ) : (
                     <>Salvar</>
                  )}
               </Button>
            </Form>
         </RegistrationContainer>
      </Container>
   );
}
