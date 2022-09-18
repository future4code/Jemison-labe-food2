import React, { useState, useRef } from "react";
import logo from "../../assets/img/startPage/logo-vermelha.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
    RegistrationContainer,
    Logo,
    Form,
    Label,
    Input,
    Botao,
    InputEye,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import { getSignUp } from "../../services/GetSignUp";
import { Navbar } from "../../components/Navbar/Navbar";
import { UseForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {
    const navigate = useNavigate();
    const inputRef = useRef(null)
    const inputReff = useRef(null)
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [form, handleInputChange, clear] = UseForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
        confirm_password: "",
    });

    const toggleShow = () => {
        if (inputRef.current.type === "password") {
            setShowPassword(true);
            inputRef.current.type = "text";
        } else {
            setShowPassword(false);
            inputRef.current.type = "password";
        }
    }

    const toggleShow2 = () => {
        if (inputReff.current.type === "password") {
            setShowPassword2(true);
            inputReff.current.type = "text";
        } else {
            setShowPassword2(false);
            inputReff.current.type = "password";
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        getSignUp(form, clear, navigate, setIsLoading);
    };

    return (
        <Container>
            <Navbar />

            <RegistrationContainer>
                <Logo>
                    <img src={logo} width="104" />
                </Logo>

                <p>Cadastrar</p>

                <Form onSubmit={onSubmitForm}>
                    <div>
                        <Label>Nome*</Label>
                        <Input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            id="name"
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
                            id="email"
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
                            id="cpf"
                            placeholder="000.000.000-00"
                            required
                        />
                    </div>

                    <div>
                        <Label>Senha*</Label>
                        <InputEye>
                        <Input
                            ref={inputRef}
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleInputChange}
                            id="password"
                            placeholder="Mínimo 6 caracteres"
                            required
                            />
                            <button type="button" className="btn-password" onClick={toggleShow}>
                                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />} </button>
                        </InputEye>
                    </div>

                    <div>
                        <Label>Confirmar*</Label>
                        <InputEye>
                        <Input
                            ref={inputReff}
                            type="password"
                            name="confirm_password"
                            value={form.password}
                            onChange={handleInputChange}
                            id="confirm_password"
                            placeholder="Confirme a senha anterior"
                            required
                            />
                            <button type="button" className="btn-password" onClick={toggleShow2}>
                                {showPassword2 ? <AiFillEyeInvisible /> : <AiFillEye />} </button>
                        </InputEye>
                    </div>

                    <Botao type="submit">
                        {isLoading ? <>Aguarde...</> : <>Criar</>}
                    </Botao>
                </Form>
            </RegistrationContainer>
        </Container>
    );
}
