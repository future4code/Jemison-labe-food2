import React, { useState, useContext } from "react";
import {
   Box,
   SecondaryCard,
} from "../CardRestaurantDetails/StyledCardRestaurantsDetails";
import Modal from "@mui/material/Modal";
import { UseForm } from "../../hooks/useForm";
import { GlobalContext } from "../../global/GlobalContext";

export function CardProductDetails({ product }) {
   const { GlobalStates, GlobalSetStates } = useContext(GlobalContext);
   const cart = GlobalStates.cart;
   const setCart = GlobalSetStates.setCart;
   const cartProducts = GlobalStates.cartProducts;
   const setCartProducts = GlobalSetStates.setCartProducts;
   const productList = GlobalStates.products;
   const [open, setOpen] = useState(false);
   const [form, handleInputChange] = UseForm({
      quantity: "",
   });

   const clearField = (e) => {
      e.preventDefault();
   };

   // Lógica carrinho
   const addCart = (id) => {
      const itemCart = cart.find((item) => id === item.id);

      if (itemCart) {
         setCartProducts(
            cartProducts.map((item) => {
               if (id === item.id) {
                  return {
                     ...item,
                     quantity: item.quantity + parseInt(Number(form.quantity)),
                  };
               }
               return item;
            })
         );
         setCart(
            cart.map((item) => {
               if (id === item.id) {
                  return {
                     ...item,
                     quantity: item.quantity + parseInt(Number(form.quantity)),
                  };
               }
               return item;
            })
         );
      } else {
         const itemAddToCart =
            productList && productList.find((item) => id === item.id);
         const newItemsCart = [
            ...cart,
            {
               ...itemAddToCart,
               quantity: parseInt(Number(form.quantity)),
            },
         ];
         setCart(newItemsCart);

         const newItems = [
            ...cartProducts,
            {
               id: id,
               quantity: parseInt(Number(form.quantity)),
            },
         ];
         setCartProducts(newItems);
      }

      handleClose();
   };

   // Lógica Modal
   const handleOpen = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <SecondaryCard>
         <img src={product.photoUrl} />
         <figcaption>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>
               {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
               })}
            </p>
            {form.quantity > 0 ? (
               // <p className="view">{cart.quantity}</p>
               <p className="view">{form.quantity}</p>
            ) : (
               <p className="null">{null}</p>
            )}

            {form.quantity > 0 ? (
               <button className="btn-remove">remover</button>
            ) : (
               <button onClick={handleOpen}>adicionar</button>
            )}
         </figcaption>

         <Modal
            open={open}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description">
            <Box onSubmit={clearField}>
               <h2 id="parent-modal-title">Selecione a quantidade desejada</h2>
               <select
                  id="parent-modal-description"
                  name="quantity"
                  onChange={handleInputChange}>
                  <option name="quantity">1</option>
                  <option name="quantity">2</option>
                  <option name="quantity">3</option>
                  <option name="quantity">4</option>
                  <option name="quantity">5</option>
                  <option name="quantity">6</option>
                  <option name="quantity">7</option>
                  <option name="quantity">8</option>
                  <option name="quantity">9</option>
                  <option name="quantity">10</option>
               </select>

               <button type="submit" onClick={() => addCart(product.id)}>
                  Adicionar ao carrinho
               </button>
            </Box>
         </Modal>
      </SecondaryCard>
   );
}
