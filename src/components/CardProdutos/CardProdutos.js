import React from "react";
import {RestaurantDetailsSections,
        SecondaryCard,
        SecondaryCards,}  from "../CardRestaurantDetails/StyledCardRestaurantsDetails"

export function CardProdutos ({name, photoUrl,price,description}) {


    return (
        <RestaurantDetailsSections>
                        <SecondaryCards>
                            <SecondaryCard>
                                <img src={photoUrl} />
                                <figcaption>
                                    <p>{name}</p>
                                    <p>{description}</p>
                                    <p>R${price}</p>
                                    <button>adicionar</button>
                                </figcaption>
                            </SecondaryCard>
                            
                        </SecondaryCards>
                    </RestaurantDetailsSections>
    )
}