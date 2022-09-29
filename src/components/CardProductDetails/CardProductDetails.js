import React, { useState } from "react";
import {
    Box,
    SecondaryCard,
} from "../CardRestaurantDetails/StyledCardRestaurantsDetails";
import Modal from "@mui/material/Modal";

export function CardProductDetails({ product }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);

    // Lógica Modal
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // Lógica Form Modal
    const onChangeValue = (e) => {
        setValue(Number(e.target.value));
    };

    // Lógica adicionar produto ao carrinho

    // Lógica remover produto do carrinho

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
                {value > 0 ? (
                    <p className="view">{value}</p>
                ) : (
                    <p className="null">{null}</p>
                )}

                {value > 0 ? (
                    <button className="btn-remove">remover</button>
                ) : (
                    <button onClick={handleOpen}>adicionar</button>
                )}
            </figcaption>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description">
                <Box>
                    <h2 id="parent-modal-title">
                        Selecione a quantidade desejada
                    </h2>
                    <select
                        id="parent-modal-description"
                        value={value}
                        onChange={onChangeValue}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>

                    <button onClick={handleClose}>Adicionar ao carrinho</button>
                </Box>
            </Modal>
        </SecondaryCard>
    );
}
