import React from "react";
import { Container } from "../../Styled";
import {
    RegistrationContainer,
    Form,
    Label,
    Input,
    Botao,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Navbar } from "../../components/Navbar/Navbar";


export function EditPageProfile() {
    return (
        <Container>
            <Navbar text="Editar" />
            <RegistrationContainer>
                <Form>
                    <div>
                        <Label>Nome*</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nome e sobrenome"
                        />
                    </div>
                    <div>
                        <Label>E-mail*</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="e-mail" />
                    </div>
                    <div>
                        <Label>CPF*</Label>
                        <Input
                            type="text"
                            name="cpf"
                            id="cpf"
                            placeholder="000.000.000-00"
                        />
                    </div>
                    <Botao>Salvar</Botao>
                </Form>
            </RegistrationContainer>
        </Container>
    );
}
