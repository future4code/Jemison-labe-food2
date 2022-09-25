import React, { useContext, useEffect} from "react";
import { Contents } from "../FeedPage/StyledFeedPage";
import { Container } from "../../Styled";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Navbar } from "../../components/Navbar/Navbar";
import { CardRestaurantDetails } from "../../components/CardRestaurantDetails/CardRestaurantDetails";
import imagem from "../../assets/img/restaurants_details/mao-santa-burguer.png";
import {
    RestaurantDetailsSections,
    SecondaryCard,
    SecondaryCards,
} from "../../components/CardRestaurantDetails/StyledCardRestaurantsDetails";
import { GlobalContext } from "../../global/GlobalContext";
import { useParams } from "react-router-dom";
import { CardProdutos } from "../../components/CardProdutos/CardProdutos";


export function RestaurantDetailsPage() {
    useProtectedPage();
    const id = useParams()

    const { GlobalRequests, GlobalStates} = useContext(GlobalContext);

    
    
   

    useEffect(() => {
        GlobalRequests.getRestaurantDetails(id.id);
    }, []);








    
   
    return (
        <Container>
        <Navbar text="Restaurante" />


        {GlobalStates.produtos && GlobalStates.produtos.length > 0 ? 
        
            <Contents>
                <CardRestaurantDetails/>

                {GlobalStates.produtos.map((item)=>{
                    return ( 
                        <CardProdutos
                           key={item.id} 
                           name={item.name}
                           photoUrl={item.photoUrl}
                           price={item.price}
                           description={item.description}
                        />
                    )
                    })}
           </Contents>
           
        
           :<> carregando....</>} 
         

    </Container>
    
    );
    
}
