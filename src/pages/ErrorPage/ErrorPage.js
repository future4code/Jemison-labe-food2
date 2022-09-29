import React from "react";
import { useNavigate } from "react-router-dom";
import { Botao } from "../../components/RegistrationPages/StyledRegistrationPages";
import { goToFeedPage } from "../../routes/coordinator";
import { Container2, Contents2 } from "./StyledErroPage";

export function ErrorPage() {
    const navigate = useNavigate();
    return (
        <Container2>
            <Contents2>
                <div>
                    <p>Ops! :(</p>
                    <p>Página não encontrada!</p>
                    <p>
                        Parece que houve um erro com a página procurada. É
                        possível que a página tenha sido removida ou o endereço
                        não existe.
                    </p>
                </div>
                <Botao onClick={() => goToFeedPage(navigate)}>
                    Voltar a Página Principal
                </Botao>
            </Contents2>
        </Container2>
    );
}
