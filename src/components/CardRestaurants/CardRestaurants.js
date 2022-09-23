import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Card } from "./StyledCardRestaurants";
import {goToRestaurantDetailsPage} from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";


export function CardResraurants({categorias, enputBusca}) {
    const navigate = useNavigate()
    const {stateGlobais} = useContext(GlobalContext);

    




    return (
        
        <div>
            {stateGlobais.listaDeRestaurantes
            
            .filter(cateroria => {
                if (categorias === "Todos") {
                  return true
                } else {
                  return cateroria.category === categorias
                }
              })

              .filter(nome => {
                return  nome.name.toLowerCase().includes(enputBusca.toLowerCase())
              })

            .map((restaurant) =>{
                return (
                    <Card 
                        key={restaurant.id}
                        onClick= {()=>goToRestaurantDetailsPage(navigate, restaurant.id)}
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
