import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Card } from "./StyledCardRestaurants";

export function CardResraurants() {
    const {stateGlobais} = useContext(GlobalContext);



    return (
        
        <div>
            {stateGlobais.listaDeRestaurantes
            
            .map((restaurant) =>{
                return (
                    <Card 
                        key={restaurant.id}
                        
                    >
                    <img src={restaurant.logoUrl}/>

                    <figcaption>
                        <h4>{restaurant.name}</h4>
                        <h4>{restaurant.category}</h4>
                        <div>
                            <p>{restaurant.deliveryTime} - min</p>
                            <p>Frete R${restaurant.shipping}</p>
                        </div>
                    </figcaption>
                    </Card>
                )
            })}
        </div>     
    )
}
