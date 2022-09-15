import React from "react";
import logo from "../../assets/img/logo-vermelha.svg";
import {
    RegistrationContainer,
    Logo,
    Form,
    Label,
    Input,
} from "./StyledRegistration";

export const Registration = () => {
    return (
        <RegistrationContainer>
            <Logo>
                <img src={logo} width="104" />
            </Logo>

            <p>Entrar</p>

            <Form>
                <div>
                    <Label>E-mail</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email@email.com"
                        required
                    />
                </div>

                <div>
                    <Label>Senha</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Mínimo 6 caracteres"
                        required
                    />
                </div>
            </Form>
        </RegistrationContainer>
    );
};
