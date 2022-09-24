import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { MainCard } from "./StyledCardRestaurantsDetails";
import vinil from "../../assets/img/card/eldorado.png";

export function CardRestaurantDetails() {
    const { GlobalStates } = useContext(GlobalContext);

    return (
        <div>
            <MainCard>
                <img src={vinil} height={120} />

                <figcaption>
                    <h4>Bullguer Vila Madalena</h4>

                    <ul>
                        <li>Burger</li>

                        <li>
                            <p>50 - 60 min</p>
                            <p>Frete R$ 6,00</p>
                        </li>

                        <li>R. Fradique Coutinho, 1136 - Vila Madalena</li>
                    </ul>
                </figcaption>
            </MainCard>
        </div>
    );
}