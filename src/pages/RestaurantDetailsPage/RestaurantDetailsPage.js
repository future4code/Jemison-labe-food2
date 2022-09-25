import React, { useContext, useEffect } from "react";
import { Contents } from "../FeedPage/StyledFeedPage";
import { Container } from "../../Styled";
import { Navbar } from "../../components/Navbar/Navbar";
import { CardRestaurantDetails } from "../../components/CardRestaurantDetails/CardRestaurantDetails";
import { GlobalContext } from "../../global/GlobalContext";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardProductDetails } from "../../components/CardProductDetails/CardProductDetails";

export function RestaurantDetailsPage() {
    useProtectedPage();

    const id = useParams();

    const { GlobalRequests, GlobalStates } = useContext(GlobalContext);

    useEffect(() => {
        GlobalRequests.getRestaurantDetails(id.id);
    }, []);

    return (
        <Container>
            <Navbar text="Restaurante" />

            {GlobalStates.products && GlobalStates.products.length > 0 ? (
                <Contents>
                    <CardRestaurantDetails />
                    {GlobalStates.products.map((produto, index) => {
                        // console.log(produto);
                        return (
                            <CardProductDetails key={index} produto={produto} />
                        );
                    })}
                </Contents>
            ) : (
                <> carregando....</>
            )}
        </Container>
    );
}
