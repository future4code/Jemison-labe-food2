import React from "react";
import { Container, Contents, Menu } from "../../Styled";
import { useNavigate } from "react-router-dom";
import {
    goToCartPage,
    goToFeedPage,
    goToProfilePage,
} from "../../routes/coordinator";
import house1 from "../../assets/img/icon/house1.svg";
import cart2 from "../../assets/img/icon/cart2.svg";
import avatar1 from "../../assets/img/icon/avatar1.svg";

export function CartPage() {
    const navigate = useNavigate();

    return (
        <Container>
            <h1>Pagina CartPage</h1>
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
