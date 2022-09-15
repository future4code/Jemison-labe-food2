import React from "react";
import logo from "../../assets/img/logo-vermelha.svg";
import {
    RegistrationContainer,
    Logo,
    Form,
    Label,
    Input,
    Botao,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import { Navbar } from "../../components/Navbar/Navbar";

export function SignUpPage() {
    return (
        <Container>
            <Navbar />

            <RegistrationContainer>
                <Logo>
                    <img src={logo} width="104" />
                </Logo>

                <p>Cadastrar</p>

                <Form>
                    <div>
                        <Label>Nome*</Label>
                        <Input
                            type="text"
                            name="name"
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
                            id="cpf"
                            placeholder="000.000.000-00"
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

                    <div>
                        <Label>Confirmar*</Label>
                        <Input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder="Confirme a senha anterior"
                            required
                        />
                    </div>

                    <Botao>Criar</Botao>
                </Form>
            </RegistrationContainer>
        </Container>
    );
}
