import React, { useContext, useEffect } from "react";
import { Container, Contents, TitleCard } from "../../Styled";
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
   const { GlobalStates, GlobalRequests } = useContext(GlobalContext);
   const productList = GlobalStates.products;
   const productCondition = productList && productList.length > 0;
   const categorys =
      productList &&
      productList.map((productInformation) => {
         return productInformation.category;
      });
   const categorysNoRepeat = [...new Set(categorys)];

   useEffect(() => {
      GlobalRequests.getRestaurantDetails(id.id);
   }, []);

   return (
      <Container>
         <Navbar text="Restaurante" />

         {!productCondition ? (
            <CircularProgress
               size={64}
               color={"inherit"}
               className="CircularProgress"
            />
         ) : (
            <Contents>
               <CardRestaurantDetails />

               {categorysNoRepeat.map((category) => {
                  const products =
                     productList &&
                     productList.filter((product) => {
                        return product.category === category;
                     });
                  return (
                     <>
                        <TitleCard>{category}</TitleCard>

                        {products &&
                           products.map((product) => {
                              return (
                                 <CardProductDetails
                                    key={product.id}
                                    product={product}
                                 />
                              );
                           })}
                     </>
                  );
               })}
            </Contents>
         )}
      </Container>
   );
}
