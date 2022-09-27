import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { SecondaryCard } from "../CardRestaurantDetails/StyledCardRestaurantsDetails";

export function CardProductDetails({produto}) {





    return (
        <div>
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
        </div>
    );
}
