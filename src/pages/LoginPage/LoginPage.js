import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
   RegistrationContainer,
   Logo,
   Form,
   Label,
   Input,
   Button,
   InputEye,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import { postLogin } from "../../services/User";
import { goToSignUpPage } from "../../routes/coordinator";
import { UseForm } from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import logo from "../../assets/img/startPage/logo-vermelha.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { CircularProgress } from "@mui/material";

export function LoginPage() {
   const navigate = useNavigate();
   const inputRef = useRef(null);
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [form, handleInputChange, clear] = UseForm({
      email: "",
      password: "",
   });

   const onSubmitForm = (e) => {
      e.preventDefault();
      postLogin(form, clear, navigate, setIsLoading);
   };

   const onClickShowPassword = () => {
      setShowPassword(!showPassword);
   };

   useProtectedPage();

   return (
      <Container>
         <RegistrationContainer>
            <Logo>
               <img src={logo} width="104" />
            </Logo>

            <Form onSubmit={onSubmitForm}>
               <legend>Entrar</legend>

               <div>
                  <Label>E-mail*</Label>
                  <Input
                     type="email"
                     name="email"
                     value={form.email}
                     onChange={handleInputChange}
                     id="email"
                     placeholder="email@email.com"
                     required
                  />
               </div>

               <div>
                  <Label>Senha*</Label>
                  <InputEye>
                     <Input
                        ref={inputRef}
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={form.password}
                        onChange={handleInputChange}
                        id="password"
                        placeholder="Mínimo 6 caracteres"
                        required
                     />
                     <button
                        type="button"
                        className="btn-password"
                        onClick={onClickShowPassword}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}{" "}
                     </button>
                  </InputEye>
               </div>

               <Button type="submit">
                  {isLoading ? (
                     <CircularProgress size={16} color={"inherit"} />
                  ) : (
                     <>Entrar</>
                  )}
               </Button>
            </Form>

            <p>
               Não possui cadastro?
               <button
                  onClick={() => {
                     goToSignUpPage(navigate);
                  }}>
                  Clique aqui
               </button>
               .
            </p>
         </RegistrationContainer>
      </Container>
   );
}
