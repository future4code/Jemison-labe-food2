import React from "react";
import { Header } from "../../components/Header/Header";
import { Registration } from "../../components/Registration/Registration";
import { Container } from "../../Styled";

export function LoginPage() {
    return (
        <Container>
            <Header />
            <Registration />
        </Container>
    );
}
