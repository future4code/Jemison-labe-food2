import axios from "axios";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/BASE_URL";

export function GlobalState(props) {
    const [restaurantList, setRestaurantList] = useState([]);

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
                alert(err.response.data.message);
            });
    };

    //Este endpoint retorna os detalhes de um restaurante, e uma lista dos produtos dele.
    const getRestaurantDetail = (id) => {
        const endpoint = {
            method: "get",
            url: `${BASE_URL}/restaurants/${id}`,
            headers: { auth: localStorage.getItem("token") },
        };

        axios(endpoint)
            .then((res) => {
                setRestaurantList(res.data.restaurant);
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };

    const GlobalStates = { restaurantList };
    const GlobalRequests = { getRestaurants, getRestaurantDetail };
    const Provider = GlobalContext.Provider;

    return (
        <Provider value={{ GlobalStates, GlobalRequests }}>
            {props.children}
        </Provider>
    );
}