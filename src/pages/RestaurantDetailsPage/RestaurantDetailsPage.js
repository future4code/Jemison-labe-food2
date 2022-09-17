import React from "react";
import { Container } from "../../Styled";

export function RestaurantDetailsPage() {
    return (
        <Container>
            <h1>Pagina RestaurantDetailsPage</h1>
        </Container>
    );
}

/*
RestaurantDetailsPage.js

import React from "react";
import { Container } from "../../Styled";
import search from "../../assets/img/search/search.svg";
import image from "../../assets/img/card/image.png";
import house from "../../assets/img/icon/house.svg";
import car from "../../assets/img/icon/car.svg";
import avatar from "../../assets/img/icon/avatar.svg";

import { 
    
    Title, 
    Search, 
    Card, 
    Text, 
    P1, 
    P2, 
    Icon, 
    House, 
    Car, 
    Avatar,
    Paragrafo 
} from "./StyledRestaurantDetailsPage";

export function RestaurantDetailsPage() {
    return (
        <Container>
             <Title>Busca</Title>
            <Search>
                <img src={search} width="24" height="24" />
                <Paragrafo>Restaurante</Paragrafo>
            </Search>
        
            <Card>
                <img src={image} width="328" height="120" />
                <Text>Vinil Butantã</Text>
                <P1>50 - 60 min</P1>
                <P2>Frete R$6,00</P2>
            </Card>

            <Card>
                <img src={image} width="328" height="120" />
                <Text>Bullguer Eldorado</Text>
                <P1>30 - 45 min</P1>
                <P2>Frete R$6,00</P2>
            </Card>

            <Card>
                <img src={image} width="328" height="120" />
                <Text>Vinil Butantã</Text>
                <P1>50 - 60 min</P1>
                <P2>Frete R$6,00</P2>
            </Card>

            <Icon>
                <House>
                    <img src={house} width="27" height="27" />
                </House>
                <Car>
                    <img src={car} width="27" height="27" />
                </Car>
                <Avatar>
                    <img src={avatar} width="27" height="27" />
                </Avatar>
            </Icon>
        </Container>
    );
}

*/
