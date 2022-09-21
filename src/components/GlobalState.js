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
         .catch((err) => {console.log(err.response)})
    }






    const stateGlobais = {listaDeRestaurantes}
    const requisicoesGlobais = {buscaRestaurants}

    const Provider = GlobalContext.Provider;
    return <Provider
             value={{stateGlobais, requisicoesGlobais}}
            >
                    {props.children}
         </Provider>;
}
