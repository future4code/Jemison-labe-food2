import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import house1 from "../../assets/img/icon/house1.svg";
import cart2 from "../../assets/img/icon/cart2.svg";
import avatar1 from "../../assets/img/icon/avatar1.svg";
import {
   Address2,
   MainCard2,
   SecondaryCard2,
   Shipping,
   Subtotal,
   Form,
} from "./StyledCartPage";
import { Container, Contents, Menu, Title, TitleCard } from "../../Styled";
import { NavbarContainer } from "../../components/Navbar/StyledNavbar";
import {
   goToCartPage,
   goToFeedPage,
   goToProfilePage,
} from "../../routes/coordinator";
import { Button } from "../../components/RegistrationPages/StyledRegistrationPages";
import { GlobalContext } from "../../global/GlobalContext";

export function CartPage() {
   const { GlobalRequests, GlobalStates, GlobalSetStates } =
      useContext(GlobalContext);
   const navigate = useNavigate();
   const token = localStorage.getItem("token");
   const user = GlobalStates.profile;
   const cart = GlobalStates.cart;
   const setCart = GlobalSetStates.setCart;
   const cartProducts = GlobalStates.cartProducts;
   const setCartProducts = GlobalSetStates.setCartProducts;
   const restaurantDetail = GlobalStates.restaurantDetail;

   const removeItem = (idProduto, quantidade) => {
      if (quantidade > 0) {
         setCart(
            cart.map((item) => {
               if (idProduto === item.id) {
                  return {
                     ...item,
                     quantity: item.quantity--,
                  };
               }
               return item;
            })
         );

         setCartProducts(
            cartProducts.map((item) => {
               if (idProduto === item.id) {
                  return {
                     ...item,
                     quantity: item.quantity - 1,
                  };
               }
               return item;
            })
         );
      } else {
         setCart(cart.filter((item) => idProduto !== item.id));
         setCartProducts(cartProducts.filter((item) => idProduto !== item.id));
      }
   };

   const mapCart =
      restaurantDetail &&
      cart &&
      cart.map((prod) => {
         return (
            <SecondaryCard2 key={prod.id}>
               <img src={prod.photoUrl} />
               <figcaption>
                  <p>{prod.name}</p>
                  <p>{prod.description}</p>
                  <p>
                     {prod.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                     })}
                  </p>
                  <p className="view">{prod.quantity}</p>
                  <button
                     className="btn-remove"
                     onClick={() => removeItem(prod.id)}>
                     remover
                  </button>
               </figcaption>
            </SecondaryCard2>
         );
      });

   const checkCart =
      cart.length !== 0 ? (
         <>{mapCart}</>
      ) : (
         <p className="emptyCart">Carrinho vazio</p>
      );

   useEffect(() => {
      GlobalRequests.getProfile();
   }, [token]);

   return (
      <Container>
         <NavbarContainer>
            <Title>Meu carrinho</Title>
         </NavbarContainer>

         <Contents>
            <Address2>
               <div>
                  <p>Endereço de entrega</p>
                  <p>{user.address}</p>
               </div>
            </Address2>

            {cart.length > 0 ? (
               <MainCard2>
                  <figcaption>
                     <h4>{restaurantDetail.name}</h4>
                     <ul>
                        <li>{restaurantDetail.address}</li>
                        <li>
                           {restaurantDetail.deliveryTime} -{" "}
                           {Math.round(restaurantDetail.deliveryTime * 0.25) +
                              restaurantDetail.deliveryTime}{" "}
                           min
                        </li>
                     </ul>
                  </figcaption>
               </MainCard2>
            ) : null}

            <div>{checkCart}</div>

            {cart.length > 0 ? (
               <Shipping>
                  {cart.length !== 0 ? (
                     <>
                        Frete{" "}
                        {restaurantDetail.shipping.toLocaleString("pt-br", {
                           style: "currency",
                           currency: "BRL",
                        })}
                     </>
                  ) : (
                     <>Frete R$ 0,00</>
                  )}
               </Shipping>
            ) : null}

            <Subtotal>
               <p>Subtotal</p>
               <p>R$00,00 </p>
            </Subtotal>

            <Form>
               <legend>
                  <TitleCard>Forma de pagamento</TitleCard>
               </legend>

               <div>
                  <input type="radio" name="forma_pagamento" id="dinheiro" />
                  <label htmlFor="dinheiro">Dinheiro</label>
               </div>

               <div>
                  <input type="radio" name="forma_pagamento" id="credito" />
                  <label htmlFor="credito">Cartão de crédito</label>
               </div>
            </Form>

            <Button>
               <button>Confirmar</button>
            </Button>
         </Contents>

         <Menu>
            <button
               onClick={() => {
                  goToFeedPage(navigate);
               }}>
               <img src={house1} width="27" height="27" />
            </button>

            <button
               onClick={() => {
                  goToCartPage(navigate);
               }}>
               <img src={cart2} width="27" height="27" />
            </button>

            <button
               onClick={() => {
                  goToProfilePage(navigate);
               }}>
               <img src={avatar1} width="27" height="27" />
            </button>
         </Menu>
      </Container>
   );
}
