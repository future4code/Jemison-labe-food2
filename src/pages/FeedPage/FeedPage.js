import React from "react";
import search from "../../assets/img/search/search.svg";
import image from "../../assets/img/card/image.png";
import house from "../../assets/img/icon/house.svg";
import car from "../../assets/img/icon/car.svg";
import avatar from "../../assets/img/icon/avatar.svg";

import { 
    Container, 
    Title, 
    Search, 
    Paragraph, 
    Menu, 
    Rectangle, 
    Span, 
    List, 
    Text, 
    P1, 
    P2, 
    Icon, 
    House, 
    Car, 
    Avatar
  
} from "./StyledFeedPage";


export function FeedPage() {
    return (
        <Container>
            <Title>Ifuture</Title>
            <Search>
                <img src={search} width="24" height="24" />
                <Paragraph>Restaurante</Paragraph>
            </Search>
            <Menu>
                    <List><Span>Burger</Span></List>
                    <List>Asiática</List>
                    <List>Massas</List>
                    <List>Saudável</List>
            </Menu>
        
            <Rectangle>
                <img src={image} width="328" height="120" />
                <Text>Vinil Butantã</Text>
                <P1>50 - 60 min</P1>
                <P2>Frete R$6,00</P2>
            </Rectangle>

            <Rectangle>
                <img src={image} width="328" height="120" />
                <Text>Bullguer Eldorado</Text>
                <P1>30 - 45 min</P1>
                <P2>Frete R$6,00</P2>
            </Rectangle>

            <Rectangle>
                <img src={image} width="328" height="120" />
                <Text>Vinil Butantã</Text>
                <P1>50 - 60 min</P1>
                <P2>Frete R$6,00</P2>
            </Rectangle>

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
    )
}