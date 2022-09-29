
import React from "react";

import {
    UserInfo,
    EditIcon,
    Address,
    OrderHistory,
    MainCard,
    Pag,
    RadioButton,
    Button,
    OrderItem,
} from "./StyledCarrinhoPage";
import { Container, Contents, Menu, Title, TitleCard } from "../../Styled";

import { NavbarContainer } from "../../components/Navbar/StyledNavbar";

import { useNavigate } from "react-router-dom";

//import { GlobalContext } from "../../global/GlobalContext";
//import { MainCard } from "./StyledCardRestaurantsDetails";
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
import food from "../../assets/img/restaurants_details/mao-santa-burguer.png";
import radio from "../../assets/img/radio/radio.svg";
import checked from "../../assets/img/radio/checked.svg";

export function CarrinhoPage() {
    const navigate = useNavigate();
    //const { GlobalStates } = useContext(GlobalContext);

    return (
        <Container>
            <NavbarContainer>
                <Title>Meu carrinho</Title>
            </NavbarContainer>

            <Contents>
                <Address>
                    <div>
                        <p>Endereço de entrega</p>
                        <p>Rua Alessandra Vieira, 42</p>
                    </div>
                </Address>

                <OrderHistory>
                    <p>Bullguer Vila Madalena</p>
                    <p>R.fradique Coutinho, 1136 - Vila Madalena</p>
                    <p>30 - 45 min</p>
                </OrderHistory>

                <MainCard>
                    <img src={food} />
                    <figcaption>
                        <p>Stencil</p>
                        <p>Pão, carne, queijo, cebola roxa, tomate, alface e molho.</p>
                        <p>R$46,00</p>
                        <button>remover</button>
                    </figcaption>
                </MainCard>

                <MainCard>
                    <img src={food} />
                    <figcaption>
                        <p>Cheese Fries</p>
                        <p>Porção de fritas temperada com páprica e queijo derretido.</p>
                        <p>R$15,00</p>
                        <button>remover</button>
                    </figcaption>
                </MainCard>

                <Pag>
                    <p>Frete R$6,00</p>
                    <p>SUBTOTAL R$67,00</p>
                </Pag>
                <TitleCard>Forma de pagamento</TitleCard>

                <RadioButton>
                    <img src={radio} />
                    <p>Dinheiro</p>
                </RadioButton>

                <RadioButton>
                    <img src={checked} />
                    <p>Cartão de crédito</p>
                </RadioButton>

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