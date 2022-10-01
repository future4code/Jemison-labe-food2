import axios from "axios";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/BASE_URL";

export function GlobalState(props) {
   const [restaurantList, setRestaurantList] = useState([]);
   const [restaurantDetail, setRestaurantDetail] = useState({});
   const [products, setProducts] = useState([]);
   const [profile, setProfile] = useState([]);
   const [cart, setCart] = useState([]);
   const [cartProducts, setCartProducts] = useState([
      {
         id: "",
         quantity: "",
      },
   ]);

   // Este endpoint retorna uma lista de todos os restaurantes.
   const getRestaurants = () => {
      const endpoint = {
         method: "get",
         url: `${BASE_URL}/restaurants`,
         headers: { auth: localStorage.getItem("token") },
      };

      axios(endpoint)
         .then((res) => {
            setRestaurantList(res.data.restaurants);
         })
         .catch((err) => {
            // alert(err.response.data.message);
            alert("faça login para acessar");
         });
   };

   // Este endpoint retorna os detalhes de um restaurante, e uma lista dos products dele.
   const getRestaurantDetails = (id) => {
      const endpoint = {
         method: "get",
         url: `${BASE_URL}/restaurants/${id}`,
         headers: { auth: localStorage.getItem("token") },
      };

      axios(endpoint)
         .then((res) => {
            setRestaurantDetail(res.data.restaurant);
            setProducts(res.data.restaurant.products);
         })
         .catch((err) => {
            // alert(err.response.data.message);
            alert("faça login para acessar");
         });
   };

   // Este endpoint retorna as informações do usuário. Deve ser usado pra recuperar as informações de um usuário após ele ter saído e entrado de novo na aplicação, usando somente o token.
   const getProfile = () => {
      const token = localStorage.getItem("token");
      const endpointProfile = {
         method: "get",
         url: `${BASE_URL}/profile`,
         headers: { auth: token },
      };

      if (token) {
         axios(endpointProfile)
            .then((res) => {
               setProfile(res.data.user);
            })
            .catch((err) => {
               // alert(err.response.data.message);
               alert("Dados não encontrados");
            });
      }
   };

   const GlobalStates = {
      restaurantList,
      restaurantDetail,
      products,
      profile,
      cart,
      cartProducts,
   };

   const GlobalSetStates = {
      setRestaurantList,
      setRestaurantDetail,
      setProducts,
      setProfile,
      setCart,
      setCartProducts,
   };

   const GlobalRequests = {
      getRestaurants,
      getRestaurantDetails,
      getProfile,
   };
   const Provider = GlobalContext.Provider;

   return (
      <Provider value={{ GlobalStates, GlobalSetStates, GlobalRequests }}>
         {props.children}
      </Provider>
   );
}
