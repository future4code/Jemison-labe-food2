import React, { useState, useRef } from "react";
import logo from "../../assets/img/startPage/logo-vermelha.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
   RegistrationContainer,
   Logo,
   Form,
   Label,
   Input,
   Button,
   InputEye,
   Highlight,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import { postSignUp } from "../../services/User";
import { Navbar } from "../../components/Navbar/Navbar";
import { UseForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { PasswordValidator } from "../../components/Passwords/PasswordValidator";
import { CircularProgress } from "@mui/material";

const numberRegx = /\d/;
const specialCharRegx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

export function SignUpPage() {
   const navigate = useNavigate();
   const inputRef = useRef(null);
   const inputReff = useRef(null);
   const [isLoading, setIsLoading] = useState(false);
   const [form, handleInputChange, clear] = UseForm({
      name: "",
      email: "",
      cpf: "",
      password: "",
      confirm_password: "",
   });
   const onSubmitForm = (e) => {
      e.preventDefault();
      postSignUp(form, clear, navigate, setIsLoading);
   };

   // Lógica para a senha
   const [passwordFocused, setPasswordFocused] = useState(false);
   const [password, setPassword] = useState("");
   const [passwordValidity, setPasswordValidity] = useState({
      minChar: null,
      number: null,
      specialChar: null,
   });
   const [showPassword, setShowPassword] = useState(false);
   const onClickShowPassword = () => {
      setShowPassword(!showPassword);
   };
   const onChangePassword = (password) => {
      setPassword(password);

      setPasswordValidity({
         minChar: password.length >= 6 ? true : false,
         number: numberRegx.test(password) ? true : false,
         specialChar: specialCharRegx.test(password) ? true : false,
      });
   };

   // Lógica para  confirmar a senha
   const [confirmPassword, setConfirmPassword] = useState("");
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const onClickShowConfirmPassword = () => {
      setShowConfirmPassword(!showConfirmPassword);
   };
   const onChangeConfirmPassword = (password) => {
      setConfirmPassword(password);
   };

   useProtectedPage();

   return (
      <Container>
         <Navbar />

         <RegistrationContainer>
            <Logo>
               <img src={logo} width="104" />
            </Logo>

            <Form onSubmit={onSubmitForm}>
               <legend>Cadastrar</legend>

               <div>
                  <Label>Nome*</Label>
                  <Input
                     type="text"
                     name="name"
                     value={form.name}
                     onChange={handleInputChange}
                     placeholder="Nome e sobrenome"
                     required
                  />
               </div>

               <div>
                  <Label>E-mail*</Label>
                  <Input
                     type="email"
                     name="email"
                     value={form.email}
                     onChange={handleInputChange}
                     placeholder="email@email.com"
                     required
                  />
               </div>

               <div>
                  <Label>CPF*</Label>
                  <Input
                     type="text"
                     name="cpf"
                     value={form.cpf}
                     onChange={handleInputChange}
                     placeholder="000.000.000-00"
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
                        // Para validar a senha use value={password}
                        // Para não validar a senha use value={form.password}
                        value={form.password}
                        // Para validar a senha use onChange={(e) => onChangePassword(e.target.value)}
                        // Para não validar a senha use onChange={handleInputChange}
                        onChange={handleInputChange}
                        // onFocus={() => setPasswordFocused(true)}
                        placeholder="Mínimo 6 caracteres"
                        required
                     />
                     <button
                        type="button"
                        className="btn-password"
                        onClick={onClickShowPassword}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                     </button>
                  </InputEye>
               </div>

               <div>
                  <Label>Confirmar*</Label>
                  <InputEye>
                     <Input
                        ref={inputReff}
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirm_password"
                        // Para validar a senha use value={confirm_password}
                        // Para não validar a senha use value={form.confirm_password}
                        value={form.confirm_password}
                        // Para validar a senha use onChange={(e) => onChangeConfirmPassword(e.target.value)}
                        // Para não validar a senha use onChange={handleInputChange}
                        onChange={handleInputChange}
                        placeholder="Confirme a senha anterior"
                        required
                     />
                     <button
                        type="button"
                        className="btn-password"
                        onClick={onClickShowConfirmPassword}>
                        {showConfirmPassword ? (
                           <AiFillEyeInvisible />
                        ) : (
                           <AiFillEye />
                        )}
                     </button>
                  </InputEye>

                  {passwordFocused && (
                     <PasswordValidator validity={passwordValidity} />
                  )}

                  {confirmPassword !== password ? (
                     <Highlight>- As senhas são iguais</Highlight>
                  ) : null}

                  {confirmPassword !== "" && confirmPassword === password ? (
                     <Highlight className="deu-certo">
                        - As senhas são iguais
                     </Highlight>
                  ) : null}
               </div>

               <Button type="submit">
                  {isLoading ? (
                     <CircularProgress size={16} color={"inherit"} />
                  ) : (
                     <>Criar</>
                  )}
               </Button>
            </Form>
         </RegistrationContainer>
      </Container>
   );
}
