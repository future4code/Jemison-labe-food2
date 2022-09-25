import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { SecondaryCard } from "../CardRestaurantDetails/StyledCardRestaurantsDetails";

export function CardProductDetails({ product, category }) {
    return (
        <div>
            <h3>{category}</h3>
            <SecondaryCard>
                <img src={product.photoUrl} />
                <figcaption>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>
                        {product.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                    <button>adicionar</button>
                </figcaption>
            </SecondaryCard>
        </div>
    );
}
