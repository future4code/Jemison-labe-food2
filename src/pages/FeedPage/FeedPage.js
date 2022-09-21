import React, { useContext, useEffect } from "react";
import house from "../../assets/img/icon/house.svg";
import car from "../../assets/img/icon/car.svg";
import avatar from "../../assets/img/icon/avatar.svg";
import search from "../../assets/img/search/search.svg";

import {
    Title,
    Categories,
    Card,
    Menu,
    Contents,
    Cards,
    Search,
} from "./StyledFeedPage";
import { Container } from "../../Styled";
import { NavbarContainer } from "../../components/Navbar/StyledNavbar";
import { InputSearch } from "../../components/RegistrationPages/StyledRegistrationPages";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardResraurants } from "../../components/CardRestaurants/CardRestaurants";
import { GlobalContext } from "../../components/GlobalContext";

export function FeedPage() {
    useProtectedPage();
    const {requisicoesGlobais} = useContext(GlobalContext)
    

    useEffect(() => {
        requisicoesGlobais.buscaRestaurants()
      }, [])
    

    return (
        <Container>
            <NavbarContainer>
                <Title>Ifuture</Title>
            </NavbarContainer>

            <Contents>
                <Search>
                    <img src={search} />

                    <InputSearch
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Restaurante"
                    />
                </Search>

                <Categories>
                    <li>
                        <button>Burger</button>
                    </li>
                    <li>
                        <button>Asiática</button>
                    </li>
                    <li>
                        <button>Massas</button>
                    </li>
                    <li>
                        <button>Saudável</button>
                    </li>
                    <li>
                        <button>Saudável</button>
                    </li>
                </Categories>

                <Cards>
                   <CardResraurants  />
                </Cards>
            </Contents>

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
