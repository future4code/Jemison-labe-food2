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
import food from "../../assets/img/restaurants_details/mao-santa-burguer.png";
import { Button } from "../../components/RegistrationPages/StyledRegistrationPages";
import { GlobalContext } from "../../global/GlobalContext";

export function CartPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const { GlobalRequests, GlobalStates } = useContext(GlobalContext);

    const user = GlobalStates.perfil;
    
    const carrinho = GlobalStates.carrinho;
    
    console.log(carrinho)

    // const renderizarCart = carrinho.map((item)=>{
    //     return (
    //         <div>
    //             <p>{item.name}</p>
    //         </div>
    //     )
    // })
















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
              
                <MainCard2>
                    <figcaption>
                        <h4>Bullguer Vila Madalena</h4>
                        <ul>
                            <li>R.fradique Coutinho, 1136 - Vila Madalena</li>
                            <li>30 - 45 min</li>
                        </ul>
                    </figcaption>

                    
                </MainCard2>

                {carrinho > 0 ? <p> carrinho fazio</p>: <>{carrinho.name}</>}
                <SecondaryCard2>
                    {/* <img src={food} />
                    <figcaption>
                        <p>Stencil</p>
                        <p>
                            Pão, carne, queijo, cebola roxa, tomate, alface e
                            molho.
                        </p>
                        <p>R$46,00</p>
                        <p className="view">2</p>
                        <button className="btn-remove">remover</button>
                    </figcaption> */}
                    
                </SecondaryCard2>

               

                <Shipping>Frete R$6,00</Shipping>

                <Subtotal>
                    <p>Subtotal</p>
                    <p>R$67,00</p>
                </Subtotal>

                <Form>
                    <legend>
                        <TitleCard>Forma de pagamento</TitleCard>
                    </legend>

                    <div>
                        <input
                            type="radio"
                            name="forma_pagamento"
                            id="dinheiro"
                        />
                        <label htmlFor="dinheiro">Dinheiro</label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            name="forma_pagamento"
                            id="credito"
                        />
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
