import React, { useContext, useEffect, useState } from "react";
import search from "../../assets/img/search/search.svg";
import {
   Card,
   Cards,
   Search,
   ContentsHeader,
} from "../FeedPage/StyledFeedPage";
import { Container, Contents } from "../../Styled";
import { Navbar } from "../../components/Navbar/Navbar";
import { InputSearch } from "../../components/RegistrationPages/StyledRegistrationPages";
import { GlobalContext } from "../../global/GlobalContext";
import { useNavigate } from "react-router-dom";
import { goToRestaurantDetailsPage } from "../../routes/coordinator";

export function SearchPage() {
   const navigate = useNavigate();
   const { GlobalStates, GlobalRequests } = useContext(GlobalContext);
   const [inputSearch, setInputSearch] = useState("");
   const restaurantList = GlobalStates.restaurantList;
   const searchRestaurant =
      restaurantList &&
      restaurantList.filter((restaurant) => {
         return restaurant.name
            .toLowerCase()
            .includes(inputSearch.toLowerCase());
      });

   const renderRestaurantList = searchRestaurant.map((restaurant) => {
      return (
         <Card
            key={restaurant.id}
            onClick={() => goToRestaurantDetailsPage(navigate, restaurant.id)}>
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

   let renderSearch;

   if (inputSearch === "") {
      renderSearch = <p>Busque por um restaurante</p>;
   } else if (searchRestaurant.length === 0) {
      renderSearch = <p>Não encontramos :(</p>;
   } else {
      renderSearch = renderRestaurantList;
   }

   const onChangeInputSearch = (e) => {
      // e.preventdefault();
      setInputSearch(e.target.value);
   };

   useEffect(() => {
      GlobalRequests.getRestaurants();
   }, []);

   return (
      <Container>
         <Navbar text="Busca" />
         <Contents>
            <ContentsHeader>
               <Search>
                  <img src={search} />
                  <InputSearch
                     type="search"
                     name="search"
                     id="search"
                     onChange={onChangeInputSearch}
                     placeholder="Restaurante"
                  />
               </Search>
            </ContentsHeader>

            <Cards>{renderSearch}</Cards>
         </Contents>
      </Container>
   );
}
