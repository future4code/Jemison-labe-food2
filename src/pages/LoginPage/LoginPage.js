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

export function LoginPage() {
    const navigate = useNavigate();

    return (
        <Container>
            <RegistrationContainer>
                <Logo>
                    <img src={logo} width="104" />
                </Logo>

                <p>Entrar</p>

                <Form>
                    <div>
                        <Label>E-mail*</Label>
                        <Input
                            type="email"
                            name="email"
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
                    >
                        Clique aqui
                    </button>
                    .
                </p>
            </RegistrationContainer>
        </Container>
    );
}
