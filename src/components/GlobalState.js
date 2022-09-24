import axios from "axios";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/BASE_URL";

export function GlobalState(props) {
    const [restaurantList, setRestaurantList] = useState([]);
    const [restaurantDetail, setRestaurantDetail] = useState({})


    // Requisição - Restaurantes
    const searchRestaurants = () => {
        const token = localStorage.getItem("token");
        const headers = { headers: { auth: token } };

        axios
            .get(`${BASE_URL}/restaurants`, headers)
            .then((res) => {
                setRestaurantList(res.data.restaurants);
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };

    // Requisição - Detalhes de cada Restaurantes
    const searchRestaurantDetails = (id) => {
        const token = localStorage.getItem("token");
        const headers = { headers: { auth: token } };

        axios
            .get(`${BASE_URL}/restaurants/:${id}`, headers)
            .then((res) => {
                setRestaurantDetail(res.data);
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };

    const GlobalStates = { restaurantList ,restaurantDetail };
    const GlobalRequests = { searchRestaurants, searchRestaurantDetails,  };

    const Provider = GlobalContext.Provider;
    return (
        <Provider value={{ GlobalStates, GlobalRequests }}>
            {props.children}
        </Provider>
    );
}
