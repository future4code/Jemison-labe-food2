import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    RegistrationContainer,
    Logo,
    Form,
    Label,
    Input,
    Botao,
} from "../../components/RegistrationPages/StyledRegistrationPages";
import { Container } from "../../Styled";
import { getLogin } from "../../services/GetLogin";
import { goToSignUpPage } from "../../routes/coordinator";
import { UseForm } from "../../hooks/useForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import logo from "../../assets/img/startPage/logo-vermelha.svg";

export function LoginPage() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, handleInputChange, clear] = UseForm({
        email: "",
        password: "",
    });

    const onSubmitForm = (e) => {
        e.preventDefault();
        getLogin(form, clear, navigate, setIsLoading);
    };

    useProtectedPage();

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

                    <Botao type="submit">
                        {isLoading ? <>Aguarde...</> : <>Entrar</>}
                    </Botao>
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
