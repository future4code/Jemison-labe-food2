import axios from "axios";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/BASE_URL";

export function GlobalState(props) {
    const [restaurantList, setRestaurantList] = useState([]);
    const [restaurantDetail, setRestaurantDetail] = useState({});
    const [products, setProducts] = useState([]);
    const [perfil, setPerfil] = useState([]); // para o getProfile
    
    
   


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

    //Este endpoint retorna os detalhes de um restaurante, e uma lista dos products dele.
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

    const getProfile = () => {
       const token = localStorage.getItem('token')
       const endpointPerfil = {
            method: "get",
            url: `${BASE_URL}/profile`,
            headers: { auth: token },
        };

       if(token) {
            axios(endpointPerfil)
                .then((res) => {
                    setPerfil(res.data.user);
                    console.log(res.data.user)
                })
                .catch((err) => {
                    // alert(err.response.data.message);
                    alert("Dados não encontrados");
                });  
       }

    }







    const GlobalStates = {
        restaurantList,
        restaurantDetail,
        products,
        perfil,
    };
    const GlobalSetStates = {
        setRestaurantList,
        setRestaurantDetail,
        setProducts,
        setPerfil,
    };
    const GlobalRequests = { getRestaurants, getRestaurantDetails, getProfile };
    const Provider = GlobalContext.Provider;

    return (
        <Provider value={{ GlobalStates, GlobalSetStates, GlobalRequests }}>
            {props.children}
        </Provider>
    );
}
