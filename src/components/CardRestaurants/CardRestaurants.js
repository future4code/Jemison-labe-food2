import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Card } from "./StyledCardRestaurants";
import { goToRestaurantDetailsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export function CardRestaurants({ categories, inputSearch }) {
    const navigate = useNavigate();
    const { GlobalStates } = useContext(GlobalContext);

    return (
        <div>
            {GlobalStates.restaurantList
                .filter((category) => {
                    if (categories === "Todos") {
                        return true, "#e21";
                    } else {
                        return category.category === categories;
                    }
                })
                .filter((nome) => {
                    return nome.name
                        .toLowerCase()
                        .includes(inputSearch.toLowerCase());
                })
                .map((restaurant) => {
                    return (
                        <Card
                            key={restaurant.id}
                            onClick={() =>
                                goToRestaurantDetailsPage(
                                    navigate,
                                    restaurant.id
                                )
                            }>
                            <img src={restaurant.logoUrl} height={120} />

                            <figcaption>
                                <h4>{restaurant.name}</h4>
                                <div>
                                    <p>{restaurant.deliveryTime} min</p>
                                    <p>Frete R${restaurant.shipping},00</p>
                                </div>
                            </figcaption>
                        </Card>
                    );
                })}
        </div>
    );
}
