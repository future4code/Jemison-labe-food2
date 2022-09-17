import React from "react";

import {
    RegistrationContainer,
    Logo,
    Form,
    Label,
    Input,
    Botao,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import logo from "../../assets/img/logo-vermelha.svg";
import { useNavigate } from "react-router-dom";
import { goToSignUpPage } from "../../routes/coordinator";
import { UseForm } from "../../hooks/useForm";
import { Login } from "../../services/services";

export function LoginPage() {
    const navigate = useNavigate();
    const [form, handleInputChange, clear] = UseForm({ email: "", password: "" });
    const onSubmitForm = (e) => {
        e.preventDefault();
        Login(form, clear, navigate);
    };

    return (
        <Container>
            <RegistrationContainer>
                <Logo>
                    <img src={logo} width="104" />
                </Logo>

                <p>Entrar</p>

                <Form onSubmit={onSubmitForm}>
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
                        <Input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleInputChange}
                            id="password"
                            placeholder="Mínimo 6 caracteres"
                            required
                        />
                    </div>

                    <Botao>Entrar</Botao>
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
