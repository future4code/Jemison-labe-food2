import React, { useState } from "react";
import {
    Box,
    SecondaryCard,
} from "../CardRestaurantDetails/StyledCardRestaurantsDetails";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

export function CardProductDetails({ produto }) {
    const [open, setOpen] = useState(false);
    const [valor, setValor] = useState(0);

    // Lógica Modal
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // Lógica Form Modal
    const onChangevalor = (e) => {
        setValor(Number(e.target.value));
    };

    return (
        <div>
            <SecondaryCard>
                <img src={produto.photoUrl} />
                <figcaption>
                    <p>{produto.name}</p>
                    <p>{produto.description}</p>
                    <p>
                        {produto.price.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        })}
                    </p>
                    {valor > 0 ? <p className="view">{valor}</p> : <p className="null">{null}</p>}

                    <button onClick={handleOpen}>adicionar</button>
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
                            value={valor}
                            onChange={onChangevalor}>
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

                        <button onClick={handleClose}>
                            Adicionar ao carrinho
                        </button>
                    </Box>
                </Modal>
            </SecondaryCard>
        </div>
    );
}
