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
    ContentsHeader,
} from "./StyledFeedPage";
import { Container } from "../../Styled";
import { NavbarContainer } from "../../components/Navbar/StyledNavbar";
import { InputSearch } from "../../components/RegistrationPages/StyledRegistrationPages";
import useProtectedPage from "../../hooks/useProtectedPage";
import { CardRestaurants } from "../../components/CardRestaurants/CardRestaurants";
import { GlobalContext } from "../../components/GlobalContext";

export function FeedPage() {
    useProtectedPage();
    const { GlobalRequests } = useContext(GlobalContext);
    const [categories, setCategories] = useState("Todos");
    const [inputSearch, setInputSearch] = useState("");
    const onChangeCategories = (value) => {
        setCategories(value);
    };
    const onChangeInputSearch = (e) => {
        // e.preventdefault();
        setInputSearch(e.target.value);
    };

    useEffect(() => {
        GlobalRequests.searchRestaurants();
    }, []);

    // Lógica das cores
    const getColorTodos = (categories) => {
        if (categories === "Todos") return "#e21";
        else return "inherit";
    };
    const getColorHamburguer = (categories) => {
        if (categories === "Hamburguer") return "#e21";
        else return "inherit";
    };
    const getColorAsiatica = (categories) => {
        if (categories === "Asiática") return "#e21";
        else return "inherit";
    };
    const getColorMexicana = (categories) => {
        if (categories === "Mexicana") return "#e21";
        else return "inherit";
    };
    const getColorItaliana = (categories) => {
        if (categories === "Italiana") return "#e21";
        else return "inherit";
    };
    const getColorSorvetes = (categories) => {
        if (categories === "Sorvetes") return "#e21";
        else return "inherit";
    };
    const getColorCarnes = (categories) => {
        if (categories === "Carnes") return "#e21";
        else return "inherit";
    };
    const getColorBaiana = (categories) => {
        if (categories === "Baiana") return "#e21";
        else return "inherit";
    };
    const getColorPetiscos = (categories) => {
        if (categories === "Petiscos") return "#e21";
        else return "inherit";
    };

    return (
        <Container>
            <NavbarContainer>
                <Title>Ifuture</Title>
            </NavbarContainer>

            <Contents>
                <ContentsHeader>
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
                                categories={categories}
                                onClick={() => onChangeCategories("Todos")}
                                style={{ color: getColorTodos(categories) }}>
                                Todos
                            </button>
                        </li>
                        <li>
                            <button
                                value="Hamburguer"
                                categories={categories}
                                onClick={() => onChangeCategories("Hamburguer")}
                                style={{
                                    color: getColorHamburguer(categories),
                                }}>
                                Burger
                            </button>
                        </li>
                        <li>
                            <button
                                value="Asiática"
                                categories={categories}
                                onClick={() => onChangeCategories("Asiática")}
                                style={{ color: getColorAsiatica(categories) }}>
                                Asiática
                            </button>
                        </li>
                        <li>
                            <button
                                value="Mexicana"
                                categories={categories}
                                onClick={() => onChangeCategories("Mexicana")}
                                style={{ color: getColorMexicana(categories) }}>
                                Mexicano
                            </button>
                        </li>
                        <li>
                            <button
                                value="Italiana"
                                categories={categories}
                                onClick={() => onChangeCategories("Italiana")}
                                style={{ color: getColorItaliana(categories) }}>
                                Italiana
                            </button>
                        </li>
                        <li>
                            <button
                                value="Sorvetes"
                                categories={categories}
                                onClick={() => onChangeCategories("Sorvetes")}
                                style={{ color: getColorSorvetes(categories) }}>
                                Sorvetes
                            </button>
                        </li>
                        <li>
                            <button
                                value="Carnes"
                                categories={categories}
                                onClick={() => onChangeCategories("Carnes")}
                                style={{ color: getColorCarnes(categories) }}>
                                Carnes
                            </button>
                        </li>
                        <li>
                            <button
                                value="Baiana"
                                categories={categories}
                                onClick={() => onChangeCategories("Baiana")}
                                style={{ color: getColorBaiana(categories) }}>
                                Baiana
                            </button>
                        </li>
                        <li>
                            <button
                                value="Petiscos"
                                categories={categories}
                                onClick={() => onChangeCategories("Petiscos")}
                                style={{ color: getColorPetiscos(categories) }}>
                                Petiscos
                            </button>
                        </li>
                    </Categories>
                </ContentsHeader>

                <Cards>
                    <CardRestaurants
                        categories={categories}
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
