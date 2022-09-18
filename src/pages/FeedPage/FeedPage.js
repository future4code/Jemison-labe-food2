import React from "react";
import vinil from "../../assets/img/card/vinil.jpg";
import eldorado from "../../assets/img/card/eldorado.png";
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

export function FeedPage() {
    useProtectedPage();

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
                </Categories>

                <Cards>
                    <Card>
                        <img src={vinil} />

                        <figcaption>
                            <h4>Vinil Butantã</h4>

                            <div>
                                <p>50 - 60 min</p>
                                <p>Frete R$6,00</p>
                            </div>
                        </figcaption>
                    </Card>

                    <Card>
                        <img src={eldorado} />

                        <figcaption>
                            <h4>Bullguer Eldorado</h4>

                            <div>
                                <p>30 - 45 min</p>
                                <p>Frete R$6,00</p>
                            </div>
                        </figcaption>
                    </Card>

                    <Card>
                        <img src={vinil} />

                        <figcaption>
                            <h4>Vinil Butantã</h4>

                            <div>
                                <p>50 - 60 min</p>
                                <p>Frete R$6,00</p>
                            </div>
                        </figcaption>
                    </Card>
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
