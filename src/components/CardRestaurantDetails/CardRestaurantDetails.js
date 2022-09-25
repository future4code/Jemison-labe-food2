import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../global/GlobalContext";
import { MainCard } from "./StyledCardRestaurantsDetails";

export function CardRestaurantDetails() {
    const { GlobalStates } = useContext(GlobalContext);

    return (
        <div>
            <MainCard>
                <img src={GlobalStates.restaurantDetail.logoUrl} height={120} />

                <figcaption>
                    <h4>{GlobalStates.restaurantDetail.name}</h4>

                    <ul>
                        <li>{GlobalStates.restaurantDetail.category}</li>

                        <li>
                            <p>
                                {GlobalStates.restaurantDetail.deliveryTime} -{" "}
                                {Math.round(
                                    GlobalStates.restaurantDetail.deliveryTime *
                                        0.25
                                ) +
                                    GlobalStates.restaurantDetail
                                        .deliveryTime}{" "}
                                min
                            </p>

                            <p>
                                Frete{" "}
                                {GlobalStates.restaurantDetail.shipping.toLocaleString(
                                    "pt-br",
                                    {
                                        style: "currency",
                                        currency: "BRL",
                                    }
                                )}
                            </p>
                        </li>

                        <li>{GlobalStates.restaurantDetail.address}</li>
                    </ul>
                </figcaption>
            </MainCard>
        </div>
    );
}
