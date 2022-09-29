import React from "react";
import edit from "../../assets/img/edit/edit.svg";
import {
    UserInfo,
    EditIcon,
    Address,
    OrderHistory,
    OrderItem,
} from "./StyledProfilePage";
import { Container, Contents, Menu, Title, TitleCard } from "../../Styled";
import { NavbarContainer } from "../../components/Navbar/StyledNavbar";
import { useNavigate } from "react-router-dom";
import {
    goToCartPage,
    goToFeedPage,
    goToProfilePage,
    goToProfileEditUser,
    goToProfileEditAddress,
} from "../../routes/coordinator";
import house1 from "../../assets/img/icon/house1.svg";
import cart1 from "../../assets/img/icon/cart1.svg";
import avatar2 from "../../assets/img/icon/avatar2.svg";

export function ProfilePage() {
    const navigate = useNavigate();

    return (
        <Container>
            <NavbarContainer>
                <Title>Meu perfil</Title>
            </NavbarContainer>

            <Contents>
                <UserInfo>
                    <div>
                        <p>Bruna Oliveira</p>
                        <p>bruna_o@gmail.com</p>
                        <p>333.333.333-33</p>
                    </div>
                    <EditIcon onClick={() => goToProfileEditUser(navigate)}>
                        <img src={edit} />
                    </EditIcon>
                </UserInfo>

                <Address>
                    <div>
                        <p>Endereço cadastrado</p>
                        <p>Rua Alessandra Vieira, 42 - Santana</p>
                    </div>
                    <EditIcon onClick={() => goToProfileEditAddress(navigate)}>
                        <img src={edit} />
                    </EditIcon>
                </Address>

                <OrderHistory>
                    <TitleCard>Histórico de pedidos</TitleCard>

                    <OrderItem>
                        <p>Bullguer Vila Madalena</p>
                        <p>23 outubro 2019</p>
                        <p>SUBTOTAL R$67,00</p>
                    </OrderItem>

                    <OrderItem>
                        <p>Vinil Burger Butantã</p>
                        <p>30 Setembro 2019</p>
                        <p>SUBTOTAL R$89,00</p>
                    </OrderItem>

                    <OrderItem>
                        <p>Bullguer Vila Madalena</p>
                        <p>10 Setembro 2019</p>
                        <p>SUBTOTAL R$77,00</p>
                    </OrderItem>
                </OrderHistory>
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
                    <img src={cart1} width="27" height="27" />
                </button>

                <button
                    onClick={() => {
                        goToProfilePage(navigate);
                    }}>
                    <img src={avatar2} width="27" height="27" />
                </button>
            </Menu>
        </Container>
    );
}




