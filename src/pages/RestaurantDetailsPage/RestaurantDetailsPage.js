import React from "react";
import { Contents } from "../FeedPage/StyledFeedPage";
import { Container } from "../../Styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Navbar } from "../../components/Navbar/Navbar";
import { CardRestaurantDetails } from "../../components/CardRestaurantDetails/CardRestaurantDetails";
import imagem from "../../assets/img/restaurants_details/mao-santa-burguer.png";
import {
    RestaurantDetailsSections,
    SecondaryCard,
    SecondaryCards,
} from "../../components/CardRestaurantDetails/StyledCardRestaurantsDetails";

export function RestaurantDetailsPage() {
    useProtectedPage();

    return (
        <Container>
            <Navbar text="Restaurante" />

            <Contents>
                <CardRestaurantDetails />

                <div>
                    <RestaurantDetailsSections>
                        <h3>Principais</h3>

                        <SecondaryCards>
                            <SecondaryCard>
                                <img src={imagem} />
                                <figcaption>
                                    <p>Bullguer</p>
                                    <p>Pão, carne. queijo, picles e molho.</p>
                                    <p>R$20,00</p>
                                    <button>adicionar</button>
                                </figcaption>
                            </SecondaryCard>
                            <SecondaryCard>
                                <img src={imagem} />
                                <figcaption>
                                    <p>Stencil</p>
                                    <p>
                                        Pão, carne, queijo, cebola roxa, tomate,
                                        alface e molho.
                                    </p>
                                    <p>R$23,00</p>
                                    <button>adicionar</button>
                                </figcaption>
                            </SecondaryCard>
                        </SecondaryCards>
                    </RestaurantDetailsSections>

                    <RestaurantDetailsSections>
                        <h3>Acompanhamentos</h3>

                        <SecondaryCards>
                            <SecondaryCard>
                                <img src={imagem} />
                                <figcaption>
                                    <p>Cheese Fries</p>
                                    <p>
                                        Porção de fritas temperada com páprica e
                                        queijo derretido.
                                    </p>
                                    <p>R$15,00</p>
                                    <button>adicionar</button>
                                </figcaption>
                            </SecondaryCard>
                            <SecondaryCard>
                                <img src={imagem} />
                                <figcaption>
                                    <p>Onion Rings</p>
                                    <p>Porção de cebolas empanadas.</p>
                                    <p>R$12,00</p>
                                    <button>adicionar</button>
                                </figcaption>
                            </SecondaryCard>
                        </SecondaryCards>
                    </RestaurantDetailsSections>
                </div>
            </Contents>
        </Container>
    );
}
