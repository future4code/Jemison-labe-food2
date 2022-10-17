import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
   RegistrationContainer,
   Form,
   Label,
   Input,
   Button,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import { Navbar } from "../../components/Navbar/Navbar";
import { putAddAddress } from "../../services/User";
import { UseForm } from "../../hooks/useForm";
import { CircularProgress } from "@mui/material";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export function ProfileEditAddress() {
   useProtectedPage();

   const navigate = useNavigate();
   const [isLoading, setIsLoading] = useState(false);
   const [form, handleInputChange, clear] = UseForm({
      street: "",
      number: "",
      neighbourhood: "",
      city: "",
      state: "",
      complement: "",
   });

   const onSubmitForm = (e) => {
      e.preventDefault();
      putAddAddress(form, clear, navigate, setIsLoading);
   };

   return (
      <Container>
         <Navbar text={"Endereço"} />

         <RegistrationContainer>
            <Form onSubmit={onSubmitForm}>
               <div>
                  <Label>Logradouro*</Label>
                  <Input
                     type="text"
                     name="street"
                     value={form.street}
                     onChange={handleInputChange}
                     id="street"
                     placeholder="Rua / Av."
                     required
                  />
               </div>

               <div>
                  <Label>Número*</Label>
                  <Input
                     type="number"
                     name="number"
                     value={form.number}
                     onChange={handleInputChange}
                     id="number"
                     placeholder="Número"
                     required
                  />
               </div>

               <div>
                  <Label>Complemento</Label>
                  <Input
                     type="text"
                     name="complement"
                     value={form.complement}
                     onChange={handleInputChange}
                     id="complement"
                     placeholder="Apto. / Bloco"
                  />
               </div>

               <div>
                  <Label>Bairro*</Label>
                  <Input
                     type="text"
                     name="neighbourhood"
                     value={form.neighbourhood}
                     onChange={handleInputChange}
                     id="neighbourhood"
                     placeholder="Bairro"
                     required
                  />
               </div>

               <div>
                  <Label>Cidade*</Label>
                  <Input
                     type="text"
                     name="city"
                     value={form.city}
                     onChange={handleInputChange}
                     id="city"
                     placeholder="Cidade"
                     required
                  />
               </div>

               <div>
                  <Label>Estado*</Label>
                  <Input
                     type="text"
                     name="state"
                     value={form.state}
                     onChange={handleInputChange}
                     id="state"
                     placeholder="Estado"
                     required
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
