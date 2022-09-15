import React from "react";

import {
    RegistrationContainer,
    Form,
    Label,
    Input,
    Botao,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import { Navbar } from "../../components/Navbar/Navbar";

export function AddressPage() {
    return (
        <Container>
            <Navbar />

            <RegistrationContainer>
                <p>Meu endereço</p>

                <Form>
                    <div>
                        <Label>Logradouro*</Label>
                        <Input
                            type="text"
                            name="logradouro"
                            id="logradouro"
                            placeholder="Rua / Av."
                            required
                        />
                    </div>

                    <div>
                        <Label>Número*</Label>
                        <Input
                            type="number"
                            name="numero_casa"
                            id="numero_casa"
                            placeholder="Número"
                            required
                        />
                    </div>

                    <div>
                        <Label>Complemento</Label>
                        <Input
                            type="text"
                            name="complemento"
                            id="complemento"
                            placeholder="Apto. / Bloco"
                        />
                    </div>

                    <div>
                        <Label>Bairro*</Label>
                        <Input
                            type="text"
                            name="bairro"
                            id="bairro"
                            placeholder="Bairro"
                            required
                        />
                    </div>

                    <div>
                        <Label>Cidade*</Label>
                        <Input
                            type="text"
                            name="cidade"
                            id="cidade"
                            placeholder="Cidade"
                            required
                        />
                    </div>

                    <div>
                        <Label>Estado*</Label>
                        <Input
                            type="text"
                            name="estado"
                            id="estado"
                            placeholder="Estado"
                            required
                        />
                    </div>

                    <Botao>Salvar</Botao>
                </Form>
            </RegistrationContainer>
        </Container>
    );
}
