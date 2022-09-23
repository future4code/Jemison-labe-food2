import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../Styled";

export function RestaurantDetailsPage() {
    const id = useParams;

    return (
        <Container>
            <h1>Pagina RestaurantDetailsPage</h1>
        </Container>
    );
}
