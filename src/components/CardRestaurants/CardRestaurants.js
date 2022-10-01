import React, { useContext } from "react";
import { GlobalContext } from "../../global/GlobalContext";
import { Card } from "./StyledCardRestaurants";
import { goToRestaurantDetailsPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export function CardRestaurants({ categories, inputSearch }) {
   const navigate = useNavigate();
   const { GlobalStates } = useContext(GlobalContext);

   const renderList = GlobalStates.restaurantList
      .filter((category) => {
         if (categories === "Todos") {
            return true, "#e21";
         } else {
            return category.category === categories;
         }
      })
      .filter((nome) => {
         return nome.name.toLowerCase().includes(inputSearch.toLowerCase());
      })
      .map((restaurant) => {
         return (
            <Card
               key={restaurant.id}
               onClick={() =>
                  goToRestaurantDetailsPage(navigate, restaurant.id)
               }>
               <img src={restaurant.logoUrl} height={120} />

               <figcaption>
                  <h4>{restaurant.name}</h4>
                  <div>
                     <p>
                        {restaurant.deliveryTime} -{" "}
                        {Math.round(restaurant.deliveryTime * 0.25) +
                           restaurant.deliveryTime}{" "}
                        min
                     </p>
                     <p>
                        Frete{" "}
                        {restaurant.shipping.toLocaleString("pt-br", {
                           style: "currency",
                           currency: "BRL",
                        })}
                     </p>
                  </div>
               </figcaption>
            </Card>
         );
      });

   return (
      <>
         {renderList && renderList.length > 0 ? (
            renderList
         ) : (
            <CircularProgress
               className="CircularProgress"
               size={64}
               color={"inherit"}
            />
         )}
      </>
   );
}
