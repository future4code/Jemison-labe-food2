import axios from "axios";
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import {BASE_URL} from "../constants/BASE_URL"

export function GlobalState(props) {
    const [listaDeRestaurantes, setListaDeRestaurantes] = useState([]) ;
    // Requisição - Restaurantes 
    const buscaRestaurants = () =>{
        const token = localStorage.getItem("token")
        const headers = { headers: { auth: token } }
    
        axios
         .get(`${BASE_URL}/restaurants`, headers)
         .then((res) => {
          setListaDeRestaurantes(res.data.restaurants)
         })
         .catch((err) => {alert(err.data.message)})
    }

    // Requisição - Detalhes de cada Restaurantes
    const buscaRestaurantsDetalhes = (id) =>{
        const token = localStorage.getItem("token")
        const headers = { headers: { auth: token } }
    
        axios
         .get(`${BASE_URL}/restaurants/${id}`, headers)
         .then((res) => {
          setListaDeRestaurantes(res.data)
         })
         .catch((err) => {alert(err.data.message)})
    }



    const stateGlobais = {listaDeRestaurantes}
    const requisicoesGlobais = {buscaRestaurants, buscaRestaurantsDetalhes}

    const Provider = GlobalContext.Provider;
    return <Provider
             value={{stateGlobais, requisicoesGlobais}}
            >
                    {props.children}
         </Provider>;
}
