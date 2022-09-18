import React, { useState } from "react";
import logo from "../../assets/img/startPage/logo-vermelha.svg";
import {
    RegistrationContainer,
    Logo,
    Form,
    Label,
    Input,
    Botao,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import { getSignUp } from "../../services/GetSignUp";
import { Navbar } from "../../components/Navbar/Navbar";
import { UseForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export function SignUpPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [form, handleInputChange, clear] = UseForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
    });

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
                        <Input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleInputChange}
                            id="password"
                            placeholder="Mínimo 6 caracteres"
                            required
                        />
                    </div>

                    <div>
                        <Label>Confirmar*</Label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            name="confirm_password"
                            value={form.password}
                            onChange={handleInputChange}
                            id="confirm_password"
                            placeholder="Confirme a senha anterior"
                            required
                        />
                    </div>

                    <Botao type="submit">
                        {isLoading ? <>Aguarde...</> : <>Criar</>}
                    </Botao>
                </Form>
            </RegistrationContainer>
        </Container>
    );
}
