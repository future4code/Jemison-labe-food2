import React from "react";
import vinil from "../../assets/img/card/vinil.jpg";
import { Card } from "./StyledCardRestaurants";

export function CardResraurants() {
    return (
            <Card>
                        <img src={vinil} />

                        <figcaption>
                            <h4>Vinil Butantã</h4>

                            <div>
                                <p>50 - 60 min</p>
                                <p>Frete R$6,00</p>
                            </div>
                        </figcaption>
           </Card>
        
    );
}
