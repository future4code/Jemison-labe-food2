import React, { useContext, useEffect, useState } from "react";
import { Contents } from "../FeedPage/StyledFeedPage";
import { Container } from "../../Styled";
import { Navbar } from "../../components/Navbar/Navbar";
import { CardRestaurantDetails } from "../../components/CardRestaurantDetails/CardRestaurantDetails";
import { GlobalContext } from "../../global/GlobalContext";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CardProductDetails } from "../../components/CardProductDetails/CardProductDetails";
import { CircularProgress } from "@mui/material";

export function RestaurantDetailsPage() {
    useProtectedPage();
    const id = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const { GlobalRequests, GlobalStates } = useContext(GlobalContext);
    const products = GlobalStates.products;

    const productsCondition = products && products.length > 0;
    const categorys = [];
    const handleCategorys = () => {
        products &&
            products.map((product) => {
                categorys.push(product.category);
            });
    };
    handleCategorys();
    const categorysNoRepeat = [...new Set(categorys)];
    // console.log(categorys); // Categorias totais
    console.log(categorysNoRepeat); // Categorias únicas

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

                    {products &&
                        products.map((product, index) => {
                            console.log(products[0]);

                            return (
                                <CardProductDetails
                                    key={index}
                                    product={product}
                                    category={categorys[index]}
                                />
                            );
                        })}
                </Contents>
            )}
        </Container>
    );
}
