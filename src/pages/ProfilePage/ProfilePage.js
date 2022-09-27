import React from "react";
import house from "../../assets/img/icon/house.svg";
import car from "../../assets/img/icon/car.svg";
import avatar from "../../assets/img/icon/avatar.svg";
import edit from "../../assets/img/edit/edit.svg";

import {
    Title,
    Menu,
    Info,
    Endereco,
    Edit,
    Discricao,
    Card,

} from "./StyledProfilePage";
import { Container } from "../../Styled";
import { NavbarContainer } from "../../components/Navbar/StyledNavbar";

export function ProfilePage({}) {
    return (
        <Container>
            <NavbarContainer>
                <Title>Meu perfil</Title>
            </NavbarContainer>

            <Info>
                <p>Bruna Oliveira</p>
                <Edit>
                    <img src={edit} />
                </Edit>
                <p>bruna_o@gmail.com</p>
                <p>333.333.333-33</p>

                 {/*<p>{name}</p>
                <p>{email}</p>
                <p>{cpf}</p>*/}
            </Info>

            <Endereco>
                <p>Endereço cadastrado</p>
                <Edit>
                    <img src={edit} />
                </Edit>
                <p>Rua Alessandra Vieira, 42 - Santana</p>
              {/* <p>{address}</p>*/} 

            </Endereco>

            <Discricao>
                <h4>Histórico de pedidos</h4>
                {/*tem uma linha*/}
            </Discricao>

            <Card>
                <div>
                    <p>Bullguer Vila Madalena</p>
                    <p>23 outubro 2019</p>
                    <p>SUBTOTAL R$67,00</p>
                </div>
            </Card>
            <Card>
                <div>
                    <p>Vinil Burger Butantã</p>
                    <p>30 Setembro 2019</p>
                    <p>SUBTOTAL R$89,00</p>
                </div>
            </Card>
            <Card>
                <div>
                    <p>Bullguer Vila Madalena</p>
                    <p>10 Setembro 2019</p>
                    <p>SUBTOTAL R$77,00</p>
                </div>
            </Card>

            <Menu>
                <button>
                    <img src={house} width="27" height="27" />
                </button>
                <button>
                    <img src={car} width="27" height="27" />
                </button>
                <button>
                    <img src={avatar} width="27" height="27" />
                </button>
            </Menu>
        </Container>
    );
}
