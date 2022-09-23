import React, { useContext, useEffect, useState } from "react";
import house from "../../assets/img/icon/house.svg";
import car from "../../assets/img/icon/car.svg";
import avatar from "../../assets/img/icon/avatar.svg";
import search from "../../assets/img/search/search.svg";
import {
    Title,
    Categories,
    Menu,
    Contents,
    Cards,
    Search,
} from "./StyledFeedPage";
import { Container } from "../../Styled";
import { NavbarContainer } from "../../components/Navbar/StyledNavbar";
import { InputSearch } from "../../components/RegistrationPages/StyledRegistrationPages";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardRestaurants } from "../../components/CardRestaurants/CardRestaurants";
import { GlobalContext } from "../../components/GlobalContext";

export function FeedPage() {
    useProtectedPage();
    const { requisicoesGlobais } = useContext(GlobalContext);
    const [categorias, setCategorias] = useState("Todos");
    const [inputSearch, setInputSearch] = useState("");
    const onChangeCategorias = (value) => {
        setCategorias(value);
    };
    const onChangeInputSearch = (e) => {
        // e.preventdefault()
        setInputSearch(e.target.value);
    };
    useEffect(() => {
        requisicoesGlobais.buscaRestaurants();
    }, []);

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
                        onChange={onChangeInputSearch}
                        placeholder="Restaurante"
                    />
                </Search>

                <Categories>
                    <li>
                        <button
                            value="Todos"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Todos")}>
                            Todos
                        </button>
                    </li>

                    <li>
                        <button
                            value="Hamburguer"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Hamburguer")}>
                            Burger
                        </button>
                    </li>
                    <li>
                        <button
                            value="Asiática"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Asiática")}>
                            Asiática
                        </button>
                    </li>
                    <li>
                        <button
                            value="Mexicana"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Mexicana")}>
                            Mexicano
                        </button>
                    </li>
                    <li>
                        <button
                            value="Italiana"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Italiana")}>
                            Italiana
                        </button>
                    </li>
                    <li>
                        <button
                            value="Sorvetes"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Sorvetes")}>
                            Sorvetes
                        </button>
                    </li>

                    <li>
                        <button
                            value="Carnes"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Carnes")}>
                            Carnes
                        </button>
                    </li>

                    <li>
                        <button
                            value="Baiana"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Baiana")}>
                            Baiana
                        </button>
                    </li>

                    <li>
                        <button
                            value="Petiscos"
                            categorias={categorias}
                            onClick={() => onChangeCategorias("Petiscos")}>
                            Petiscos
                        </button>
                    </li>
                </Categories>

                <Cards>
                    <CardRestaurants
                        categorias={categorias}
                        inputSearch={inputSearch}
                    />
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
