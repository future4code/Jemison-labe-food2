import React, { useContext, useEffect, useState } from "react";
import { Contents } from "../FeedPage/StyledFeedPage";
import { Container } from "../../Styled";
import { Navbar } from "../../components/Navbar/Navbar";
import { CardRestaurantDetails } from "../../components/CardRestaurantDetails/CardRestaurantDetails";
import { GlobalContext } from "../../global/GlobalContext";
import { useParams } from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardProductDetails } from "../../components/CardProductDetails/CardProductDetails";
import { CircularProgress } from "@mui/material";

export function RestaurantDetailsPage() {
    useProtectedPage();
    const id = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const { GlobalRequests, GlobalStates } = useContext(GlobalContext);
    const products = GlobalStates.products;

    const productsCondition = products && products.length > 0;
    
    const categorias = products && products.map((item)=>{
        return item.category
    })

    const unicaCategoria = [...new Set(categorias)]


    useEffect(() => {
        GlobalRequests.getRestaurantDetails(id.id);
    }, []);

    return (
        <Container>
            <Navbar text="Restaurante" />

            {!productsCondition ? (
                <CircularProgress
                    size={64}
                    color={"inherit"}
                    className="CircularProgress"
                />
            ) : (
                <Contents>
                    <CardRestaurantDetails />
                    {unicaCategoria.map((item)=>{
                        const produtos = products && products.filter((produto)=>{
                            return produto.category === item
                        })
                        return (
                            <>
                                 <p>{item}</p>
                                {produtos && produtos.map((produto) =>{
                                    return <CardProductDetails
                                            key={produto.id}
                                            produto={produto}
                                            />
                                })}
                            </>                
                        ) 
                    })}
                    
                </Contents>
            )}
        </Container>
    );
}
