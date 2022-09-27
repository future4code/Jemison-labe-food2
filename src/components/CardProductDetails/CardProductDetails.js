import React from "react";
import { SecondaryCard } from "../CardRestaurantDetails/StyledCardRestaurantsDetails";

export function CardProductDetails({ produto }) {
    return (
        <SecondaryCard>
            <img src={produto.photoUrl} />
            <figcaption>
                <p>{produto.name}</p>
                <p>{produto.description}</p>
                <p>
                    {produto.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </p>
                <button>adicionar</button>
            </figcaption>
        </SecondaryCard>
    );
}
