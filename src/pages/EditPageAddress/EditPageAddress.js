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


export function EditPageAddress() {
    return (
        <Container>
            <Navbar text="Endereço" />
            <RegistrationContainer>
                <Form>
                    <div>
                        <Label>Logradouro*</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nome e sobrenome"
                        />
                    </div>
                    <div>
                        <Label>Número*</Label>
                        <Input
                            type="number"
                            name="number"
                            id="number"
                            placeholder="Número" />
                    </div>
                    <div>
                        <Label>Complemento*</Label>
                        <Input
                            type="text"
                            name="cpf"
                            id="cpf"
                            placeholder="Apto / Bloco"
                        />
                    </div>
                    <div>
                        <Label>Bairro*</Label>
                        <Input
                            type="text"
                            name="cpf"
                            id="cpf"
                            placeholder="Bairro"
                        />
                    </div>
                    <div>
                        <Label>Cidade*</Label>
                        <Input
                            type="text"
                            name="cpf"
                            id="cpf"
                            placeholder="Cidade"
                        />
                    </div>
                    <div>
                        <Label>Estado*</Label>
                        <Input
                            type="text"
                            name="cpf"
                            id="cpf"
                            placeholder="Estado"
                        />
                    </div>
                    <Botao>Salvar</Botao>
                </Form>
            </RegistrationContainer>
        </Container>
    );
}
